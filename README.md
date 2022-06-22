# Superheroes CRUD - Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## About
The purpose of this project was to learn all about CRUD functionalities in the Angular framework. On this web page you can get a list of heroes from the database (JSON), you can edit or delete them, and you can also add a new superhero using the form on the same page.

## Project overview

Here you can see the website functionalitites in action.

https://user-images.githubusercontent.com/97961954/175021070-075fc192-1cae-4828-9bb8-4c82adddccd5.mp4

Initiallly, on the page you have a button to get the heroes from the database and a form to add a new hero.

![Superheroes-CRUD-Angular-1](https://user-images.githubusercontent.com/97961954/175021119-5baa3762-caf2-46c9-9129-53841f06d83c.jpg)

When you press the button the heroes appear. Each hero has a card with a picture and details, as well as an edit and a delete button.

![Superheroes-CRUD-Angular-2](https://user-images.githubusercontent.com/97961954/175021147-c83e40d7-c013-47f3-ae02-c946a228671e.jpg)

To add a new hero all you have to do is fill the form and hit submit.

![Superheroes-CRUD-Angular-3](https://user-images.githubusercontent.com/97961954/175021502-2bf42aba-cec0-417f-8849-74d833ce06cd.jpg)

![Superheroes-CRUD-Angular-4](https://user-images.githubusercontent.com/97961954/175021512-c40e8807-8a48-4b7b-8abc-ced8f4fdd589.jpg)

After submitting the new hero, it appears in the list instantly.

![Superheroes-CRUD-Angular-5](https://user-images.githubusercontent.com/97961954/175021626-1fdaa76e-f4db-4c87-9d86-688ca1c17f2c.jpg)

If you hit the edit button on any hero, a modal pops up and you can edit any information in it.

![Superheroes-CRUD-Angular-8](https://user-images.githubusercontent.com/97961954/175021986-ef4e017d-eb29-4dc5-bf7c-89cb952ff82c.jpg)

The delete button instantly deletes a hero from the UI and the database.
The webpage is also responsive.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `npm run server` to have access to the JSON database and be able to use the website's CRUD functionalities.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
