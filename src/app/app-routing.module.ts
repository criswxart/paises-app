import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { ContactPageComponent } from "./shared/pages/contact-page/contact-page.component";
import { AboutPageComponent } from "./shared/pages/about-page/about-page.component";

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'contact',
        component: ContactPageComponent,
    },
    {
        path: 'about',
        component: AboutPageComponent,
    },
    {
        path: 'paises',
        loadChildren: () => import('./pais/pais.module').then( m => m.PaisModule)
    },
    {
        path:'**',
        redirectTo: ''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRountingModule {}