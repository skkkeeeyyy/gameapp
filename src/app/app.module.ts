import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddgamesGameComponent } from './addgames-game/addgames-game.component';
import { ViewgameGameComponent } from './viewgame-game/viewgame-game.component';

@NgModule({
  declarations: [
    AppComponent,
    AddgamesGameComponent,
    ViewgameGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
