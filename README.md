<p align="center">
  <img src="http://static.photoeditorsdk.com/logo.png" />
</p>

# PhotoEditor SDK Ionic Plugin Demo
This project shows how to easily integrate the [PhotoEditor SDK](https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Ionic-Demo) into an Ionic application using our [cordova demo plugin](https://github.com/imgly/pesdk-cordova-demo).

**THIS IS A DEMO**. This repository is not meant as a fully fledged Ionic plugin, but as a base for further development instead. See the [plugin repository](https://github.com/imgly/pesdk-cordova-demo) for more details on how to implement a full plugin for your use case.

## Example App
The included example app demonstrates how to open the PhotoEditor SDK's camera and pass any taken or selected images to the editor. When an edited image is saved, its filepath is sent back to Ionic and displayed using a JavaScript alert. An app could then display this image in Ionic or send it to a backend. To launch the example app, take a look at the *Launch Example* section below.

## License 
The PhotoEditorSDK is a product of 9elements GmbH. 
Please [order a license](https://www.photoeditorsdk.com/pricing#contact/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Ionic-Demo). Please see the included [LICENSE](LICENSE.md) for licensing details.

## PhotoEditor SDK for iOS & Android
The [PhotoEditor SDK](https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Ionic-Demo) for iOS and Android are **fully customizable** photo editors which you can integrate into your Cordova app within minutes.

## Setup Process
The example app was created using the following commands: 

```
$ git init
$ ionic start PESDKDemo blank --v2
$ cd PESDKDemo
$ ionic cordova platform add android
$ ionic cordova platform add ios
```

This creates a new Ionic app and adds the iOS and Android platforms. You can then add our `pesdk-cordova-demo` as a submodule in the **root directory** and add it as a plugin to the Ionic app:

```
$ cd ..
$ git submodule add git@github.com:imgly/pesdk-cordova-demo.git
```

Once this is done, you can go back into your PESDKDemo ionic project and link the plugin from within the parent directory:

```
$ cd PESDKDemo
$ cordova plugin add ../pesdk-cordova-demo --nofetch
```

For iOS you need to manually set the `Always Embed Swift Standard Libraries` flag in the Xcode projects build settings. Otherwise the app will crash upon launch. Furthermore you need to add your PESDK license files as `LICENSE_ANDROID` and `LICENSE_IOS` for each platform and change the usage descriptions for accessing camera and photo library on iOS. Take a look at our [cordova demo](https://github.com/imgly/pesdk-cordova-demo) for more details on how to modify the native plugins to match your requirements.

## Launch Example
Once you cloned this repository, you need to run the following commands in order to launch the example app on devices or emulators you need to run the following commands from the `/PESDKDemo` directory:
```
$ git submodule update
$ npm install
$ ionic cordova build ios
$ ionic cordova build android
$ cp LICENSE_ANDROID platforms/android/assets
$ cordova plugin add ../pesdk-cordova-demo --nofetch
```

**Note:** Cordova 7.0 and Ionic 3.5 changed the CLI interfaces and created some issues when installing the PhotoEditor SDK plugin from a local folder. Using the `cordova` CLI interface directly should fix these issues.

This builds the app for both platforms and copies the Android license file to the corresponding directory. Afterwards you need to add the `LICENSE_IOS` file to the iOS app by opening [PESDKDemo.xcworkspace](/example/platforms/ios/PESDKDemo.xcworkspace) using Xcode and dragging the license file into the sidebar. Within Xcode you then need to enable the `Always Embed Swift Standard Libraries` build setting for the PESDKDemo target.

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
Made 2013-2017 by @9elements

## Support or Contact
Contact contact@photoeditorsdk.com for support requests or to upgrade to an enterprise licence.
