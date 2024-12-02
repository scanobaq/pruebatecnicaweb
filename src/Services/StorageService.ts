import { Storage } from "@ionic/storage";

export class StorageService {
  private static _instance: StorageService;
  private _storage: Storage | null = null;
  private _initialized: boolean = false;

  private constructor() {
    this._storage = new Storage();
    this.init();
  }

  static getInstance(): StorageService {
    if (!StorageService._instance) {
      StorageService._instance = new StorageService();
    }
    return StorageService._instance;
  }

  async init() {
    try {
      if (this._storage && !this._initialized) {
        await this._storage.create();
        this._initialized = true;
      }
    } catch (error) {
      console.error("Error initializing storage:", error);
      throw new Error("Failed to initialize storage");
    }
  }

  private async ensureInitialized() {
    if (!this._initialized) {
      await this.init();
    }
  }

  public async set(key: string, value: any): Promise<void> {
    try {
      await this.ensureInitialized();
      if (!this._storage) throw new Error("Storage is not initialized");
      await this._storage.set(key, value);
    } catch (error) {
      console.error(`Error setting value for key ${key}:`, error);
      throw error;
    }
  }

  public async get<T>(key: string): Promise<T | null> {
    try {
      await this.ensureInitialized();
      if (!this._storage) throw new Error("Storage is not initialized");
      return await this._storage.get(key);
    } catch (error) {
      console.error(`Error getting value for key ${key}:`, error);
      throw error;
    }
  }

  public async remove(key: string): Promise<void> {
    try {
      await this.ensureInitialized();
      if (!this._storage) throw new Error("Storage is not initialized");
      await this._storage.remove(key);
    } catch (error) {
      console.error(`Error removing key ${key}:`, error);
      throw error;
    }
  }

  public async clear(): Promise<void> {
    try {
      await this.ensureInitialized();
      if (!this._storage) throw new Error("Storage is not initialized");
      await this._storage.clear();
    } catch (error) {
      console.error("Error clearing storage:", error);
      throw error;
    }
  }
}
