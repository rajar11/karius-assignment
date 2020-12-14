import {CollectionViewer, DataSource} from "@angular/cdk/collections"
import {Observable, BehaviorSubject, of} from "rxjs";
import {Pathogen} from "../model/pathogen";
import {PathogenService} from "../service/pathogen.service";
import {catchError, finalize} from "rxjs/operators";

export class PathogenDataSource implements DataSource<Pathogen> {
   private pathogensSubject = new BehaviorSubject<Pathogen[]>([]);
   private loadingSubject = new BehaviorSubject<boolean>(false);

   constructor(private pathogenService: PathogenService) {
   }

   // Load the pathogens using the pathogen service
   loadPathogens(pathogenName:string,
                 pathogenSequence:string,
                 sortDirection:string,
                 pageIndex:number, pageSize:number) {
         this.loadingSubject.next(true);
         this.pathogenService.getPathogens(pathogenName, pathogenSequence,
                                           sortDirection,
                                           pageIndex,
                                           pageSize);
                                           /*
                                           .pipe(
                                               catchError(()=>of([])),
                                               finalize(()=>this.loadingSubject.next(false))
                                            )

                                           .subscribe(pathogens =>this.pathogensSubject.next(pathogens));
                                           */
   }

   connect(collectionViewer : CollectionViewer) : Observable<Pathogen[]> {
       return this.pathogensSubject.asObservable();
   }

   disconnect(collectionViewer: CollectionViewer): void {
       this.pathogensSubject.complete();
       this.loadingSubject.complete();
   }
}
