import { Component } from '@angular/core';
import { provinceservice } from './province/province.service';
import { province } from './province/province';
import { provincelist } from './province/provincelist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  provinceListing:province[];
  selectedprovince:province;

  ngOnInit(){
    this.provinceListing=this.provinceservice.getAllProvince();
    this.selectedprovince=this.provinceListing[0];
  }
  constructor(private provinceservice:provinceservice){}


}
