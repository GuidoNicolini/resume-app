import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path:"", component: MainPageComponent },
    { path:"experience", component: ExperienceComponent },
    { path:"education", component: EducationComponent },
    { path:"contact", component: ContactComponent },
];
