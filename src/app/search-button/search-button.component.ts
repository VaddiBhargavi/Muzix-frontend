import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from 'src/app/search.service';
import { Track } from '../modals/Track';
// import {ITrack} from '../Track';
import {Result} from '../modals/Result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent implements OnInit {

  public results: Result;
  name:string="";
  response: any;

  constructor(private searchservice: SearchService, private router : Router) { }

  search(searchString : string)
  {
  this.searchservice.getTracks(searchString).subscribe((data)=>
    {this.results=data;
     console.log(this.results);
    //  alert("added to playlist");
     this.router.navigate(["/track",searchString]);
    });
  }
  ngOnInit() {
  }

}
