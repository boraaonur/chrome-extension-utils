import { ArrayUtils } from "./array-utils.js";
import { ObjectUtils } from "./object-utils.js";
export declare class ChromeStorageUtils {
    static get({ storageKey }: {
        storageKey: string;
    }): Promise<any>;
    static set({ storageKey, data }: {
        storageKey: string;
        data: any;
    }): void;
    static array: typeof ArrayUtils;
    static object: typeof ObjectUtils;
}
