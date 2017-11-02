import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router} from '@angular/router';

/**
 * Represents the view displayed in the second tab of the lazy loaded module.
 */
@Component({
  selector: "app-lazy",
  templateUrl: "./templates/lazyLoading/second-component.html"
})
export class SecondComponent implements OnInit, OnDestroy {

  /**
   * Constructor function.
   */
  constructor(private _router:Router){}
  
    /**
     * @override
     */
    public ngOnInit():void {
      // TODO Auto-generated method stub
    }
  
    /**
     * @override
     */
    public ngOnDestroy():void {
      // TODO Auto-generated method stub
    }
  }