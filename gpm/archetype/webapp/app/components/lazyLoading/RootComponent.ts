import {Component, OnInit, OnDestroy} from"@angular/core";
import {Router} from "@angular/router";

/**
 * A lazy loaded component.
 */
@Component({
  selector:"app-lazy",
  templateUrl:"./templates/lazyLoading/root-component.html"
})
export class RootComponent implements OnInit, OnDestroy {

  /**
   * Constructor function.
   */
  constructor(private _router:Router){}

  /**
   * The list used to create tab items in the view.
   */
  private tabLinks:any[] = null

  /**
   * @override
   */
  public ngOnInit():void {
    this.tabLinks = [
      { label: "First Component", link: "first-component" },
      { label: "Second Component", link: "second-component" }
    ];
  }

  /**
   * @override
   */
  public ngOnDestroy():void {
    // TODO Auto-generated method stub
  }
}