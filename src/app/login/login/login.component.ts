import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  loginAction(){
    //window.open("home","_self");
    // window.open("https://staging-identity.3shape.com/Account/Login?returnUrl=/connect/authorize/callback?response_type=code&client_id=portal_development&state=eHBhSmMyLlNvRWNTU2xpdDNjZG1CbmUwSlRnZ2R-bVQwMmV0aENRLmFsfnRm&redirect_uri=https%3A%2F%2Fpolite-flower-0bfaa4a03.3.azurestaticapps.net%2Fauth-callback&scope=openid%20api%20data.users.manage%20data.companies.manage%20treatmentreview.orderformservice.manage%20treatmentreview.proposalfeedbackservice.manage%20treatmentreview.modelservice.manage%20communicate.connections.manage&code_challenge=p4xZwrN5zrXEEK_jTIKxaAkpd5jTWko7jbbHaaL7mvg&code_challenge_method=S256&nonce=eHBhSmMyLlNvRWNTU2xpdDNjZG1CbmUwSlRnZ2R-bVQwMmV0aENRLmFsfnRm","_self");
   
   
    // window.open("https://staging-identity.3shape.com/Account/Login?returnUrl=http://localhost:8100/login","_self");
    //window.open("https://staging-identity.3shape.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Dcode%26client_id%3Dportal_development%26state%3DdUxRfnlMVDNIZ0JWZFJiZmJ1Skd4T3RhWnVoTzdtVVdsZDNnejBxakVEMjFr%26redirect_uri%3Dhttps%253A%252F%252Fpolite-flower-0bfaa4a03.3.azurestaticapps.net%252Fauth-callback%26scope%3Dopenid%2520api%2520data.users.manage%2520data.companies.manage%2520treatmentreview.orderformservice.manage%2520treatmentreview.proposalfeedbackservice.manage%2520treatmentreview.modelservice.manage%2520communicate.connections.manage%26code_challenge%3D0nEqBTBgBaa1DdYtntCCKoYJ-NBQ-Znk3LhwXW2wVX0%26code_challenge_method%3DS256%26nonce%3DdUxRfnlMVDNIZ0JWZFJiZmJ1Skd4T3RhWnVoTzdtVVdsZDNnejBxakVEMjFr","_self");

    //this.router.navigate(['signin'])

    //Mobile
    window.open("https://staging-identity.3shape.com/connect/authorize?client_id=Communicate.App.Android.Staging&redirect_uri=https://mobileapps.3shape.com/android/communicate/auth&response_type=code&scope=api%20openid%20offline_access%20communicate.connections.read_only%20data.companies.read_only%20data.users.read_only","_self")
    
    
  }
}
