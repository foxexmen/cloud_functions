import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-mostrar',
  templateUrl: 'mostrar.page.html',
  styleUrls: ['mostrar.page.scss'],
})

export class MostrarPage {

  firebaseReply: string = "You'll see Firebase function response here";

  constructor(private http: HttpClient ) { }


  
  callCloudFunction() {
    this.http
      .get(
        'https://us-central1-appgames-976b6.cloudfunctions.net/getVideojuegos')
      .subscribe((data: any) => {
        console.log(data);
        this.firebaseReply = data.text;
      });
    }
}