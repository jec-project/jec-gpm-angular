import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// Components imports:
import {RootComponent} from "../../components/lazyLoading/RootComponent";
import {FirstComponent} from "../../components/lazyLoading/FirstComponent";
import {SecondComponent} from "../../components/lazyLoading/SecondComponent";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "", component: RootComponent,
        children: [
          { path: "", redirectTo: "first-component", pathMatch: "full" },
          { path: "first-component", component: FirstComponent },
          { path: "second-component", component: SecondComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class LazyLoadingRoutingModule {}