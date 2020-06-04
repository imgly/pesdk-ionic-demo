import { Component } from '@angular/core';

declare var PESDK;
declare var PESDK_DEFAULT_CONFIGURATION;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  // let serialization = null;

  pesdk_success(result) {
    // console.log('pesdk_success: ' + JSON.stringify(result))
    // if (result.serialization != null) {
    //   serialization = result.serialization;
    // }
    alert('PESDK result: ' + result.image);
  };

  pesdk_failure(error) {
    console.log('pesdk_failure: ' + JSON.stringify(error))
  };

  onButtonClick(event) {
    console.log('Opening PESDK...');

    // var defaultConfig = PESDK_DEFAULT_CONFIGURATION; // get the default configuration
    PESDK.openEditor(
        this.pesdk_success,
        this.pesdk_failure,
        PESDK.loadResource('www/assets/LA.jpg')
        // defaultConfig
      );
  }
}
