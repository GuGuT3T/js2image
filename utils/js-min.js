
var UglifyJS = require("uglify-js");
var fs = require("fs");
var Promise = require("bluebird");
module.exports = function(jsPath,callback){
    return new Promise(function(resolve,reject){
        try{
            var source = fs.readFileSync(jsPath, "utf8");
            var ast = UglifyJS.parse(source);
            ast.figure_out_scope();
            ast.compute_char_frequency();
            ast.mangle_names();
            var code = ast.print_to_string();
        }catch(e){
            console.log('js minify error:',e)
        }

        resolve(code);
    })
}