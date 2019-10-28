import { Component, OnInit } from '@angular/core';
import { ListserviceService } from '../listservice.service';

@Component({
  selector: 'app-list-of-subjects',
  templateUrl: './list-of-subjects.page.html',
  styleUrls: ['./list-of-subjects.page.scss'],
})
export class ListOfSubjectsPage implements OnInit {

  constructor(private list:ListserviceService ) { }
  subjects = [];
  ngOnInit() {
    this.subjects=this.list.getallsubjects();
  }

}
