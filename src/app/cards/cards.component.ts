import { Component, OnInit } from '@angular/core';
import { Track } from '../modals/Track';
import { SearchService } from '../search.service';
import { ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public tracks:Track[];
  public track: Track;
  constructor(private trackService:SearchService, private route:ActivatedRoute) { }
    ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) =>
      {
        let searchString = params.get('searchString');
        this.trackService.getTracks(searchString).subscribe((data) => {
           this.tracks = data.results.trackmatches.track;
          console.log("result is ",this.tracks);
      });
      })
    }
    saveTrack(track : Track)
  {

      console.log("track data is ",track);
      let num=Math.floor(Math.random() * (999999 - 100000)) + 100000;
      console.log("random number is ",num);
      track.id=num;
      console.log("updated track is ",track);
      this.trackService.saveTrack(track).subscribe((data) => {
      this.track = data;
      console.log("result is ", this.track);
  
      // this.trackService.saveTrack(track).subscribe((data) => {
      // this.track = data;
      
      // console.log("result is ",this.track);
    });
  }
}