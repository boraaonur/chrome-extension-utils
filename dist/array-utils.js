import { ChromeStorageUtils } from "./chrome-storage-utils.js";
export class ArrayUtils {
    static async add({ storageKey, data }) {
        var _array = (await ChromeStorageUtils.get({ storageKey })) || [];
        _array.push(data);
        ChromeStorageUtils.set({
            storageKey: storageKey,
            data: _array,
        });
        console.log("Added to array.");
        return _array;
    }
    static async remove({ storageKey, index, }) {
        var _array = (await ChromeStorageUtils.get({ storageKey })) || [];
        _array = _array.filter((_, _index) => {
            return index !== _index;
        });
        ChromeStorageUtils.set({
            storageKey: storageKey,
            data: _array,
        });
        console.log("Removed from array.");
        return _array;
    }
    static async get({ key, index, } // callback?: (items: { [key: string]: any }) => void
    ) {
        const result = await chrome.storage.local.get(key);
        return result[key][index];
    }
    static async set({ storageKey, data, index, }) {
        var _array = (await ChromeStorageUtils.get({ storageKey })) || [];
        _array[index] = data;
        chrome.storage.local.set({
            [storageKey]: _array,
        }, function () {
            // Data is saved successfully
            console.log("Data saved");
        });
    }
}
