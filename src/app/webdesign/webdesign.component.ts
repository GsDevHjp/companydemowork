import { Component } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faEllipsisV, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-webdesign',
  templateUrl: './webdesign.component.html',
  styleUrls: ['./webdesign.component.css']
})
export class WebdesignComponent {
  faCoffee = faCoffee;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  phone = faPhone 
  msg = faEnvelope
  OnMenuTogal:boolean = false
  
  OnMenu(){
    if(this.OnMenuTogal == true){
      this.OnMenuTogal =  false
    }
    else{
      this.OnMenuTogal = true
    }
  }
}

