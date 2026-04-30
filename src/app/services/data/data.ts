import { Injectable, Signal, computed, effect, signal, inject } from '@angular/core';
import { httpResource } from '@angular/common/http';

import { AnimalProfile } from '../../types/animal-profile';
import { AnimalProfileSerialized } from '../../types/animal-profile-serialized';

export interface StorageAdapter {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

@Injectable({
  providedIn: 'root',
})
export class SessionStorageAdapter implements StorageAdapter {
  getItem(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}

@Injectable({
  providedIn: 'root',
})
export class Data {
  private readonly STORAGE_KEY = 'animal-profiles';
  private readonly storage: StorageAdapter = inject(SessionStorageAdapter);

  readonly #data = signal<AnimalProfile[]>([]);
  readonly #resource = httpResource<AnimalProfile[]>(() => 'records.json', {
    parse: (data) => this.deserializeData(data as AnimalProfileSerialized[]),
  });

  public readonly list = this.#data.asReadonly();
  public readonly loading = this.#resource.isLoading;

  constructor() {
    if (!this.loadFromStorage()) {
      this.#resource.reload();
    }

    effect(() => {
      const data = this.#data();
      if (data.length > 0) {
        this.saveToStorage(data);
      }
    });

    effect(() => {
      const data = this.#resource.value();
      if (data) {
        this.#data.set(data);
      }
    });
  }

  public load(data: AnimalProfile[]): void {
    this.#data.set(data);
  }

  public get(id: string | null): Signal<AnimalProfile | undefined> {
    return computed(() => this.#data().find((record) => record.id === id));
  }

  public set(value: AnimalProfile): void {
    this.#data.update((data) => [...data.filter((record) => record.id !== value.id), value]);
  }

  public delete(id: string): void {
    this.#data.update((data) => data.filter((record) => record.id !== id));
  }

  public toggleNeedsAttention(id: string): void {
    this.#data.update((data) => {
      if (!data.some((record) => record.id === id)) return data;
      return data.map((record) =>
        record.id === id ? { ...record, needsAttention: !record.needsAttention } : record,
      );
    });
  }

  public resetData(): void {
    this.storage.removeItem(this.STORAGE_KEY);
    this.#resource.reload();
  }

  private loadFromStorage(): boolean {
    try {
      const stored = this.storage.getItem(this.STORAGE_KEY);
      if (stored) {
        const serialized = JSON.parse(stored) as AnimalProfileSerialized[];
        const data = this.deserializeData(serialized);
        this.#data.set(data);
        return true;
      }
    } catch (error) {
      console.warn('Failed to load from storage:', error);
    }
    return false;
  }

  private saveToStorage(data: AnimalProfile[]): void {
    try {
      const serialized = this.serializeData(data);
      this.storage.setItem(this.STORAGE_KEY, JSON.stringify(serialized));
    } catch (error) {
      console.warn('Failed to save to storage:', error);
    }
  }

  private deserializeData(data: AnimalProfileSerialized[]): AnimalProfile[] {
    return data.map((item) => ({
      ...item,
      birthdate: item.birthdate ? new Date(item.birthdate) : undefined,
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt),
    }));
  }

  private serializeData(data: AnimalProfile[]): AnimalProfileSerialized[] {
    return data.map((item) => ({
      ...item,
      birthdate: item.birthdate?.toISOString(),
      createdAt: item.createdAt.toISOString(),
      updatedAt: item.updatedAt.toISOString(),
    }));
  }
}
