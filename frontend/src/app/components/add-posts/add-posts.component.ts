import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";


@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  public post = {
    title: '',
    image: '',
    text: '',
  };

  public title?: string;
  public description?: string;
  public url?: string;

  constructor(public dataService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addPost() {
    return this.dataService.addPost(this.post).subscribe((result) => {
      if(!result){

      }else{
        this.post = {
          title: '',
          image: '',
          text: '',
        };
        this.router.navigate(['/']);
      }

    });
  }

}
