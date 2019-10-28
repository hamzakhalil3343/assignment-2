import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ListserviceService } from '../listservice.service';

@Component({
  selector: 'app-newsubject',
  templateUrl: './newsubject.page.html',
  styleUrls: ['./newsubject.page.scss'],
})
export class NewsubjectPage implements OnInit {
  formcon:FormGroup;
  constructor(public formbuilder:FormBuilder,private list:ListserviceService) { 
   this.formcon=this.formbuilder.group({name:['',Validators.required],id:['',Validators.required]});
  }
  subject=[];
  ngOnInit() {
    this.subject=this.list.getallsubjects();
  }
 
  async addsubject()
  {
   this.subject.push(this.formcon.get('id').value,this.formcon.get('name').value);
   console.log(this.subject);
  }

}
