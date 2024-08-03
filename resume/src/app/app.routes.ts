import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';


export const routes: Routes = [
    { path:"", component: MainPageComponent,
        children:[{
            path:"projects", component: ProjectComponent
    }] },
];
