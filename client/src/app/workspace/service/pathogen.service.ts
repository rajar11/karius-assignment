import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pathogen} from '../model/pathogen';
import {map} from 'rxjs/operators';


@Injectable()
export class PathogenService {

  private PATHOGENS: Pathogen[] = [
      {
           pathogenCommonName:'p1',
           pathogenScientificName:'ps1',
           pathogenFamily:'Bacteria',
           pathogenViralFactor:'v factor 1',
           pathogenAnnotation:'',
           pathogenClinicalSymptoms:'clinical symptoms 1',
           pathogenSequence:'AGCTGACTTACGGACT'
      },
      {
            pathogenCommonName:'p2',
            pathogenScientificName:'ps2',
            pathogenFamily:'Bacteria',
            pathogenViralFactor:'v factor 2',
            pathogenAnnotation:'',
            pathogenClinicalSymptoms:'clinical symptoms 2',
            pathogenSequence:'GACTTACGGACT'
      },
      {
            pathogenCommonName:'p3',
            pathogenScientificName:'ps3',
            pathogenFamily:'Bacteria',
            pathogenViralFactor:'v factor 3',
            pathogenAnnotation:'',
            pathogenClinicalSymptoms:'clinical symptoms 3',
            pathogenSequence:'AGCTTACGGACT'
      },
      {
             pathogenCommonName:'p4',
             pathogenScientificName:'ps4',
             pathogenFamily:'Bacteria',
             pathogenViralFactor:'v factor 4',
             pathogenAnnotation:'',
             pathogenClinicalSymptoms:'clinical symptoms 4',
             pathogenSequence:'TACGGACT'
      },
      {
            pathogenCommonName:'p5',
            pathogenScientificName:'ps5',
            pathogenFamily:'Bacteria',
            pathogenViralFactor:'v factor 5',
            pathogenAnnotation:'',
            pathogenClinicalSymptoms:'clinical symptoms 5',
            pathogenSequence:'AGCTGACT'
      },
      {
            pathogenCommonName:'p6',
            pathogenScientificName:'ps6',
            pathogenFamily:'Bacteria',
            pathogenViralFactor:'v factor 6',
            pathogenAnnotation:'',
            pathogenClinicalSymptoms:'clinical symptoms 7',
            pathogenSequence:'AGCTGACTTACG'
      },
      {
            pathogenCommonName:'p7',
            pathogenScientificName:'ps7',
            pathogenFamily:'Bacteria',
            pathogenViralFactor:'v factor 7',
            pathogenAnnotation:'',
            pathogenClinicalSymptoms:'clinical symptoms 7',
            pathogenSequence:'AGCTGACT'
      }
  ]
  constructor(private http:HttpClient) { }

  getPathogens(pathogenName:string,
               pathogenGenomicSequence:string,
               sortOrder = 'asc',
               pageNumber, pageSize) : Pathogen[] {

         let returnPathogenArray : Pathogen[] = [];

         for(let i=0; i < this.PATHOGENS.length; i++) {
              let addRow=false;
              if(pathogenName.length != 0 ||
                 pathogenGenomicSequence.length != 0) {
                    if(this.PATHOGENS[i].pathogenCommonName.startsWith(pathogenName) &&
                       this.PATHOGENS[i].pathogenSequence.startsWith(pathogenGenomicSequence)) {
                       addRow=true;
                    }
              } else {
                 addRow=true;
              }

              if(addRow) {
                 returnPathogenArray.push(this.PATHOGENS[i]);
              }
         }

         //return returnPathogenArray.slice(pageNumber*pageSize, (pageNumber + 1)*pageSize);
         return returnPathogenArray;
  }

  createNewPathogen(pathogen) {
        this.PATHOGENS.push(pathogen);
  }

  updatePathogen(pathogen) {
        for(let i=0; i < this.PATHOGENS.length; i++) {
             if(this.PATHOGENS[i].pathogenCommonName === pathogen.pathogenCommonName &&
                this.PATHOGENS[i].pathogenScientificName === pathogen.pathogenScientificName) {
                    this.PATHOGENS[i] = pathogen;
                }
        }
  }
}
