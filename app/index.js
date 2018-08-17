'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }
  start() {
    this.prompt([
    {
      type    : 'input',
      name    : 'name',
      message : 'Enter a name for the new project: '
    }
  ]).then( (answers) => {
    // create destination folder
    this.destinationRoot(answers.name);
    this.fs.copyTpl(
              this.templatePath('_package.json'),
              this.destinationPath('package.json'), {
                  name: answers.name
              }
    );
    this.fs.copyTpl(
              this.templatePath('_package-lock.json'),
              this.destinationPath('package-lock.json'), {
                  name: answers.name
              }
    );
    this.fs.copyTpl(
              this.templatePath('_client/_package.json'),
              this.destinationPath('client/package.json'), {
                  name: answers.name
              }
    );
    this.fs.copyTpl(
              this.templatePath('_client/_package-lock.json'),
              this.destinationPath('client/package-lock.json'), {
                  name: answers.name
              }
    );
    this.fs.copyTpl(
              this.templatePath('_client/.gitignore'),
              this.destinationPath('client/.gitignore')
    );
this.fs.copyTpl(
              this.templatePath('.gitignore'),
              this.destinationPath('.gitignore')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_public/favicon.ico'),
              this.destinationPath('client/public/favicon.ico')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_public/index.html'),
              this.destinationPath('client/public/index.html')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_public/manifest.json'),
              this.destinationPath('client/public/manifest.json')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_public/css/table.css'),
              this.destinationPath('client/public/css/table.css')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_public/css/blueprint.css'),
              this.destinationPath('client/public/css/blueprint.css')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_public/css/blueprint-icons.css'),
              this.destinationPath('client/public/css/blueprint-icons.css')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_public/css/normalize.css'),
              this.destinationPath('client/public/css/normalize.css')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_src/App.css'),
              this.destinationPath('client/src/App.css')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_src/App.js'),
              this.destinationPath('client/src/App.js')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_src/App.test.js'),
              this.destinationPath('client/src/App.test.js')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_src/history.js'),
              this.destinationPath('client/src/history.js')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_src/index.css'),
              this.destinationPath('client/src/index.css')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_src/index.js'),
              this.destinationPath('client/src/index.js')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_src/logo.svg'),
              this.destinationPath('client/src/logo.svg')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_src/registerServiceWorker.js'),
              this.destinationPath('client/src/registerServiceWorker.js')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_src/components/AppToast.js'),
              this.destinationPath('client/src/components/AppToast.js')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_src/components/Header.js'),
              this.destinationPath('client/src/components/Header.js')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_src/components/Login.js'),
              this.destinationPath('client/src/components/Login.js')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_src/components/Main.js'),
              this.destinationPath('client/src/components/Main.js')
    );
    this.fs.copyTpl(
              this.templatePath('_client/_src/components/Register.js'),
              this.destinationPath('client/src/components/Register.js')
    );
    this.fs.copyTpl(
              this.templatePath('_bin/_www'),
              this.destinationPath('bin/www')
    );
    this.fs.copyTpl(
              this.templatePath('LICENSE'),
              this.destinationPath('LICENSE')
    );
    this.fs.copyTpl(
              this.templatePath('README.md'),
              this.destinationPath('README.md')
    );
    this.fs.copyTpl(
      this.templatePath('_app.js'),
      this.destinationPath('app.js'),
      /* this.destinationPath('/views/index.ejs'), {
        name: this.props.name
      } */
    );
    this.fs.copy(
      this.templatePath('_routes/_api.js'),
      this.destinationPath('routes/api.js'));

    // Model
    this.fs.copy(
      this.templatePath('_models/_user.js'),
      this.destinationPath('models/user.js'));

    // Model
    this.fs.copy(
      this.templatePath('_controllers/_userController.js'),
      this.destinationPath('controllers/userController.js'));
    this.fs.copy(
      this.templatePath('_public/_stylesheets/_style.css'),
      this.destinationPath('public/stylesheets/style.css')
    );

  });
  }
};