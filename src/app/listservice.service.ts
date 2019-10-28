import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListserviceService {
  subjects = [

    { id: '121', name: 'Urdu' },

    { id: '123', name: 'English' },

    { id: '124', name: 'PAk Studies' },

    { id: '125', name: 'Islamiyat' },

  ];

  constructor() { }
  get getsubjects() {

    return this.subjects;

  }



  getallsubjects() {

    return this.subjects;

  }
  deleteSubject(id) {

    this.subjects = this.subjects.filter(e => {

      return e.id !== id;

    });

  }
}
