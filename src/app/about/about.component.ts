import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild("userlogin") SendForm: NgForm;
  @ViewChild('myinput') myinputC:ElementRef;

  userlogin: any;
  constructor() { }
inclstring="<b>teeeest</b>";
  ngOnInit() {
 
  }

  ngAfterViewChecked() { 
    if(this.SendForm.controls['emailid']){
      this.SendForm.controls['emailid'].setValue('jignesh');  
      debugger
      this.myinputC.nativeElement.value = 'fdsfdfdfdsfds';
    }    
  }


  onClickSubmit(userlogin) {
    alert("Entered Email id : " + userlogin.emailid);
  }
}
