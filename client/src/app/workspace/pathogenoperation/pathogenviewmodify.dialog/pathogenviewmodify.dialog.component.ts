import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pathogen } from '../../model/pathogen';
import { PathogenService } from '../../service/pathogen.service';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pathogenviewmodify.dialog',
  templateUrl: './pathogenviewmodify.dialog.component.html',
  styleUrls: ['./pathogenviewmodify.dialog.component.css']
})

export class PathogenViewModifyDialogComponent  implements OnInit {

  form: FormGroup;
  editMode: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private pathogenService: PathogenService,
              private dialogRef: MatDialogRef<PathogenViewModifyDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public pathogen:Pathogen)
  {

  }

  closeDialog() {
     this.dialogRef.close();
  }

  save() {
     if(!this.editMode) {
        this.editMode=true;
     } else{

        if(this.pathogen.pathogenCommonName.length == 0 ||
                  this.pathogen.pathogenScientificName.length == 0 ||
                  this.pathogen.pathogenFamily.length == 0 ||
                  this.pathogen.pathogenViralFactor.length == 0 ||
                  this.pathogen.pathogenClinicalSymptoms.length == 0 ||
                  this.pathogen.pathogenSequence.length == 0) {
                  alert("Please specify family, viral factor and clinical symptoms.");
               } else {
                  this.pathogenService.updatePathogen(this.pathogen);
                  this.editMode=false;
                  this.closeDialog();
               }
     }

  }

  isReadOnly() {
     return !this.editMode;
  }

  ngOnInit() {

  }

}
