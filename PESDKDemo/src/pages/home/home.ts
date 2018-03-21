import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var PESDK;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  onButtonClick (event) {
    console.log("Opening PESDK...");
    PESDK.present(
      function(result){
        alert('PESDK result: ' + JSON.stringify(result));
      },
      function(error){
        alert('PESDK error: ' + error);
      },
      {sourceType: 1}
  );
  }
}
