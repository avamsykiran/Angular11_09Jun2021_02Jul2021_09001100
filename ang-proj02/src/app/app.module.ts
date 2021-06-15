import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StructuralDirectiveDemoComponent } from './structural-directive-demo/structural-directive-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { IntoWordsPipe } from './into-words.pipe';

const routes : Routes = [
  {path:'',pathMatch:'full',component:StructuralDirectiveDemoComponent},
  {path:'pd',pathMatch:'full',component:PipesDemoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StructuralDirectiveDemoComponent,
    PipesDemoComponent,
    IntoWordsPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
