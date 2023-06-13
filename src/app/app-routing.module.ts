import { MAPCreatorComponent } from './mapcreator/mapcreator.component';
import { ImageeditorComponent } from './imageeditor/imageeditor.component';

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        component: ImageeditorComponent
    }, 
    {
        path:'MapsUI',
        component:MAPCreatorComponent
    },
    
  ];
  @NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
  })
  
  export class AppRoutingModule { }