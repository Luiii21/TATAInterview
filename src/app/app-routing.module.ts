import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutLoggedComponent} from "./layouts/layout-logged/layout-logged.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'task',
    component: LayoutLoggedComponent,
    loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
