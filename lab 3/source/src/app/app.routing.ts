import { Routes, RouterModule } from '@angular/router';

import { AuthGuard} from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { NutritionComponent } from './nutrition/nutrition.component';

const routes: Routes = [
  { path: '', component: NutritionComponent, canActivate: [AuthGuard]}, // only allow signed in users
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '' } // redirect all other traffic
];

export const AppRoutingModule = RouterModule.forRoot(routes);
