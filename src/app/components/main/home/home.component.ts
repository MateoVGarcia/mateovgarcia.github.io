import { Component} from '@angular/core';
import { inject } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  clipboard = inject(Clipboard);

copyToClipboard="Copy to Clipboard"
copyToClipboardCellphone="Copy to Clipboard"

constructor(){}

copyMail(){
  this.clipboard.copy('mateovgarcia2003@gmail.com')
  this.copyToClipboard="Copied!"
  setTimeout(() => {
    this.copyToClipboard = "Copy to Clipboard"; 
  }, 1000);
}

copyCellphone(){
  this.clipboard.copy('+5492664749937')
  this.copyToClipboardCellphone="Copied!"
  setTimeout(() => {
    this.copyToClipboardCellphone = "Copy to Clipboard"; 
  }, 1000);
}

}
