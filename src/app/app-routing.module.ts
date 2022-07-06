import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotexistsComponent } from './components/notexists/notexists.component';
import { PadangosListComponent } from './components/padangos-list/padangos-list.component';
import { PadangosNewComponent } from './components/padangos-new/padangos-new.component';
import { PadangosUpdateComponent } from './components/padangos-update/padangos-update.component';

const routes: Routes = [
  { path:"", component:PadangosListComponent},
  { path:"add", component:PadangosNewComponent},
  { path:"update/:id", component:PadangosUpdateComponent},
  { path:"**", component:NotexistsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
