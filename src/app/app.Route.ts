import { Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {CsitComponent} from "./csit/csit.component";
import {BcaComponent} from "./bca/bca.component";
import {Plus2Component} from "./plus2/plus2.component";
import {CproComponent} from "./cpro/cpro.component";
import {FITComponent } from "./fit/fit.component";
import { ContactComponent } from "./contact/contact.component";
export const appRoute:Routes= [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"csit",
        component:CsitComponent
    },
    {
        path:"bca",
        component:BcaComponent
    },
    {
        path:"plus2",
        component:Plus2Component
    },
    {
        path:"cpro",
        component:CproComponent

    },
    {
        path:"fit",
        component:FITComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"",
        redirectTo: "home",
        pathMatch: "full"
    }
]