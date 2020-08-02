import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FeedService } from '../service/feeds.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;

  users: any;
  getFeeds: any;
  feedId;
  feeds = {
    title: '',
    author: '',
    description: '',
  };
  submitted = false;
  constructor(private http: HttpClient, private feedService: FeedService) { }

  ngOnInit(): void {
    let resp = this.http.get('http://localhost:5000/users');
    resp.subscribe((data) => this.users = data);
    let getFeeds = this.http.get('http://localhost:5000/feeds');
    getFeeds.subscribe((data) => this.getFeeds = data);
  }
  createFeeds() {
    const data = {
      title: this.feeds.title,
      author: this.feeds.author,
      description: this.feeds.description
    };

    this.feedService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newFeeds() {
    this.submitted = false;
    this.feeds = {
      title: '',
      author: '',
      description: '',
    };
  }

}
