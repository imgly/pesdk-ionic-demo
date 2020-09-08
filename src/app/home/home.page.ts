import {Component} from '@angular/core';

// Declaring the modules for PESDK
declare var PESDK;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  pesdk_success(result) {
    if (result != null) {
      alert('PESDK result: ' + result.image);
    } else
      console.log('pesdk_success: result is null, the editor was canceled');
  };

  pesdk_failure(error) {
    console.log('pesdk_failure: ' + JSON.stringify(error))
  };

  onButtonClick(event) {
    /* The license should have an extension like this:
       for iOS: "xxx.ios", example: pesdk_license.ios
       for Android: "xxx.android", example: pesdk_license.android
       then pass just the name without the extension to the
       `unlockWithLicense` function */
    // PESDK.unlockWithLicense('www/assets/pesdk_license');

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
            thumbnailURI: PESDK.loadResource("www/assets/imgly-Logo.png"),
            items: [
              {
                identifier: 'example_sticker_logos_ionic',
                name: 'Ionic',
                stickerURI: PESDK.loadResource('www/assets/icon/favicon.png'),
              },
              {
                identifier: 'example_sticker_logos_imgly',
                name: 'img.ly',
                tintMode: "colorized",
                stickerURI: PESDK.loadResource('www/assets/imgly-Logo.png'),
              },
            ]
          },
          // Use existing sticker category
          { identifier: 'imgly_sticker_category_emoticons' },
          // Modify existing sticker category
          {
            identifier: 'imgly_sticker_category_shapes',
            items: [
              { identifier: 'imgly_sticker_shapes_badge_01' },
              { identifier: 'imgly_sticker_shapes_arrow_02' },
              { identifier: 'imgly_sticker_shapes_spray_03' },
            ]
          },
        ]
      }
    };

    PESDK.openEditor(
        this.pesdk_success, this.pesdk_failure,
        PESDK.loadResource('www/assets/LA.jpg'), config);
  }
}
