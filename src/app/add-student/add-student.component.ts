import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  isLinear=true;
  personalFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  constructor(private frmb: FormBuilder,
              public apiSerive: ApiService,
              public router: Router
        ) {
        this.personalFormGroup=frmb.group({
          firstname:['',Validators.required],
          lastname:['',Validators.required],
          gender:['',Validators.required]
        });
        this.contactFormGroup=frmb.group({
          mobile:['',Validators.required],
          email:['',Validators.required]
        });
        this.addressFormGroup=frmb.group({
          address:['',Validators.required],
          city:['',Validators.required],
          state:['',Validators.required],
        });
  }

  ngOnInit(): void {
  }

  submit(){ 
    let formdata={
      ...this.personalFormGroup.value,
      ...this.contactFormGroup.value,
      ...this.addressFormGroup.value
    }; 
    console.log(formdata);
    this.apiSerive.addStudent(formdata).subscribe(res=>{
      alert('Student Added !!');
      this.router.navigateByUrl('/');
    });
    
  }


}
