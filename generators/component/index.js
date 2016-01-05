'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var path = require('path');

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
        "name": "componentName",
        "type": "input",
        "message": "the component name",
        "default": "testComponent"
      },
      {
        'name': 'needDirective',
        'type': 'confirm',
        'message': 'the component need a directive',
        "default":  true
      },
      {
        'name': 'needService',
        'type': 'confirm',
        'message': 'the component need a service',
        "default":  false
      },
      {
        'name': 'needFilter',
        'type': 'confirm',
        'message': 'the component need a filter',
        "default":  false
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
    var destinationfolder = ("src/app/components/"  + this.props.componentName + '/').replace(/\/+/g,'/');
    var componentName = this.props.componentName;
    var data = {
        appName: this.appName,
        controlerName: _.capitalize(this.props.viewName + 'Controller'),
        directiveName : componentName,
        templateUrl: 'app/components/' + componentName + '/' + componentName + '.html',
        directiveLink: componentName + 'Link',
        directiveController: componentName + 'Controller',
        serviceName: componentName,
        filterName: componentName
      }
    if (this.props.needDirective) {
      this.fs.copyTpl(
        this.templatePath('component.css'),
        this.destinationPath(destinationfolder + componentName + '.css'),
        data
      );
      this.fs.copyTpl(
        this.templatePath('component.directive.js'),
        this.destinationPath(destinationfolder + componentName + '.directive.js'),
        data
      );
      this.fs.copyTpl(
        this.templatePath('component.directive.spec.js'),
        this.destinationPath(destinationfolder + componentName + '.directive.spec.js'),
        data
      );
      this.fs.copyTpl(
        this.templatePath('component.html'),
        this.destinationPath(destinationfolder + componentName + '.html'),
        data
      );
    };
    if (this.props.needService) {
      this.fs.copyTpl(
        this.templatePath('component.service.js'),
        this.destinationPath(destinationfolder + componentName + '.service.js'),
        data
      );
      this.fs.copyTpl(
        this.templatePath('component.service.spec.js'),
        this.destinationPath(destinationfolder + componentName + '.service.spec.js'),
        data
      );
    };
    if (this.props.needFilter) {
      this.fs.copyTpl(
        this.templatePath('component.filter.js'),
        this.destinationPath(destinationfolder + componentName + '.filter.js'),
        data
      );
      this.fs.copyTpl(
        this.templatePath('component.filter.spec.js'),
        this.destinationPath(destinationfolder + componentName + '.filter.spec.js'),
        data
      );
    };   
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
