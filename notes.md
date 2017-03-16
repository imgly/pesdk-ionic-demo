<p align="center">
  <img src="http://static.photoeditorsdk.com/logo.png" />
</p>

# PhotoEditor SDK Ionic Plugin Demo
This project shows how to easily integrate the [PhotoEditorSDK](https://www.photoeditorsdk.com?utm_source=Github&utm_medium=PESDK&utm_term=Cordova-Demo) into a Ionic application using our [cordova demo plugin](https://github.com/imgly/pesdk-cordova-demo).

**THIS IS A DEMO**. This repository is not meant as a fully fledged Ionic plugin, but as a base for further development instead. See the [cordova demo repository](https://github.com/imgly/pesdk-cordova-demo) for more details on how to implement a full plugin for your use case.

## Example App
The included example app demonstrates how to open the PhotoEditor SDK's camera and pass any taken or selected images to the editor. When an edited image is saved, its filepath is sent back to Ionic and displayed using a JavaScript alert. An app could then display this image in Ionic or send it to a backend. To launch the example app, take a look at the *Launch Example* section below.

## Setup Process
The example app was created using the following commands: 

```
$ git init
$ ionic start PESDKDemo blank --v2
$ cd PESDKDemo
$ ionic platform add android
$ ionic platform add ios
```

This creates a new Ionic app and adds the iOS and Android platforms. You can then add our `pesdk-cordova-demo` as a submodule and add it as a plugin to the Ionic app:

```
$ git submodule add git@github.com:imgly/pesdk-cordova-demo.git
$ ionic plugin add --searchpath ../pesdk-cordova-demo cordova-plugin-pesdk
```

For iOS you need to manually set the `Always Embed Swift Standard Libraries` flag in the Xcode projects build settings. Otherwise the app will crash upon launch. Furthermore you need to add your PESDK license files as 'LICENSE_ANDROID' and 'LICENSE_IOS' for each platform and change the usage descriptions for accessing camera and library on iOS. Take a look at our [cordova demo](https://github.com/imgly/pesdk-cordova-demo) for more details.

## Launch Example
In order to launch the example app on devices or emulators you need to run the following commands from the `PESDKDemo` directory:
```
$ ionic build ios
$ ionic build android
$ cp LICENSE_ANDROID platforms/android/assets
```

This builds the app for both platforms and copies the Android license file to the corresponding directory. Afterwards you need to add the `LICENSE_IOS` file to the Xcode project by opening [PESDKDemo.xcworkspace](/example/platforms/ios/PESDKDemo.xcworkspace) using Xcode and dragging the license file into the sidebar. Within Xcode you need to enable the `Always Embed Swift Standard Libraries` build setting for the PESDKDemo target.

Once all license copying is done and both platforms have been built, the app can be run using the following commands:
```
$ ionic emulate ios
$ ionic emulate android
```

## Additional notes

The app will run in your browser using ```ionic serve```, but will throw an error upon clicking the 'Open PhotoEditor SDK' button, as there is no browser implementation.
