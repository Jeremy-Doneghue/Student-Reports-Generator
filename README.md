# Student reports generator

Generate mail-mergey type reports for a teacher's students using an Angular app.
This app is currently in pre alpha development and can be considered a prototype.

## Usage
1. Make sure you have the latest stable version of node.js installed
2. Run `npm i` to install the node dependencies
3. Run `npm start` to start the http server. Navigate to the URL that it provides (usually http://localhost:8080)
4. Have fun!

## Development Environment
This project uses an [.editorconfig](http://editorconfig.org/) file to ensure that tabs, line endings etc are kept the same across development environments. You can find a plugin for your text editor [here](http://editorconfig.org/#download).

### Styles
This project now uses the [SCSS](http://sass-lang.com/) preprocessor to create CSS. The current build system is [Gulp](http://gulpjs.com/). 
You can run `gulp` to compile the source files. 
There is also a `scss:watch` task that you can run which will compile your changes whenever a scss file is edited. 
