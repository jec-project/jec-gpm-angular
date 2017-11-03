import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LazyLoadingRoutingModule} from "./LazyLoadingRoutingModule";

// Material modules imports:
import {MatButtonModule, MatIconModule, MatTabsModule,
        MatCardModule} from '@angular/material';

// Services imports:
import {MessageService} from '../../services/MessageService';

// Components imports:
import {RootComponent} from "../../components/lazyLoading/RootComponent";
import {FirstComponent} from "../../components/lazyLoading/FirstComponent";
import {SecondComponent} from "../../components/lazyLoading/SecondComponent";

@NgModule({
  imports: [
    // Angular modules:
    CommonModule,
    LazyLoadingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Material modules:
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [
    MessageService
  ],
  declarations: [
    RootComponent,
    FirstComponent,
    SecondComponent
  ]
})
export class LazyLoadingModule {}