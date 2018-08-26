const shell = require('shelljs');
 //shell.exec(comandToExecute, {silent:true}).stdout;
 //you need little improvisation
shell.exec('npm i')
shell.exec('npm run start')
