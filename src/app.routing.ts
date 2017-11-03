import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from "./app/add.component";
import { ViewComponent } from "./app/view/view.component";
import { NotFoundComponent } from "./app/not-found/not-found.component";

const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'add', component: AddComponent },
    { path: 'view', component: ViewComponent },
    { path: '**', component: NotFoundComponent }
];

export const CONST_ROUTING = RouterModule.forRoot(
	MAINMENU_ROUTES,
	{ 
		enableTracing: true 
	}//debugging purposes only
);