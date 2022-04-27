import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

const components = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


export class SharedModule { }
