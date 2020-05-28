import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public menuCtrl : MenuController
  ) {}  

  /**
   * Executes on page initialisation
   */
  ngOnInit() {
    this.menuCtrl.enable(true); //used to close the menu
  }

}
