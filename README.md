# Student reports generator

[Live demo](https://jeremy-doneghue.github.io/Student-Reports-Generator/)

Student reports generator is a single page web application written in Angular. It is a tool to aid teachers in writing reports for their students. It allows the teacher to create a (detailed or simple) template to generate a report based on aspects of the student’s learning. 
The system has a high level of customisability which allows the teacher to design responses for all student types and abilities. The teacher then fills in a questionnaire, based on their template, about each student and a report is generated.

## Usage

Most browsers don't like referring to other files when you're just viewing a file. This means that you're probably going to need some sort of web server to use this. I recommend node's http-server. If you have npm installed, just run `npm install --global http-server` and then run `http-server` from within the project directory. 

1. This project uses node 6.9.x to manage dev dependencies. Make sure you have this version of node installed
2. Run `npm i` to install the dev dependencies and build the css.
4. Run `npm start` to start the http server.
5. Navigate to the url shown in the console.

If you want to recompile the CSS at any point, just run `npm run build-css`.

## Development Environment
This project uses an [.editorconfig](http://editorconfig.org/) file to ensure that tabs, line endings etc are kept the same across development environments. You can find a plugin for your text editor [here](http://editorconfig.org/#download).

## Styles
This project now uses the [SCSS](http://sass-lang.com/) preprocessor to create CSS. 
The tl;dr is that you can just write normal CSS, but there are some cool features like variables and nesting
The current build system is [Gulp](http://gulpjs.com/). 
You can run `gulp` to compile the source files. 
There is also a `scss:watch` task that you can run which will compile your changes whenever a scss file is edited. 

## FAQ
*Why is the compiled CSS included in the repo?*

This project is served from the repo using Github Pages and so it needs the compiled CSS to display correctly.
