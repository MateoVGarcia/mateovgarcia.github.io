import { Component} from '@angular/core';
import { inject } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

copyToClipboard="Copy to Clipboard"

constructor(private clipboard:Clipboard){}

copyMail(){
  this.clipboard.copy('mateovgarcia2003@gmail.com')
  this.copyToClipboard="Copied!"
  setTimeout(() => {
    this.copyToClipboard = "Copy to Clipboard"; 
  }, 1000);
}

}
