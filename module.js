//Module allows to split code into smaller files to avoid overpopulating code files.
//improves maintainability, security, and organization by usin self-contained files.
//JS used global scope and commonJS before to share code.
//NodeJS <- require() 
//each js file has a special object named module used for "exporting" code blocks.
//Example:
  //module.js
  // function add(a, b){
  //   return a + b;
  // }

  // module.exports = {
  //   add
  // }

  // app.js
  // const math = require("./module");
  // math.add()

//ES module = modern way of sharing code in js.

export default class Math{
  constructor(){
    //blabla
  }
}

export function add(a, b){
  return a + b;
}
//named export -> should use the same name when importing, enforce correct naming. Should be wrapped in {} when being export/import
//default -> optional exported default code, can be renamed
//or
// export Math { add };


