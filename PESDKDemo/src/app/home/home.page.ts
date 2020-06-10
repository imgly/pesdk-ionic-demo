import { Component } from '@angular/core';
import { SerializationExportType } from 'platforms/ios/platform_www/plugins/cordova-plugin-pesdk/www/configuration';

declare var PESDK;
declare var PESDK_DEFAULT_CONFIGURATION;

let serialization = null;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  // private serialization = null;

  pesdk_success(result) {
    // console.log('pesdk_success: ' + JSON.stringify(result))
    if (result.serialization != null) {
      serialization = result.serialization;
    }
    alert('PESDK result: ' + result.image);
  };

  pesdk_failure(error) {
    alert('pesdk_failure: ' + JSON.stringify(error));
    console.log('pesdk_failure: ' + JSON.stringify(error))
  };

  onButtonClick(event) {

    /* The license should have an extension like this:
          for iOS: "xxx.ios", example: pesdk_license.ios
          for Android: "xxx.android", example: pesdk_license.android
          then pass just the name without the extension to the
       `unlockWithLicense` function */
    PESDK.unlockWithLicense('www/assets/pesdk_license');

    var defaultConfig = PESDK_DEFAULT_CONFIGURATION; // get the default configuration
    
    var config = {
      // Configure sticker tool
      sticker: {
        // Enable personal stickers
        personalStickers: true,
        // Configure stickers
        categories: [
          // Create sticker category with stickers
          {
            identifier: 'example_sticker_category_logos',
            name: 'Logos',
            thumbnailURI:
                'https://cdn1.iconfinder.com/data/icons/hawcons/32/700175-icon-1-cloud-512.png',
            items: [
              {
                identifier: 'example_sticker_logos_cordova',
                name: 'Cordova',
                stickerURI: PESDK.loadResource('www/assets/cordova.png'),
              },
              {
                identifier: 'example_sticker_logos_imgly',
                name: 'img.ly',
                stickerURI: PESDK.loadResource('www/assets/imgly-Logo.png'),
              },
              {
                identifier: 'example_sticker_logos_js',
                name: 'JS',
                stickerURI: PESDK.loadResource('www/assets/javascript.png'),
              },
            ]
          },
          // Use existing sticker category
          {identifier: 'imgly_sticker_category_emoticons'},
          // Modify existing sticker category
          {
            identifier: 'imgly_sticker_category_shapes',
            items: [
              {identifier: 'imgly_sticker_shapes_badge_01'},
              {identifier: 'imgly_sticker_shapes_arrow_02'},
              {identifier: 'imgly_sticker_shapes_spray_03'},
            ]
          },
        ]
      }
    };



    PESDK.openEditor(
        this.pesdk_success,
        this.pesdk_failure,
        PESDK.loadResource('www/assets/LA.jpg'),
        config
    );
  }

  onButtonClickSerialization(event) {
    var config = {
      export: {
        serialization: {
          enabled: true,
          exportType: SerializationExportType.OBJECT,
        }
      }
    };
    PESDK.openEditor(
      this.pesdk_success,
      this.pesdk_failure,
      PESDK.loadResource('www/assets/LA.jpg'),
      config,
      serialization);
  }
}
