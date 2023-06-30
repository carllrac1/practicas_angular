import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CinepolisComponent } from "./practicas/cinepolis/cinepolis.component";
import { ResistenciasComponent } from "./practicas/resistencias/resistencias.component";
import { DistanciasComponent } from "./practicas/tarea/distancias/distancias.component";

const routes:Routes = [

    {
        path: 'cinepolis', component: CinepolisComponent 
    },
    {
        path: 'resistencias', component: ResistenciasComponent
    },
    {
        path: 'distancias', component: DistanciasComponent
    }

    // {
    //     path: '', redirectTo: '/home', pathMatch:'full'
    // },
    // {
    //     path: 'AltaAlumn', component: AlumnoReactiveComponent
    // },
    // {
    //     path: 'IRIC', component: IricComponent
    // }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{
    
}