import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  { path: "", component: FormComponent },
  { path: "confirmed", component: ConfirmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
