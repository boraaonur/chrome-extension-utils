import { ChromeStorageUtils } from "./index.js";
export class ObjectUtils {
    static async add({ storageKey, key, data, }) {
        let obj = (await ChromeStorageUtils.get({ storageKey })) || {};
        obj[key] = data;
        ChromeStorageUtils.set({
            storageKey,
            data: obj,
        });
        console.log("Added to object.");
        return obj;
    }
    static async remove({ storageKey, key, }) {
        let obj = (await ChromeStorageUtils.get({ storageKey })) || {};
        delete obj[key];
        ChromeStorageUtils.set({
            storageKey,
            data: obj,
        });
        console.log("Removed from object.");
        return obj;
    }
    static async get({ storageKey, key }) {
        const obj = (await ChromeStorageUtils.get({ storageKey })) || {};
        return obj[key];
    }
    static async set({ storageKey, key, data, }) {
        let obj = (await ChromeStorageUtils.get({ storageKey })) || {};
        obj[key] = data;
        ChromeStorageUtils.set({
            storageKey,
            data: obj,
        });
    }
}
