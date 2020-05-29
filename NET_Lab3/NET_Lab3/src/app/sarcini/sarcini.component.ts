import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sarcini',
  templateUrl: './sarcini.component.html',
  styleUrls: ['./sarcini.component.css']
})
export class SarciniComponent implements OnInit {

  public sarcini: Sarcina[];
  public GET_ALL_URL: string = 'https://localhost:44372/sarcini';

  constructor(private http: HttpClient) { }

  /* Get list of tasks from the server */
  getSarcini(): void {
    this.http.get<Sarcina[]>(this.GET_ALL_URL)
      .subscribe(sarcini => this.sarcini = sarcini);
  }

  ngOnInit() {
    this.getSarcini();
  }
}

  interface Sarcina {
  title: string,
  description: string,
    added: Date,
    deadline: Date,
    importance: string,
    stare: string,
    closedat: Date,
    comments: any[];
}
