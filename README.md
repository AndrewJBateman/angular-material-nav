# :zap: Angular Material Nav

* Angular app using [Angular Material](https://material.angular.io/) & [Angular Material Schematics](https://material.angular.io/guide/schematics) to create a responsive side navigation menu.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-material-nav?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-material-nav?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-material-nav?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-material-nav?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Material Nav](#zap-angular-material-nav)
  * [:page\_facing\_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal\_strength: Technologies](#signal_strength-technologies)
  * [:floppy\_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status \& To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file\_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Sidenav menu with profile image and menu options is shown on lhs when in full-screen mode (>700px - tablet size). Otherwise it is hidden and only shows when the burger menu icon is pressed
* Sidenav menu is hidden at a screen width of 700px or less using an observable to compare 700px with actual screen width - see Code Example below
* Profile image is a random female facial image that changes each time app is started or refreshed
* [AfterViewInit interface lifecycle hook](https://angular.io/api/core/AfterViewInit) used once components view is instantiated

## :camera: Screenshots

![Example screenshot](./img/nav.png)

## :signal_strength: Technologies

* [Angular v15](https://angular.io/) JS framework
* [Angular Material v15](https://material.angular.io/)
* [Material Design Screen breakpoints](https://material.io/design/layout/responsive-layout-grid.html#breakpoints) & [Angular Breakpoint state](https://material.angular.io/cdk/layout/api) used to determine when side menu appears
* [Angular Material Sidenav](https://material.angular.io/components/sidenav/overview) modes are default 'over', 'side' and 'push'. Accessibility: add role attribute
* [Angular Material Icons](https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/) list of icons, categorized but not searchable
* [Unsplash random face image](https://unsplash.com/developers) used for profile

## :floppy_disk: Setup

* Run `npm i` to install dependencies.
* Run `ng serve` for a dev server.
* Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* To deploy to Github, in angular.json file change output directory to 'docs'
* Run `ng build --prod --baseHref="https://github.com/AndrewJBateman/angular-material-nav/"` then commit to Github as usual

## :computer: Code Examples

* `navigation.component.ts` nav component showing use of observable that is set true or false and controls if sidebar menu open or closed

```typescript
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
```

## :cool: Features

* sidebar collapses to burger when screen width < 700px (small tablet). App doesn't do much else - just demonstrates @angular breakpointObserver.
* [Angular breakpoints using the Material design system explained here](https://material.angular.io/cdk/layout/overview)

## :clipboard: Status & To-Do List

* Status: Working.
* To-Do: Nothing

## :clap: Inspiration

* [Angular Material Breakpoint documentation](https://material.angular.io/cdk/layout/api)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
