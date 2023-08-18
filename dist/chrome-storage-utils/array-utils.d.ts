export declare class ArrayUtils {
    static add({ storageKey, data }: {
        storageKey: string;
        data: any;
    }): Promise<any[]>;
    static remove({ storageKey, index, }: {
        storageKey: string;
        index: number;
    }): Promise<any[]>;
    static get({ key, index, }: {
        key: string;
        index: number;
    }): Promise<any>;
    static set({ storageKey, data, index, }: {
        storageKey: string;
        data: any;
        index: number;
    }): Promise<void>;
}
