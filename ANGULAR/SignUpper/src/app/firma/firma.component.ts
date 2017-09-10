import { Component, Input, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.css']
})
export class FirmaComponent implements OnInit {
  @Input('firma') firma;
  public showCopied = false;
  public document:Document;
  constructor(@Inject(DOCUMENT) private dom: Document) {
    this.document = dom;

   }

  ngOnInit() {}

  copyToClipboard(containerid) {
    containerid="toCopy";
    // if (this.document.selection) { 
        // var range = this.document.body.createTextRange();
        // range.moveToElementText(this.document.getElementById(containerid));
        // range.select().createTextRange();
        // this.document.execCommand("Copy"); 

    // } else if (window.getSelection) {
        var range = this.document.createRange();
        range.selectNode(this.document.getElementById(containerid));
        window.getSelection().addRange(range);
        this.document.execCommand("Copy");

    // }
    this.showCopied = true;
}

}
