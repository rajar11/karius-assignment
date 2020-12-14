import { Component, OnInit } from '@angular/core';
import { Pathogen } from '../../model/pathogen';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import { PathogenService } from '../../service/pathogen.service';


@Component({
  selector: 'app-pathogennew',
  templateUrl: './pathogennew.component.html',
  styleUrls: ['./pathogennew.component.css']
})
export class PathogenNewComponent implements OnInit {

  form: FormGroup;
  pathogen: Pathogen;
  genomeSequenceFile: any;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<PathogenNewComponent>,
              private pathogenService: PathogenService)
  {
      this.pathogen = new Pathogen('','','','','','','');
  }

  ngOnInit(): void {

  }

  // Close the dialog box
  closeDialog() {
       this.dialogRef.close();
  }

  // Save the new pathogen record
  save() {
       if(this.pathogen.pathogenCommonName.length == 0 ||
          this.pathogen.pathogenScientificName.length == 0 ||
          this.pathogen.pathogenFamily.length == 0 ||
          this.pathogen.pathogenViralFactor.length == 0 ||
          this.pathogen.pathogenClinicalSymptoms.length == 0 ||
          this.pathogen.pathogenSequence.length == 0) {
          alert("Please specify pathogen common name, scientific name, family, viral factor, clinical symptoms and genome sequence.");
       } else {
          this.pathogenService.createNewPathogen(this.pathogen);
          this.dialogRef.close();
       }
  }

  // Open the file and read the contents and store it in the model
  importGenomeSequence(event) {
      console.log(event);
      this.genomeSequenceFile = event.target.files[0];
      // Now read the contents of the file
      let fileReader = new FileReader();

      fileReader.onload = () => {
          console.log(fileReader.result);
          this.pathogen.pathogenSequence = fileReader.result.toString();
      }
      fileReader.readAsText(this.genomeSequenceFile);
  }
}
