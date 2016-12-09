import "core-js";
import "zone.js";
import "reflect-metadata";
import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: "my-app",
  template: `<button id="play">Play/Pause</button>`,
})
class AppComponent {

}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
class AppModule {

}

document.addEventListener("DOMContentLoaded", () => platformBrowserDynamic().bootstrapModule(AppModule))
