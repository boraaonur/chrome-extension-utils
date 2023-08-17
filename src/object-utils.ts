import { ChromeStorageUtils } from "./chrome-storage-utils.js";

export class ObjectUtils {
  static async add({
    storageKey,
    key,
    data,
  }: {
    storageKey: string;
    key: string;
    data: any;
  }) {
    let obj = (await ChromeStorageUtils.get({ storageKey })) || {};

    obj[key] = data;

    ChromeStorageUtils.set({
      storageKey,
      data: obj,
    });

    console.log("Added to object.");

    return obj;
  }

  static async remove({
    storageKey,
    key,
  }: {
    storageKey: string;
    key: string;
  }) {
    let obj = (await ChromeStorageUtils.get({ storageKey })) || {};

    delete obj[key];

    ChromeStorageUtils.set({
      storageKey,
      data: obj,
    });

    console.log("Removed from object.");

    return obj;
  }

  static async get({ storageKey, key }: { storageKey: string; key: string }) {
    const obj = (await ChromeStorageUtils.get({ storageKey })) || {};
    return obj[key];
  }

  static async set({
    storageKey,
    key,
    data,
  }: {
    storageKey: string;
    key: string;
    data: any;
  }) {
    let obj = (await ChromeStorageUtils.get({ storageKey })) || {};

    obj[key] = data;

    ChromeStorageUtils.set({
      storageKey,
      data: obj,
    });
  }
}
