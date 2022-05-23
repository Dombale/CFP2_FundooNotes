import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthgardserviceService } from './services/authgardservice.service';




import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { DashComponent } from './component/dash/dash.component';
import { TakeNoteComponent } from './component/take-note/take-note.component';
import { IconsComponent } from './component/icons/icons.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { DisplayNoteComponent } from './component/display-note/display-note.component';
import { UpdateNoteComponent } from './component/update-note/update-note.component';
import { TrashNoteComponent } from './component/trash-note/trash-note.component';
import { ArchiveNoteComponent } from './component/archive-note/archive-note.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { FilterPipe } from './Pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashBoardComponent,
    DashComponent,
    TakeNoteComponent,
    IconsComponent,
    GetAllNotesComponent,
    DisplayNoteComponent,
    UpdateNoteComponent,
    TrashNoteComponent,
    ArchiveNoteComponent,
    ReminderComponent,
    FilterPipe,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatCheckboxModule,
    ReactiveFormsModule, HttpClientModule, FlexLayoutModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, FormsModule,
    MatCardModule,MatDialogModule,MatMenuModule,MatTooltipModule,MatDatepickerModule,MatNativeDateModule,MatSelectModule,MatAutocompleteModule
    ,MatExpansionModule],
    
  providers: [AuthgardserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
