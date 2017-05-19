# Bookstore
A bookstore app built with PostgreSQL, Express and React.

<br/>
<br/>

## Install and Run App


### Run frontend

After cloning down the app to your computer navigate to the projects root directory in your CLI and run the following commands:

```
  $ npm install
```
To run the frontend, do the following in the projects main root directory:

```
  $ webpack
  $ webpack -w
```
### Run backend

You will also need to run the backend server.
To get the backend setup correctly run the following commands once inside the backend folder:

```
  $ npm install
  $ npm run create:db
  $ npm run reset:db
```
To run the backend:

```
 $ npm start
```
See the app running on http://localhost:8080

<br/>
<br/>

## Specifications

### General

- [x] All views are rendered on the server using server side templates written with React.
- [x] Web server can be started with the command npm start.
- [ ] Test suite can be run with the command npm test.
- [ ] Test suite can be run with the command npm test.
- [x] All features are added as pull requests.
- [x] Variables, functions, files, etc. have appropriate and meaningful names.
- [x] Functions are small and serve a single purpose.
- [x] Code uses a linter and there are no linting errors.
- [ ] Code is well tested and all tests are passing.
- [x] The artifact produced is properly licensed, preferably with the MIT license.

### Stories

- [x] Books have a title, author, and genre.
- [x] Users can add books into the bookstore system via an admin page (create).
- [x] Users can see a list of books on the home page (read).
- [x] Users can edit a book’s title, author, or genre (update).
- [x] Users can delete a book from the bookstore (delete).
- [x] Users can search for books by title OR by author OR by genre (read).
- [x] Users can view book details on a book detail page (read).
- [ ] Lists of books are always paginated in groups of 10.
- [x] Book detail view is linked to and from the listing and search pages.
- [ ] Search results are presented in a new page.

### Stretch

 - [ ] App is deployed and live on the web (consider using Heroku).
 - [x] All source code is written with ES6.
 - [ ] Users have their own account and can sign up and sign in/out.
 - [ ] Users have one of three roles: admin, clerk, reader.
 - [ ] Users with role reader can only view and search for books.
 - [ ] Users with role clerk can edit books in addition to viewing/searching.
 - [ ] Users with role admin can perform all actions (create, read, update, delete) with books.
 - [x] Books have a price, cover image, publisher, and ISBN number.
