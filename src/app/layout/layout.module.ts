import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavsidebarComponent } from './navsidebar/navsidebar.component';
import { ControlsidebarComponent } from './controlsidebar/controlsidebar.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavsidebarComponent, ControlsidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, NavsidebarComponent, ControlsidebarComponent],

})
export class LayoutModule { }
