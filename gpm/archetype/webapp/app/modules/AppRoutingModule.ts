import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// Components imports:
import {WelcomeComponent} from "../components/WelcomeComponent";
import {ProjectStructureComponent} from "../components/ProjectStructureComponent";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", redirectTo: "welcome", pathMatch: 'full' },
      { path: "welcome", component: WelcomeComponent },
      { path: "project-structure", component: ProjectStructureComponent },
      // Lazy loading implementation:
      { path: "lazy-loading", loadChildren: "modules/lazyLoading/LazyLoadingModule#LazyLoadingModule" }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}