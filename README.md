# chrome-storage-utils

A simple utility tool for Chrome extensions. This is a wrapper for `chrome.storage.local` methods to simplify its usage.

## Usage

Here are the basic methods you can use:

- `ChromeStorageUtils.get(storageKey)`
- `ChromeStorageUtils.set(storageKey, data)`
- `ChromeStorageUtils.array.add(storageKey, data)`
- `ChromeStorageUtils.array.remove(storageKey, data, index)`
- `ChromeStorageUtils.array.get(storageKey, index)`
- `ChromeStorageUtils.array.set(storageKey, data, index)`

## Installation

To install, run:

```
npm install boraaonur/chrome-storage-utils
```