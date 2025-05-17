import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-name';
  tableData:any;
  constructor (
    private httPClient : HttpClient
  ){

  }

  ngOnInit(){
    this.getTableDetails();
  }

  getTableDetails(){
    this.httPClient.get<any[]>('https://zil-test.s3.us-east-1.amazonaws.com/json-data.json').subscribe(response =>{
      console.log(response);
      this.tableData = response;
    },
  )
  }
}
