import { NgModule } from '@angular/core';
import {IonicModule}  from 'ionic-angular';
import { BackgroundImage, PreloadImage, ColorRadio, CounterInput, ShowHideInput,} from './index';
@NgModule({
  declarations: [BackgroundImage, PreloadImage, ColorRadio, CounterInput, ShowHideInput],
  imports: [IonicModule],
  exports: [BackgroundImage, PreloadImage, ColorRadio, CounterInput, ShowHideInput]
})
export class ComponentsModule { }
