import { ArrayUtils } from "./array-utils.js";
import { ObjectUtils } from "./object-utils.js";

export class ChromeStorageUtils {
  static async get({ storageKey }: { storageKey: string }) {
    const result = await chrome.storage.local.get(storageKey);
    return result[storageKey];
  }

  static set({ storageKey, data }: { storageKey: string; data: any }) {
    chrome.storage.local.set(
      {
        [storageKey]: data,
      },
      function () {
        // Data is saved successfully
        console.log("Data saved");
      }
    );
  }

  static array = ArrayUtils;
  static object = ObjectUtils;
}
