# Angular Material Nav

Angular app using [Angular Material](https://material.angular.io/) and [Angular Material Schematics](https://material.angular.io/guide/schematics) to create a responsive side navigation menu.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

Sidenav menu is hidden at a screen width of 600px or less using a break-point `isHandset$` as an observable.

Angular Material Schematics used to create the navigation component.

## Screenshots

![Example screenshot](./img/side-nav.png)

## Technologies

* [Angular CLI v7.3.9](https://github.com/angular/angular-cli)

* [Angular framework v7.2.15](https://angular.io/)

* [Angular Material v7.3.7](https://material.angular.io/)

* [Angular Material Schematics v7.3.9](https://material.angular.io/guide/schematics)

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

* `navigation.component.ts` nav component showing use of observable isHandset that is set true of false and controls if sidebar menu open or closed

```typescript
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
```

## Features

* sidebar collapses to burger when screen < 600px

## Status & To-Do List

* Status: working app that shows a sidebar.

* To-Do: experiment and add functionality

## Inspiration

* [Medium article by Ahmed Abouzied: Angular Material Responsive Navigation](https://medium.com/@ahmedaabouzied/angular-material-responsive-navigation-53b573305d3d)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
