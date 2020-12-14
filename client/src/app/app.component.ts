import { Component, OnInit, AfterViewInit , ViewChild} from '@angular/core';
import {PathogenDataSource} from './workspace/datasource/pathogendatasource';
import {PathogenService} from './workspace/service/pathogen.service';
import {Pathogen} from './workspace/model/pathogen';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { PathogenViewModifyDialogComponent } from './workspace/pathogenoperation/pathogenviewmodify.dialog/pathogenviewmodify.dialog.component';
import { PathogenNewComponent } from './workspace/pathogenoperation/pathogennew/pathogennew.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'pathmgmt';
  tableColumns : string[] = ['pathogenCommonName', 'pathogenScientificName', 'pathogenFamily'];
  pathogenDataSource : MatTableDataSource<Pathogen>;
  pathogenRows: Pathogen[];
  viewAndUpdateDialogRef;
  public pageSize=5;
  public currentPage=0;
  public totalPages=0;
  public pathogenNameFilter:string='';
  public pathogenSequenceFilter:string='';



  @ViewChild('pathogenTable') pathogenTable: MatTable<Pathogen>;
  @ViewChild('pathogenPaginator') pathogenPaginator: MatPaginator;

  showPathogenDetails(row) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = row;

        console.log('Row clicked: ', row);

        this.viewAndUpdateDialogRef = this.dialog.open(PathogenViewModifyDialogComponent,dialogConfig);
        this.viewAndUpdateDialogRef.afterClosed().subscribe(() => { this.loadPathogenRows(); } );
  }

  createNewPathogen() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.viewAndUpdateDialogRef = this.dialog.open(PathogenNewComponent,dialogConfig);
        this.viewAndUpdateDialogRef.afterClosed().subscribe(() => { this.loadPathogenRows(); } );
  }

  constructor(private pathogenService:PathogenService, private dialog:MatDialog) {
  }

  ngOnInit() {
    this.loadPathogenRows();
  }

  openPathogenViewUpdateDialog(pathogenRow) {
  }

  ngAfterViewInit() {
  }

  filterRows() {
    this.currentPage=0;
    this.pageSize=5;

    this.loadPathogenRows();
  }

  handlePaging(event) {
      this.currentPage = event.pageIndex;
      this.loadPathogenRows();
  }

  loadPathogenRows() {
      this.pathogenRows = this.pathogenService.getPathogens(this.pathogenNameFilter,this.pathogenSequenceFilter,'asc',this.currentPage,this.pageSize);
      this.pathogenDataSource = new MatTableDataSource(this.pathogenRows);
      setTimeout(() => this.pathogenDataSource.paginator = this.pathogenPaginator);
      this.pathogenTable.renderRows();
  }
}
