var theme = 'material';
var email = 'adammoon.career@gmail.com';
var password = 'moon1341';
var _ = require('lodash');
var guest = false;
var resumePassword = false;
var session = null;
var resume = require('./node_modules/resume-cli/lib/index');
var publish = require('./node_modules/resume-cli/lib/publish/publish-resume');
var login = require('./node_modules/resume-cli/lib/login/login-request');
var fs = require("fs");
var resumeSchema = require('resume-schema')
var resumeObject = JSON.parse(fs.readFileSync('resume.json', 'utf8'));
resumeSchema.validate(resumeObject,function(report,err){
    console.log(report);
    var resumeObj = _.cloneDeep(resumeObject);
    console.log(resumeObj.basics.name);
    login({"email": email, "password": password}, function (err, res) {
        session = res.res.body.session;
        publish(resumeObj, theme, email, password, guest, resumePassword, session, function (err, res) {
            console.log(res.res.body);
        });
    });

});
