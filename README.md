# generator-gulp-angular-sub 
> gulp-angular subgenerator

### Why should i use it?
For now, the great [gulp-angular](https://github.com/Swiip/generator-gulp-angular) (which follow [Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)  provided by angularJS team ) generator does not support sub tasks. So i decided to build this subgenerator that creates those tasks.

 
## Installation

First, install generator-gulp-angular-sub using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g generator-gulp-angular-sub
```

## Usage
1. Create a project using [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular)
2. jump into project directory
    ```bash
    cd myProject
    ```
3. Run subTask
    - Run `yo gulp-angular-sub:view` for creation a view 
    - Run `yo gulp-angular-sub:component` for creation a component

## Examples
1. View  
run `yo gulp-angular-sub:view` and provide requested informations.   
 For `myView` as  view name , `/myViewUrl` as view url and `/home` as path of parent view folder in `src/app/` directory , the generator will make two things:  
   - Produces three files :  
        `src/app/home/myView/home.myView.controller.js`  
        `src/app/home/myView/home.myView.controller.spec.js`  
        `src/app/home/myView/home.myView.html`
   - configures a route in `src/app/index.route.js`
2. Component  
    run `yo gulp-angular-sub:component` and provide requested informations.   
    For `myComponent` as  component name and the component is need  directive , the generator Produces  files like follow :  
    - `src/app/component/myComponent/myComponent.css`
    - `src/app/component/myComponent/myComponent.directive.js`
    - `src/app/component/myComponent/myComponent.directive.spec.js`  
    - `src/app/component/myComponent/myComponent.html`

## Supported technologies

* *Router*:  `UI Router`
* *CSS pre-processor*: `none`
* *JS preprocessor*: `none`
* *HTML preprocessor*: `none`

## License

MIT © [elouazzany](https://github.com/elouazzany)