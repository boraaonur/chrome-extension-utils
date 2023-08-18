export declare class ObjectUtils {
    static add({ storageKey, key, data, }: {
        storageKey: string;
        key: string;
        data: any;
    }): Promise<any>;
    static remove({ storageKey, key, }: {
        storageKey: string;
        key: string;
    }): Promise<any>;
    static get({ storageKey, key }: {
        storageKey: string;
        key: string;
    }): Promise<any>;
    static set({ storageKey, key, data, }: {
        storageKey: string;
        key: string;
        data: any;
    }): Promise<void>;
}
