import { NgModule } from '@angular/core';
import { UiLibComponent } from './ui-lib.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './common/material/material.module';

@NgModule({
  declarations: [UiLibComponent],
  imports: [
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    UiLibComponent,
    MaterialModule
  ]
})
export class UiLibModule { }
