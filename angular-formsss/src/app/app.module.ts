import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormComponent } from './form/form.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { FormLoginComponent } from './form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    FormComponent,
    
    ProductAddComponent,
         ProductEditComponent,
         FormSubmitComponent,
         FormLoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
