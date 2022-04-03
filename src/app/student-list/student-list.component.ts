import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, AfterViewInit {
  students:any=[];
  
  displayedColumns: string[] = ['id','firstname', 'lastname', 'email', 'mobile','address','city','state'];
  dataSource = this.students;

  @ViewChild('studentSort') studentSort =MatSort;

  constructor(public apiService: ApiService,
              private _liveAnnouncer: LiveAnnouncer
            ) { } 

  ngOnInit(): void {
    this.getStudents();
  }
  ngAfterViewInit(){    
    this.dataSource.sort = this.studentSort;
  }
  getStudents(){
    this.apiService.studentList().subscribe(res =>{
      this.students=res;
      this.dataSource=this.students;
      console.log(res);
    });
  }

  sortChange(sortState: Sort){
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
