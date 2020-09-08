<p align="center">
  <a href="https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=PESDK&utm_content=Ionic-Demo">
    <img src="http://static.photoeditorsdk.com/logo.png" alt="PhotoEditor SDK Logo"/>
  </a>
</p>
<p align="center">
  <a href="https://npmjs.org/package/cordova-plugin-photoeditorsdk">
    <img src="https://img.shields.io/npm/v/cordova-plugin-photoeditorsdk.svg" alt="NPM version">
  </a>
  <img src="https://img.shields.io/badge/platforms-android%20|%20ios-lightgrey.svg" alt="Platform support">
  <a href="http://twitter.com/PhotoEditorSDK">
    <img src="https://img.shields.io/badge/twitter-@PhotoEditorSDK-blue.svg?style=flat" alt="Twitter">
  </a>
</p>

# PhotoEditor SDK Ionic Example App

This project shows how to integrate [PhotoEditor SDK](https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=PESDK&utm_content=Ionic-Demo) into an Ionic application with the [Cordova plugin for PhotoEditor SDK](https://github.com/imgly/pesdk-cordova) which is available via NPM as [`cordova-plugin-photoeditorsdk`](https://www.npmjs.com/package/cordova-plugin-photoeditorsdk).

## Getting started

After cloning this repository, perform the following steps to run the example application:

1. Add platforms to your project as follows:
   ```sh
   ionic cordova platform add android
   # or/and
   ionic cordova platform add ios
   ```

2. Add PhotoEditor SDK plugin to your project as follows:
   ```sh
   ionic cordova plugin add cordova-plugin-photoeditorsdk
   ```

3. Run the application:
   ```sh
   # run Android
   ionic cordova run android
   # run iOS
   ionic cordova run ios
   ```

## Unlock the SDK

PhotoEditor SDK is a product of img.ly GmbH. Without unlocking, the SDK is fully functional but a watermark is added on top of the image preview and any exported images.
In order to remove the watermark and to use PhotoEditor SDK within your app **you'll need to [request a license](https://account.photoeditorsdk.com/pricing/?utm_campaign=Projects&utm_source=Github&utm_medium=PESDK&utm_content=Ionic-Demo) for each platform and load the license file(s)** in your app with the following single line of code that automatically resolves multiple license files via platform-specific file extensions.

Rename your license files:
- Android license: `ANY_NAME.android`
- iOS license: `ANY_NAME.ios`

Pass the file path without the extension to the `unlockWithLicense` function to unlock both iOS and Android:
```js
PESDK.unlockWithLicense('www/assets/ANY_NAME');
```

#### Notes for Ionic framework

- Add this line above your class to be able to use `PESDK`.
  ```js
  declare var PESDK;
  ```
- Ionic will generate a `www` folder that will contain your compiled code and your assets. In order to pass resources to PhotoEditor SDK you need to use this folder.

## PhotoEditor SDK for iOS & Android

The Cordova plugin for PhotoEditor SDK includes a rich set of most commonly used [configuration and customization options](https://github.com/imgly/pesdk-cordova/blob/master/types/configuration.ts) of PhotoEditor SDK for iOS and Android. The native frameworks provide **fully customizable** photo editors. Please refer to [our documentation](https://docs.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=PESDK&utm_content=Ionic-Demo) for more details.

## License Terms

Make sure you have a [commercial license](https://account.photoeditorsdk.com/pricing/?utm_campaign=Projects&utm_source=Github&utm_medium=PESDK&utm_content=Ionic-Demo) for PhotoEditor SDK before releasing your app.
A commercial license is required for any app or service that has any form of monetization: This includes free apps with in-app purchases or ad supported applications. Please contact us if you want to purchase the commercial license.

## Support and License

Use our [service desk](http://support.photoeditorsdk.com) for bug reports or support requests. To request a commercial license, please use the [license request form](https://account.photoeditorsdk.com/pricing/?utm_campaign=Projects&utm_source=Github&utm_medium=PESDK&utm_content=Ionic-Demo) on our website.
