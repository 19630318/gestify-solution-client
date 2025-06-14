
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImageZoomComponent, NgxImageZoomModule } from 'ngx-image-zoom';


@NgModule({
  imports: [CommonModule, NgxImageZoomModule],
  exports: [NgxImageZoomModule, NgxImageZoomComponent]
})
export class SharedModule {}