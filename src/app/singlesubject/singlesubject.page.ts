import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListserviceService } from '../listservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-singlesubject',
  templateUrl: './singlesubject.page.html',
  styleUrls: ['./singlesubject.page.scss'],
})
export class SinglesubjectPage implements OnInit {
  

  constructor(private route: ActivatedRoute,private router: Router,private alertController: AlertController,private list:ListserviceService) { }
  singleSubject;
  subjects=[];
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('id');
      console.log(val);
      this.subjects=this.list.getallsubjects();
      this.singleSubject = this.subjects.find(obj => {
        return obj.id.includes(val);
      });
    });
  }
  
  async deleteSubject() {

    console.log('deleteSubject', this.singleSubject);



    const alert = await this.alertController.create({

      header: 'Alert',

      // subHeader: 'Subtitle',

      message: `Are you sure you want to remove ${this.singleSubject.name}?`,

      // buttons: ['OK']

      buttons: [

        {

          text: 'Cancel'

        },

        {

          text: 'Okay',

          handler: () => {

            console.log('Confirm Okay');

            this.list.deleteSubject(this.singleSubject.id);

            this.router.navigateByUrl('/list-of-subjects');

          }

        }

      ]

    });



    alert.present();



   

  }



}
