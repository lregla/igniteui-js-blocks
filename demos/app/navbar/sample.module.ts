import { NgModule } from "@angular/core";

import { IgxIconModule, IgxNavbarModule } from "../../lib/main";
import { PageHeaderModule } from "../pageHeading/pageHeading.module";
import { NavbarSampleComponent } from "./sample.component";

@NgModule({
    declarations: [
        NavbarSampleComponent
    ],
    imports: [
        IgxNavbarModule,
        IgxIconModule,
        PageHeaderModule
    ]
})
export class NavbarSampleModule { }
