var ExcelToJSON = function() {
    try {
        this.parseExcel = function(file) {
            var reader = new FileReader();
    
            reader.onload = function(e) {
                var data = e.target.result;
                var workbook = XLSX.read(data, {
                    type: 'binary'
                });
    
                workbook.SheetNames.forEach(function(sheetName) {
                    // The object
                    var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    var object = JSON.stringify(XL_row_object);
    
    
                    var res = JSON.parse(object);
    
                    for (var key in res) {
                        if(object.hasOwnProperty(key)){
                            console.log(`${key} : Box ${res[key][Object.keys(res[key])[0]]} Whse ${res[key][Object.keys(res[key])[1]]}  Location ${res[key][Object.keys(res[key])[2]]}`)
                            generateQRCode(res[key][Object.keys(res[key])[0]], res[key][Object.keys(res[key])[1]], res[key][Object.keys(res[key])[2]]);
                        }
                    }

                
                })
            };
    
            reader.onerror = function(ex) {
                console.log(ex);
            }
    
            reader.readAsBinaryString(file);
        };
    } catch (err) {
        alert(err);
    }
};


function handleFileSelect(evt) {
    
    var files = evt.target.files; //FileList Object
    var xl2json = new ExcelToJSON();
    xl2json.parseExcel(files[0]);
}

document.getElementById('upload').addEventListener('change', handleFileSelect, false);    

window.whenloaded = function(fn) {
    if (window.onload) {
      var old = window.onload;
      window.onload = function() {
        old();
        fn();
      }
    } else {
      window.onload = fn;
    }
  }