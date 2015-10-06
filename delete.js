var email = '@EMAIL@';
var guest = false;var deleteUser = require('./node_modules/resume-cli/lib/settings/delete-user');
deleteUser({email: email,password: 'moon1341'}, function (err, res) {
    if(err)
        throw err;
    if(res)
        console.log(res.body);
});


