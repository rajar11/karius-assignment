import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { PathogenService } from './workspace/service/pathogen.service';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';
import {HttpClientModule} from "@angular/common/http";
import { MatDialogModule } from '@angular/material/dialog';

import { PathogenViewModifyDialogComponent } from './workspace/pathogenoperation/pathogenviewmodify.dialog/pathogenviewmodify.dialog.component';
import { PathogenNewComponent } from './workspace/pathogenoperation/pathogennew/pathogennew.component';

@NgModule({
  declarations: [
    AppComponent,
    PathogenViewModifyDialogComponent,
    PathogenNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ PathogenService ],
  bootstrap: [AppComponent],
  entryComponents : [PathogenViewModifyDialogComponent, PathogenNewComponent]
})
export class AppModule { }
