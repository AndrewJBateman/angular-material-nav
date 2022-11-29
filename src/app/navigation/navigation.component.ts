import { IUnsplashResponse } from './../models/unsplash';
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { MatSidenav } from "@angular/material/sidenav";
import { delay } from "rxjs/operators";
import { ImageService } from "../services/image.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  imageData$: Observable<IUnsplashResponse> = new Observable();

  constructor(private observer: BreakpointObserver, private imageService: ImageService) {}

  ngOnInit(): void {
    this.getPhoto('random/200x200/?female,face');
  }
  // breakpoint observer checks if width is over 700px.
  // If so use 'over' mode and close side nav
  // If less than 700px use 'side' mode & open side nav
  ngAfterViewInit() {
    this.observer
      .observe(["(max-width: 700px)"])
      .pipe(delay(1)) // delay 1mS
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = "over";
          this.sidenav.close();
        } else {
          this.sidenav.mode = "side";
          this.sidenav.open();
        }
      });
  }

  getPhoto(subject: string): void {
    this.imageData$ = this.imageService.photoQuery(subject);
  }
}
