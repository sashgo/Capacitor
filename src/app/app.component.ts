import { Component, NgZone } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { App } from '@capacitor/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(private router: Router, private zone: NgZone) {
    this.initializeApp();
  }

  initializeApp() {
    App.addListener('appUrlOpen', (event) => {
        this.zone.run(() => {
            var path = event.url.split("mobileapps.3shape.com").pop();

            console.log('Slug:', path);

            if (path) {
                this.router.navigateByUrl(path);
            }
            else{
              alert(event.url);
            }
        });
    });
  }
}