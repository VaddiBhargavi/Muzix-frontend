import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatCardModule
} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { MyplaylistComponent } from './myplaylist/myplaylist.component';
import { CardsComponent } from './cards/cards.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Dialogbox } from './myplaylist/myplaylist.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SearchButtonComponent,
    MyplaylistComponent,
    CardsComponent,
    Dialogbox,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatIconModule,
     MatButtonModule,
      MatSidenavModule,
      MatToolbarModule,
      MatInputModule,
      MatCardModule,
      MatDialogModule

  ],
  entryComponents: [MyplaylistComponent, Dialogbox],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
