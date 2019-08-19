import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SearchService} from 'src/app/search.service';
import { Track } from '../modals/Track';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private searchService : SearchService, private router : Router) { }

  ngOnInit() {
  }

  public TrackList : Track[];

  getPlayList(){
    this.searchService.getPlayList().subscribe((data) =>{
       this.TrackList = data
       console.log(this.TrackList);
       this.searchService.trackList = data;
       this.router.navigateByUrl('/playList');
    })
  }
}
