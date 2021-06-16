Angular 11
----------------------------------------------------------------------------
(https://github.com/avamsykiran/Angular11_09Jun2021_02Jul2021_09001100.git)

is a javascript framework used to develop SPA / PWA applications.

    Lab Setup
    -------------
        IDE                 VS Code     https://code.visualstudio.com/download
        Dev.Platform        NodeJS      https://nodejs.org/en/

                                    node --version

        Build Tool          npm         npm --version

        Project Strucutre   AngularCLI  ng --version

                                    npm install -g @angular/cli

    
    PreRequite
    ------------------------
        HTML 5
                Basi html typography
                form elements with all form validation attributes
                WebStorage  localStorage/sessionStorage

        CSS 3
                CSS Selectors
                CSS Precedencies
                CSS Style Sheets (inline,external,embeded)
                CSS Style Properties

        Bootstrap 4
                Grid System
                Navbars
                Cards
                Jumbotrons
                Alerts
                Buttons
                Form
        
        Javascript  (ES6)
                Standard JS Objects
                    window
                    docuemnt
                    history
                    location
                Standard JS Classes
                    String
                    Math
                    Object
                    Date
                Array
                    array functions
                    array prototype functions
                Classes, Objects and Prototypes
                Function
                    function in javascript is an object.
                    closures
                    IIFE
                    arrow functions (lamdba expression)
                'this' and 'super' keyword
                ES6 modules
                Promise
                ES6 sugar syntax
                    destructred assignemtns
                    short hand object assignment
                    tempalte literals
                Spread and Rest operators

          
    Expectations
    ------------------------    
        Typescript
        NodeJS
        Angular Evolution
        Angular Archetecture
                Components
                Directives
                Pipes
                Modules
                Services
                Routing
                Gaurds
                HttpClient
                Lazy Laoding ...etc

    NodeJS
    -------------------------------

        is a javascript runtime environment.

        Node Project
        ----------------------
        md project-name
        cd project-name
                npm init -y

        To install any thrid party JS library(package)
        ---------------------------------------
        npm install --save package-name


    Angular 
    -----------------------------------------------------------------------------------------

        angularjs                   javascript          using javascript

        angular 2                   typescript          using typescript / javascript
        angular 4,5 to 11


        TypeScript
        ----------------------------------------------------------
        typescript 2      =  javascript[ES6]  + data types

        is a product of microsoft.

        .ts     transpelled into    .js     before executing.


        Web Apps
        --------------------------------------

            Static Websites

                 a folder called web containing staticly writtens .css and .html files
            
            Dynamic Web Applications


                WebServer/ApplicationServer

                    Servlets / Spring Controller +     <----REQ (url)---------------------------------      Browser
                    JSP                                -----RESP (html generated dynamically+css+js)-->
                    C# Controllers + ASPX
            
            SPA     single Page Applicatons

                WebServer/ApplicationServer

                   SPA Bundle                 <----REQ (url)---------------------------------      Browser
                   (index.html + JS + CSS)     --------SPA APP Bundle (index.html+JS+CSS)------>

                   REST api             <--------REQ(url)--------------------------------------
                                        -----------RESP (data JSON?XML)----------------------->     consuemd by JS
                                                                                                this JS will update
                                                                                                index.html dynamically
                                                                                                to present the data
                                                                                                received.


            PWA     Progressive Web Application

                an SPA can be called PWA if
                    1. it can load faster
                    2. it can work offline , even when no nwetwork available.
                    3. it must be executing in its own window and in a browser as well.
                    4. is must be launcahble like any other native app.

        Angular Archetecture
        --------------------------------------

            Modules

                    ES6 Modules   
                        is physical (each .ts or .js file is called a es6 module)
                
                
                    Angular Modules
                        is a logical unit to be managed by angular dependency injection.

                        is a class marked with @NgModule    decorator

                        and is a collection of Componnets,Pipes,Services,Directive and sub-modules

                        @NgModule({
                            declarations: [
                                list of Components,Pipes and Directives
                            ],
                            imports: [
                                list of other modules to be used in here
                            ],
                            exports: [
                                list of components,pipes or directives can are allowed to be used
                                outside this module
                            ],
                            providers: [
                                list of Services
                            ],
                            bootstrap: [
                                lit os Components that must be rendered immediatly after this module is loaded
                            ]
                        })
                        class MyModule{

                        }

                        1. a single angular project can have any number of modules.
                        2. the entire angular project must be contained inside one single module called root module
                        3. all other modules expect root module are called feature modules. 


                            app.module                          root module
                                loginComponent
                                registratioCompoennt
                                authService
                                dept.module                     feature module
                                    deptComponent
                                    addDeptComponent
                                emp.module                      feature module
                                    empComponent
                                    addEmpComponent

            Components

                    SPA  index.html is composed of smart units of code called components.

                    Each Angular Component is made up of a Controller and a Template.
                        Template MyComponent.component.html         what is to be rendered
                        Cotroller MyComponent.componnet.ts          hold the behaviour and event handling..!

                        a component enable the html extandability feature of angular,

                        Each component is used like a ne html element.

                        MyComponent.componnet.ts
                        ----------------------------------
                        @Component({
                            selector:"abced",
                            templateUrl:"MyComponent.component.html"                            
                        })
                        class MyComponent{
                            
                            n1 : number;
                            n2 : number;
                            constructor(){
                                this.n1=10;
                                this.n2=45;
                            }

                        }

                        MyComponent.component.html
                        -----------------------------------
                            <div>
                                <p>Sum {{n1+n2}}</p>
                            </div>

                        index.html
                        ------------------------------
                        <html>
                            <body>
                                <abced></abced>
                                <abced></abced>
                                <abced></abced>
                            </body>
                        </html>

            Directives
                    are classes that are marked with @Directive annotation.

                    these act as attributes on the elements defined as component and other
                    html elements.

                     @Directive({
                         selector:"attributeName"
                     })
                     class MyDirective{

                     }

            Pipes
                    are classes that are marked with @Pipe annotation.

                    Pipes are used to transform the format of an angular expression just
                    before it is rendered.

                     @Pipe({
                         selector:"pipeName"
                     })
                     class MyPipe{

                     }

            Services
                    Services are used to hold computational/comminicational/Bussiness Logic.

                    Caliculations , validations, conver object structures,
                    makeing a http call to  a rest end point........

                    @Injectable({
                        providedIn:'root'
                    })
                    class MyService{

                    }

        Angular CLI - Command Line Interface.
        --------------------------------------

            Create an angular project       ng new project-name

            npm run build       ng build    for packaging the project.
                                            later can be deployed onto a server.

                        /dist/project-name
                            vendor.js           a compressed set of
                                                all thrid party libraries
                                                includign anuglar built-in modules

                            polyfills.js        code to help
                                                    older browser to 
                                                    cope up with ES6 syntax.

                            main.js             the compile code
                                                written by the application
                                                developer.
                                                all components,pipes,service ..etc

                            runtime.js          code is to help
                                                older browsers to run ES6 features.

                            styles.css          global style sheet contaisn all
                                                css written in the app.

            npm start       ng serve        for executing the prject on the 
                                                 development server at port 4200

                            ng serve --port 7777 -o
                                                for executing the prject on the
                                                 development server at port 7777
                                                 and opens the browser automatically


                    index.html
                        |
                       html
                        |
                    ------------------
                    |               |
                    head            body
                    |                  |
                    ...                app-root     (app.component.ts + appcomponent.html)
                                          |
                                          (here goes all of our other componenets)

                
                "g stabnds for generate"
                --skipTests will avoid creating testing code files.

            ng g component componentName    --skipTests
            ng g module moduleName    --skipTests
            ng g directive directiveName    --skipTests
            ng g pipe pipeName    --skipTests
            ng g service serviceName    --skipTests
            ng g guard guardName    --skipTests
            ng g class className    --skipTests
            ng g interface interfaceName    --skipTests

        Data Binding
        --------------------------------------

            the functions and fields in the controller
            are consuemd in the template using data binding.

            1. Interpolation

                renders the output of an angular expression on the screen:

                {{angular-expression}}

                an expression any thing that is valid to be written on the right
                hand side of an assignment operator.

            2. Event Binding

                binding method (event-handlers) with any event on the tempalte:

                (anglarEventDirectives)="eventHandler()"

                    anglarEventDirectives               htmlEventAttribute
                    ---------------------------         --------------------------
                    click                               onClick
                    blur                                onBlur
                    change                              onChange
                    focus                               onFocus
                    dblClick                            onDblClick
                    ngSubmit                            onSubmit

                    ...etc
                    
            3. One-way Data Binding

                    a field of the component controller class
                    is nooked with an attribute or style attribute or
                    a class of an element in the tempalte 
                    such a way that
                            when ever the field changes
                            the respective attribute or class or style
                            also changes.

                    a. Attribute Binding

                            [attributeName]="field"

                    b. Style Binding

                            [style.cssProperty]="field"

                    c. Class Binding

                            [class]="{className:field,className:field}"
                    
            4. Two-way Data Binding

                    is about binding a field
                    with a form-element like
                    input, select, ...etc

                    ngModel directive is used to bind with a field
                    ngModel directive belongs to FormsModule

                    [(ngModal)]="field"


        Style Sheets 
        --------------------------------------

            Global Style Sheets
                    are loaded on to the browser
                    immediatly after the index.html is loaded.

                    src/styles.css

                    incldue the thrid-party style sheet
                    in the styles section of angular.json.

            Component Level Style Sheets
                    arew loaded on to the browser
                    only when the respective compoenent is rendered.

            Bootstrap Integration
                    npm --save install bootstrap@4.0

                    include node_modules/bootstrap/dist/css/bootstrap.min.css
                    in styles section of angular.json

        Structural Directives
        --------------------------------------

            are sued to control the visibility of an element.

            *ngIf="boolean-expression"

            *ngFor="let var of array"

            ngSwitch
                *ngSwitchCase

        Pipes
        --------------------------------------

             Pipes are used to transform the format of an angular expression just
             before it is rendered.

             in-built pipes
             --------------------------------
             lowercase
             uppercase

             number
             percent
             currency
             date
             
             async
             json

        Dependency Injection
        --------------------------------------
            the developer will not handle
            the creation or supply or destruction of 
            the objects, rather the underlying framework or
            library does it for us.

            Injector        in-built service

                one injector for each module,component,pipe,directive and service.

                rootInjector                 injector of root module (app.module)
                    injectorForubModule                  if ther exits a subModule
                        injectorForComponent                    if thers a component

        Services
        --------------------------------------

            holds reusable bussiness logic..

            @Injectable({
                providedIn:'root'
            })
            class MyService{

            }

            providedIn      root        only one object of the service must be created
                                        inside the rootInjector,
                                        It is the smae service object supplied to
                                        whoever requests it in the entire app.

                            any         each lazy loaded module will have
                                        a seperate object of the service
                                        in their respective injectors.

            if we want a sperate object of the service in our
            component, we will have to add the service in the 
            component decorator metadata/providers section

            @Component({
                ......,
                providers:[MyService]
            })
            class MyComponent{

            } 
            
        Angular Routing
        --------------------------------

            RouterModule
                    Routes : Route[]

                    Where each Route has
                                path            a url segment                           /emp
                                component       componentToBeDisplayed                  EmployeeDetailsComponent
                                redirect        another url segment to be redirected    
                                pathMatch       startsWith|full                         startsWith
                                ......etc

                    http://localhost:7777/emp               EmployeeDetailsComponent
                    http://localhost:7777/emps              EmployeeDetailsComponent
                    http://localhost:7777/emp/xyz           EmployeeDetailsComponent

            <router-outlet></router-outlet>

            routerLink      directive to be used along with <a></a>
            routerLinkActive take a class to be applied on the active.
            
            Router          is a service that offer two methods:
                            navigate("urlWhereTogo",{toCarryParamsOrQueryStrings})
                            navigateByUrl("urlWhereToGo")

        Typescript Interfaces
        --------------------------------------

            interfaces can have
            function without implementation and
            data members as well.

            class Custoemr{
                cid:number;
                cname:string;
            }

            let c : Custoemr = new Customer(); //possible

            interface Employee{
                empId:number;
                ename:string;
            }

            let e : Employee = new Employee(); //no, its not possible.

            let e : Employee = { empId:0,ename:''}; //possible

            class MyEmployee implements Employee{

            }

            let e : Employee = new MyEmployee(); //possible.

            interface Shape{
                sides:number[];
                angles:number[];
                area():number;
            }

           let s : Shape = {sides:[10,10],angles:[90,90,90,90],area:()=>this.sides[0]*this.sides[1]};

           class Rectangle implements Shape{
               constructor(){
                   this.sides=[0,0];
                   this.angles=[90,90,90,90];
               }

               area():number{
                   return this.sides[0]*this.sides[1];
               }
           }

           let s1: shape = new Rectangle();

      

        Angular Forms
        --------------------------------------

                Template Driven form

                        the form is constructed and controlled in the template
                        the componnet controller has almost no-access to the form.

                        this is less code and less control and difficult to test.

                        it is sutble for simpler forms
                         (like a form with one or two fiels only,like search forms/login forms)

                        FormsModule             @angular/forms
                            ngModel
                                touched
                                dirty
                                invalid
                                errors
                                valid

                            ngForm
                                invalid
                                valid

                Model Driven Forms / Reactive Forms

                        the form is constructed in template
                        but is controlled in the component controller

                        this is more code and more control and easy to test.

                        it is suitable for complex forms and nested forms
                            (like registration forms)

                        ReactiveFormsModule     @angular/forms
                            formControlName
                            fromGroup
                            FormGroup
                            FormControl

                
        







