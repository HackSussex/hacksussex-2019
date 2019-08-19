![Logo](./src/images/logo-gradient.png)

> HackSussex 2019 Website

## Developing
Clone the repo and install all requireed npm packages:
```
yarn install
```
(Use ``yarn`` if you can, rather than `npm`)

Then use the `develop` script from the `package.json` (also check the rest
of the scripts for any additional functionality)
```
yarn run develop
```
The dev server runs on port `8000` locally, and all changes made to any files
in the `src` directory are automatically rendered.

## Building
To build for production use:
```
yarn build
```
This is done automatically by Netlify when any changes are pushed to the repo

## Sections Completed

### Urgent
- [x] Home Page / Front Page

- [ ] About 
  - [x] Design
  - [X] Content

- [ ] Sponsors

- [x] FAQ
  - [ ] Design
  - [ ] Content
  
- [ ] Contact


### Non-Urgent / Day-of-Hackathon
- [ ] Challenge Section

## General TODO
- [ ] Reorder component heirarchy, separating panels from layout
- [ ] Decouple content from code, with markdown
