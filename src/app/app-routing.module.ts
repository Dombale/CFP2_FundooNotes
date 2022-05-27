import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveNoteComponent } from './component/archive-note/archive-note.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { DashComponent } from './component/dash/dash.component';
import { DisplayNoteComponent } from './component/display-note/display-note.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { TakeNoteComponent } from './component/take-note/take-note.component';
import { TrashNoteComponent } from './component/trash-note/trash-note.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {path:'reset-password',component:ResetPasswordComponent},
  {
    path: 'home', component: DashBoardComponent,canActivate:[AuthenticationGuard],
    children: [

      { path: '', redirectTo: "/home/notes", pathMatch: 'full' },
      { path: 'notes', component: GetAllNotesComponent },
      { path:'trash-note', component:TrashNoteComponent},
      { path: 'archive-note', component:ArchiveNoteComponent},
      // { path: 'display-note', component:DisplayNoteComponent }
      { path:'reminder', component:ReminderComponent}

    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
