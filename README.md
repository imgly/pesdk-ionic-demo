<p align="center">
  <img src="http://static.photoeditorsdk.com/logo.png" />
</p>

# PhotoEditor SDK Ionic Plugin Demo
This project shows how to easily integrate the [PhotoEditor SDK](https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Ionic-Demo) into an Ionic application using our [cordova demo plugin](https://github.com/imgly/pesdk-cordova-demo).

**THIS IS A DEMO**. This repository is not meant as a fully fledged Ionic plugin, but as a base for further development instead. See the [plugin repository](https://github.com/imgly/pesdk-cordova-demo) for more details on how to implement a full plugin for your use case.

## Example App
The included example app demonstrates how to open the PhotoEditor SDK's camera and pass any taken or selected images to the editor. When an edited image is saved, its filepath is sent back to Ionic and displayed using a JavaScript alert. An app could then display this image in Ionic or send it to a backend. To launch the example app, take a look at the *Launch Example* section below.

## License 
The PhotoEditorSDK is a product of img.ly GmbH. 
Please [order a license](https://www.photoeditorsdk.com/pricing#contact/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Ionic-Demo). Please see the included [LICENSE](LICENSE.md) for licensing details.

## PhotoEditor SDK for iOS & Android
The [PhotoEditor SDK](https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Ionic-Demo) for iOS and Android are **fully customizable** photo editors which you can integrate into your Cordova app within minutes.

## Setup Process

:warning: Created using `Cordova 8.0.0` and `Ionic CLI 3.20`.

The example app was created using the following commands:

To begin, clone the PESDK Cordova plugin demo to your root directory and add it as a submodule:

```bash
$ git init
$ git submodule add git@github.com:imgly/pesdk-cordova-demo.git
```

Move on with creating a new Ionic app and adding the iOS and Android platforms:

```bash
$ ionic start PESDKDemo blank
# Select yes, when asked about integrating Cordova to target native iOS and Android.
$ cd PESDKDemo
$ ionic cordova platform add android
$ ionic cordova platform add ios
```

You can then add our `pesdk-cordova-demo` as a plugin to the Ionic app:

```bash
$ ionic cordova plugin add ../pesdk-cordova-demo --nofetch
```

This will use the plugin source files from the submodule you created before to add the PESDK plugin to both platforms.

## Licensing and further customizations
For iOS you need to manually add your PESDK license file as `LICENSE_IOS` to the Xcode project. On Android, the license file just needs to be added to the `/app/main/assets` directory as `LICENSE_ANDROID`. Take a look at our [cordova demo](https://github.com/imgly/pesdk-cordova-demo) for more details on how to modify the native plugins to match your requirements.

:warning: **You'll need to make sure the Ionic ID/iOS Bundle ID/Android App ID matches your license file**

## Launch Example
Once you cloned this repository, you need to run the following commands in order to launch the example app on devices or emulators:
```bash
$ git submodule update
$ cd PESDKDemo
$ npm install
$ ionic cordova build ios
$ ionic cordova build android
$ cp LICENSE_ANDROID platforms/android/assets
$ cordova plugin add ../pesdk-cordova-demo --nofetch
```

This builds the app for both platforms and copies the Android license file to the corresponding directory. Afterwards you need to add the `LICENSE_IOS` file to the iOS app by opening [PESDKDemo.xcworkspace](/example/platforms/ios/PESDKDemo.xcworkspace) using Xcode and dragging the license file into the sidebar.

Once all license copying is done and both platforms have been built, the app can be run using the following commands:
```
$ ionic cordova emulate ios
$ ionic cordova emulate android
```

## Running in the Browser

The app will run in your browser using ```ionic serve```, but will throw an error upon clicking the 'Open PhotoEditor SDK' button, as there is no browser implementation.

## License
Please see [LICENSE](https://github.com/imgly/pesdk-html5-rails/blob/master/LICENSE.md) for licensing details.

## Authors and Contributors
Made 2013-2019 by img.ly

## Support or Contact
Use our [service desk](http://support.photoeditorsdk.com) for bug reports or support requests. To request a commercial license, please use the [license request form](https://www.photoeditorsdk.com/pricing) on our website.
