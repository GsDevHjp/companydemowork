import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user_form!: FormGroup;
  actionBtn = "Add"
  update_data:any
  constructor(
    private fb :FormBuilder,
    private _service:CrudService,
    private matdialog:DialogRef<FormsModule>, 
    private router:Router   
  ){
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
    this._service.SharingData.subscribe((rss=>{
      this.update_data = rss
    }))
    this.user_form = this.fb.group({
      id:[''],
      name:['',Validators.required],
      mobile:[''],
      email:[''],
      password:[''],
      
    })
    if(this.update_data){
      console.log(this.update_data)
      this.actionBtn='Update'
     
      this.user_form.controls['id'].setValue(this.update_data.id)
      this.user_form.controls['name'].setValue(this.update_data.name)
      this.user_form.controls['mobile'].setValue(this.update_data.mobile)
      this.user_form.controls['email'].setValue(this.update_data.email)
      this.user_form.controls['password'].setValue(this.update_data.email)
     
    }
  }
  onsubmit(){
    const data =  new FormData()
    data.append('name',this.user_form.get('name')?.value)
    data.append('mobile',this.user_form.get('mobile')?.value)
    data.append('email',this.user_form.get('email')?.value)
    data.append('password',this.user_form.get('password')?.value)
    console.log(this.user_form.value)
    if(!this.update_data){
    this._service.user_insert(data).subscribe(
      (res:any)=>{
        console.log(res)
        this.matdialog.close()
        this.router.navigate(['/crud'])
        alert("User Add Sucessfully")
      },
    
    )
    }
    else{
      this.update_user()
    }
  }
  update_user(){
    this._service.user_update(this.user_form.value).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
  }
  }
  

