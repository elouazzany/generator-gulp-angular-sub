'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var path = require('path');
var angularUtils = require('./util.js')

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
  },
  _welcome: function () {
    this.log(yosay(
      chalk.red('Welcome!') + '\n' +
      chalk.yellow('You\'re using subgenerator of gulp-angular for scaffolding an application with Angular and Gulp! ')
    ));
  },
  initializing: function () {
    // welcome message.
    this._welcome();
    // angularjs app name
    this.appName = require(this.destinationRoot() + '/package.json').name;
  },

  prompting: function () {
    var done = this.async();
    var prompts = [
      {
        "name": "viewName",
        "type": "input",
        "message": "the view name",
        "default": "testView"
      },
      {
        'name': 'viewUrl',
        'type': 'input',
        'message': 'the view url',
        "default":  "testViewUrl"
      },
      {
        "name": "viewPath",
        "type": "input",
        "message": "the parent folder in which the the view folder will be created ",
        "default": "/"
      }
    ];

    this.prompt(prompts, function (props) {

      this.props = props;
      done();

    }.bind(this));
  },

  configuring: function () {
    // body...
  },

  writing: function () {
    var destinationfolder = ("src/app/" + this.props.viewPath + '/' + this.props.viewName + '/').replace(/\/+/g,'/');
    var nameSpace = this.props.viewPath.replace(/^\/+|\/+$/g,'').replace(/\/+/g,'.') + (this.props.viewPath == '/' ? '' : '.') + this.props.viewName;
    var stateName = this.props.viewName;
    var viewFolder = ("app/" + this.props.viewPath + '/' + this.props.viewName + '/').replace(/\/+/g,'/');
    var viewUrl = ('/' + this.props.viewUrl ).replace(/\/+/g,'/').replace(/\/$/g,'');
    var controllerAs = this.props.viewName;
    var data = {
        appName: this.appName,
        controlerName: _.capitalize(this.props.viewName + 'Controller'),
        viewName : this.props.viewName
      }
    this.fs.copyTpl(
      path.join(this.templatePath(),'../../app/templates/controller.js'),
      this.destinationPath(destinationfolder + nameSpace + '.controller.js'),
      data
    );
    this.fs.copyTpl(
      path.join(this.templatePath(),'../../app/templates/controller.spec.js'),
      this.destinationPath(destinationfolder + nameSpace + '.controller.spec.js'),
      data
    );
    this.fs.copyTpl(
      path.join(this.templatePath(),'../../app/templates/view.html'),
      this.destinationPath(destinationfolder + nameSpace + '.html'),
      data
    );
    angularUtils.rewriteFile({
      file: path.join('src/app/index.route.js'),
      needle: '.otherwise',
      splicable: [
        '  .state(\'' + stateName + '\', {',
        '    url: \'' + viewUrl + '\',',
        '    templateUrl: \'' + viewFolder + nameSpace  + '.html\',',
        '    controller: \'' + viewFolder + nameSpace + '.controller.js\',',
        '    controllerAs: \'' + controllerAs + '\'',
        '  })'
      ]
    });
  },

  conflicts: function () {
    // body...
  },

  install: function () {
    // body...
  },

  end: function () {
    this.log(yosay(
      chalk.red('goodbye!') + '\n' +
        chalk.yellow('thank you for using gulp-angular-sub')
      ));
  }
});
