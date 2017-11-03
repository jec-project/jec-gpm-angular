import {Component, OnInit} from "@angular/core";

/**
 * The Angular App entry point of the EJP.
 */
@Component({
  selector: "app-main",
  templateUrl: "./templates/app-main.html"
})
export class AppComponent implements OnInit {

  /**
   * Constructor function.
   */
  constructor(){}

  /**
   * @override
   */
  public ngOnInit():void {
    // TODO Auto-generated method stub
  }
  
  /**
   * Navigates to the JEC project on GitHub.
   */
  public goToJEC():void {
    window.location.href = "https://github.com/pechemann/JEC";
  }
}