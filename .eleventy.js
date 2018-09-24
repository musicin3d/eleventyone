var fs = require('fs')
var path = require('path')


var filterPath = './filters/'


module.exports = function (config) {

    // Add a date formatter filter to Nunjucks
    var files = fs.readdirSync(filterPath)
    console.log(files)
    files.forEach(function(file){
        var name = path.basename(file, '.js')
        var filepath = filterPath + file
        config.addFilter(name, require(filepath));
    })

    return {
        dir: {
            input: "src/site",
            output: "dist",
            includes: "_includes"
        },
        templateFormats: ["hbs", "md"],
        htmlTemplateEngine: "hbs",
        markdownTemplateEngine: "hbs"
    };

};
