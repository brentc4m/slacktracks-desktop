import "core-js"
import "zone.js"
import "reflect-metadata"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AppModule } from "./app.module"

document.addEventListener("DOMContentLoaded",
  () => platformBrowserDynamic().bootstrapModule(AppModule))
