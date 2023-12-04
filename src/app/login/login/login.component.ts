import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(    
    private readonly router: Router,
    ) { }

  ngOnInit() {}

  async loginAction(){
    alert("platform");


    //Get platform
    const info = await Device.getInfo();
    var platform = info.platform;

    if (platform == "android"){
        //Mobile Android
        window.open("https://staging-identity.3shape.com/connect/authorize?client_id=Communicate.App.Android.Staging&redirect_uri=https://mobileapps.3shape.com/android/communicate/auth&response_type=code&scope=api%20openid%20offline_access%20communicate.connections.read_only%20data.companies.read_only%20data.users.read_only","_self")
    }
    else if (platform == "ios"){
        //Mobile iOS
        window.open("https://staging-identity.3shape.com/connect/authorize?client_id=Communicate.App.iOS.Staging&redirect_uri=https://mobileapps.3shape.com/ios/communicate/auth&response_type=code&scope=api%20openid%20offline_access%20communicate.connections.read_only%20data.companies.read_only%20data.users.read_only","_self")    
    }
    else{
      alert(platform);
    }
   }
}
