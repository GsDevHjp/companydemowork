import { Component, DoCheck, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { MatTableDataSource } from '@angular/material/table';
import { Dialog } from '@angular/cdk/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit, DoCheck {
  displayedColumns: string[] = ['id', 'name', 'mobile', 'email', 'password', 'action'];
  dataSource: any

  constructor(
    private _servies: CrudService,
    private dialog:Dialog
  ) {

  }
  ngDoCheck() {
    this._servies.get_data().subscribe(result => {
      this.dataSource = new MatTableDataSource(result.data);
    })
  }
  
  ngOnInit() {
    this._servies.get_data().subscribe(result => {
      console.log(result)
      this.dataSource = new MatTableDataSource(result.data);
    })
  }

  OpenForm(){
    this._servies.SharingData.next("")
    this.dialog.open(FormComponent)
    
  }
  edit(data: any) {
    console.log(data)
    this._servies.SharingData.next(data)
    this.dialog.open(FormComponent,{
      
    })

  }
  onDelete(data: any) {
    const deldata = new FormData()
    deldata.append('id',data.id)
    this._servies.user_delete(deldata).subscribe(
      (res=>{
        console.log(res)
        alert("Delete Sucessfully")
        this._servies.get_data().subscribe(result => {
          console.log(result)
          this.dataSource = new MatTableDataSource(result.data);
        })
    
      })
    )
  }
}
