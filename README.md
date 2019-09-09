# Dead project, Don't use it !!!

## Pre
1. this project is still on working , its functionalities are not finally completed.
2. it now just support number captcha and has many limitations.
## Installation
1. install [`Graphics Magick`](http://www.graphicsmagick.org/index.html) and make sure it can work on your computer.
2. npm i node-gm-captcha

## Usage
```
let Captcha = require('node-gm-captcha');
Captcha.genPic({type:'num',filename:'./uniqueid.jpg'},(err,data)=>{
    if(err) throw err;
    console.log(data);
})
```
As the example above , you will get an image named 'uniqueid.jpg' under your project folder.
And the `data` will include some data you need , such as the number , filepath , with these , you can do your business logic.

## Doc
### genPic(param:object , callback:fn):void
1. param

    | key | type | required | desc |
    | --- | --- | --- | --- |
    | type |  string | yes | it now only can set to 'num' |
    | filename| string | yes |where to store the pic , it should be relative path |
    | fontSize | number | no | the font size |
    | w |number | no | the width of the picture |
    | h | number | no | the height of the picture |
2. callback: `function(err , data:metaData){ }`

## Todo
- [ ] make the pic more complex from recognizing
- [ ] support char type capthcha
- [ ] support mix type(char and number) captcha
- [ ] add delete method so you can easily delete the pic
- [ ] expose more customized params and method
