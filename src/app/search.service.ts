import { Injectable } from '@angular/core';
// import {ITrack} from './Track';
import {Observable} from 'rxjs';
import{ HttpClient,  HttpParams, HttpHeaders } from '@angular/common/http';
import { Track } from './modals/Track';
import {Guid} from "guid-typescript";
import {Result} from './modals/Result';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class SearchService {
   constructor(private httpclient:HttpClient) { }
   public results: any;
   public trackList: Track[];
   public url = "http://localhost:8090/track";
//Receive the observable and cast it into an Track array
    // getTracks(searchString : string):Observable<Result>{
    // return this.httpclient.get<Result>("http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=d9aace66229efbd3df8f4b7e98fc88f9&format=json&track="+searchString)
    getTracks(searchString: string): Observable<Result> {
      let params = new HttpParams();
      params = params.append('track', searchString);
      var url = 'http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=d49c2ee6942b4ad28ef6334c4591f231&format=json';
      this.httpclient.get<Result>(url, { params: params }).subscribe((data) => { this.results = data });
      return this.httpclient.get<Result>(url, { params: params });
    }
    saveTrack(track: Track): Observable<Track> {
      //  track.mbid = Guid.create();
      // track.id = Guid.create().toString();
      var postUrl = "http://localhost:8090/track";
      return this.httpclient.post<Track>(postUrl, track, httpOptions);
}
getPlayList(): Observable<Track[]> {
  var getUrl = "http://localhost:8090/track";
  // this.httpclient.get<Track[]>(getUrl).subscribe((data) => {this.trackList = data});
  return this.httpclient.get<Track[]>(getUrl);
}
removeTrack(track: Track): Observable<Track> {
    console.log(track);
    return this.httpclient.delete<Track>(this.url + "/" + track.id);
  }
  editTrack(id: number, track : Track)
  {
    return this.httpclient.put<Track>(this.url + "/" + track.id, track, httpOptions);
  }
}
