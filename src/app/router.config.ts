import { AboutusComponent } from './aboutus/aboutus.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'aboutus',
        component: AboutusComponent
    },
    {
        path: 'diseases',
        component: DiseasesComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];