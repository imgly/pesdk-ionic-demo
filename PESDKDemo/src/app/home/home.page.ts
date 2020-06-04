import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  onButtonClick(event) {
    console.log('Opening PESDK...');
    // PESDK.present(
    //   function(result){
    //     alert('PESDK result: ' + JSON.stringify(result));
    //   },
    //   function(error){
    //     alert('PESDK error: ' + error);
    //   },
    //   {sourceType: 1}
    // );
  }
}
