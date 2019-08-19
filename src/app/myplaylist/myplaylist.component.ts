import { Component, OnInit, Inject } from '@angular/core';
import { Track } from '../modals/Track';
import { SearchService } from '../search.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-myplaylist',
  templateUrl: './myplaylist.component.html',
  styleUrls: ['./myplaylist.component.scss']
})
export class MyplaylistComponent implements OnInit {

  constructor(private searchService : SearchService,  private dialog: MatDialog) { }
  public tracks : Track[];
  public deletedTrack : Track;
  public updatedComment: string;
  public updateTrack: Track;

  ngOnInit() {
    this.tracks = this.searchService.trackList;
    console.log(this.tracks);
  }
  removeTrack(track : Track)
  {
    this.searchService.removeTrack(track).subscribe(
      (data) => {this.deletedTrack = data;
      console.log(this.deletedTrack);
      alert("Playlist removed");
      })
  }

  openDialog(track: Track) {
    this.updateTrack = track;
    const dialogRef = this.dialog.open(Dialogbox,
      {
        width: '250px',
        data: {}
      });

    dialogRef.afterClosed().subscribe(result => {
      this.updatedComment = result;
      console.log(`Dialog result: ${result}`);
      // console.log(`updated comment:`, this.updatedComment);
      this.editTack();
    });
  }

  editTack() {
    this.updateTrack.name = this.updatedComment;
    this.searchService.editTrack(this.updateTrack.id, this.updateTrack).subscribe(
      data => {
        console.log("updated Track ", data);
        this.searchService.getPlayList().subscribe(
          data => { this.tracks = data }
        )
      }
    );
  }
}

@Component({
  selector: 'dialogbox',
  templateUrl: 'dialogbox.html',
})

export class Dialogbox {

  constructor(

    public dialogRef: MatDialogRef<Dialogbox>,
    @Inject(MAT_DIALOG_DATA) public data: Track) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
