import {Component, OnInit} from '@angular/core';

/**
 * The main view of your the Angular App.
 */
@Component({
  selector: 'app-welcome',
  templateUrl: "./templates/welcome.html"
})
export class WelcomeComponent implements OnInit {

  /**
   * Constructor function.
   */
  constructor() {}

  /**
   * The message to be displayed in the application when the user clicks the
   * first card button.
   */
  public message:string = null;

  /**
   * @override
   */
  public ngOnInit():void {
    // TODO Auto-generated method stub
  }
  
  /**
   * Displays a message in the application when the user clicks the
   * first card button.
   */
  public showMessage():void {
    this.message = "GlassCat is alive!";
  }
}