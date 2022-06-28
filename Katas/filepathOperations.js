// This kata requires you to write an object that receives a file path and does operations on it.

// const fm = new FileMaster('/Users/person1/Pictures/house.png');
// fm.extension(); // output: 'png'
// fm.filename(); // output: 'house'
// fm.dirpath(); // output: '/Users/person1/Pictures/'

class FileMaster {
  constructor(filepath) {
    this.filepath = filepath;
  }

  filepathToArr() {
    return this.filepath.split("/");
  }

  extension() {
    let extension = this.filepathToArr();
    return extension[extension.length - 1].split(".")[1];
  }

  filename() {
    let filename = this.filepathToArr();
    return filename[filename.length - 1].split(".")[0];
  }

  dirpath() {
    let dirpath = this.filepathToArr();
    dirpath.pop();
    return dirpath.join("/").concat("/");
  }
}
