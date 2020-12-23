import {Routes} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {SelectFormComponent} from './components/select-form/select-form.component';

export const appRoutes: Routes = [{
  path: '',
  children: [
    {path: '', component: WelcomeComponent},
    {path: 'selectForm', component: SelectFormComponent}
  ]
}];
