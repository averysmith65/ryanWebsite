import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import fetch from 'node-fetch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import  axios  from 'axios';
import { response } from 'express';

@Component({
  selector: 'app-fetch-api',
  templateUrl: './fetch-api.component.html',
  styleUrls: ['./fetch-api.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class FetchAPIComponent {

  //private _url: string = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cid&maxResults=3&playlistId=PLvjQ7W5Y_v68h52mUW0NErYBKt0Nn2TDl&key=AIzaSyAaKt6KoyLEs-1H1kKEFoA0NJIYxp9sjwI')";

  constructor(private http: HttpClient) {}

  // apiKey : string = "AIzaSyBMRQ-7Qlr1MKMafBTMpNO3IrnkSuneQ9c";

  // readonly root_url = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cid&maxResults=3&playlistId=PLvjQ7W5Y_v68h52mUW0NErYBKt0Nn2TDl&key=AIzaSyAaKt6KoyLEs-1H1kKEFoA0NJIYxp9sjwI';

  // readonly root_url2 = 'https://jsonplaceholder.typicode.com/todos/1'
  // readonly root_url3 = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=date&q=footballfanalystsnetwork&key=AIzaSyAaKt6KoyLEs-1H1kKEFoA0NJIYxp9sjwI'
  
  

  //posts: any;
  //arr: any[] = []
  ngOnInit() {
    //this.getVideoID
  }
  

  // getVideoID(){
    

  //   this.http.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=date&q=NFL&key=AIzaSyBMRQ-7Qlr1MKMafBTMpNO3IrnkSuneQ9c')
  //   .subscribe(posts => {
  //     console.log(posts)
  //   });

    

  //   //this.posts.forEach(element => {
  //   //console.log(element);
  //   //});

  // };
    
  

  

  

  //const response = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cid&maxResults=25&playlistId=PLvjQ7W5Y_v68h52mUW0NErYBKt0Nn2TDl&key=AIzaSyAaKt6KoyLEs-1H1kKEFoA0NJIYxp9sjwI HTTP/1.1');
  //const data = await this.response.json();

  //console.log(data);
}
