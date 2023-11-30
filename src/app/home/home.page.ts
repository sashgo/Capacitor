import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage{
  token:string|null = "";
  
  constructor(    
    private route: ActivatedRoute,
    ) { 
      this.route.queryParams.subscribe(params => {
        this.token = params['code'];
    });
    }
}


