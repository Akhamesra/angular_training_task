import { Component } from '@angular/core';
import { ApiConnectionService } from './api-connection.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angtask';
  data:any={};
  constructor(private server: ApiConnectionService){

  }
  ngOnInit(){
    // this.data = this.server.getUsers()
    console.log(this.data)
    this.server.getUsers().subscribe(res=>{
      this.data = res;
    })
  }
  
}
