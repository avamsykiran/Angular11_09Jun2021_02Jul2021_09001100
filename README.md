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

            path parameters are represent as path/:paramName

            ActivatedRoute  is a service used to read various details about
                            the current route:
                                query params,
                                path params,
                                current url,
                                ...etc

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

        Inter Component Communication
        ------------------------------------------

            Individual Components
                only using a common service object.
                
            Parent - Child Component
                component attributes @Input
                expose events @Output

        RxJS
        --------------------------------------------
            Reactive JavaScript

            and is used to achive reactive programming in javascript.

            RxJS        Observable

                Observable                      Promise
                ---------------------------------------------------------------------
                RxJs                            in-built in JS (ES6)

                subcribed by                    can be subscribed by only one client
                any number of
                clients            

                raises three                    raises only two
                events                          events
                    next
                    complete                    resolve
                    error                       reject

                can emit more                   can emit only one value 
                than one data item              only after completion of the job
                asynchronously
                while doing the job.

                unsubscribe any time.           no support for unsubscription


                --------------------------------------------------------------

                let job = observer => {         let job = (resolve,reject) => {
                    
                    //to emit a val
                    observer.next(val);
                    //to signal completion          //to send val and signal completion
                    observer.complete();            resolve(val);
                    //to signal error               //to signalk error 
                    observer.error(err);            reject(err);

                }                               }

                let o = new Observable(job);    let p = new Promise(job);

                o.subscribe(                    p.then(
                    (val)=> {//on next()},          (val) => {//on resolve()},
                    (err)=> {//on error()},         (err) => {//on reject()}
                    ()=>{//on complete()}       );
                );

            Observable Operators
            --------------------------------------------
                an operator is a function
                that can generate a new observable from
                an existing observable.

                map             accepts a transformer function
                                executes this transformer function on each ele of older Observable
                                and returns anew observable that emits the resultant eles
                                of the transformer function.

                filter          accepts a predicate funciton
                                it returns a new observable that emeits only
                                thos eles of the older observable that satisfy the predicte.
                
                catch           is used to handle errors on a chain of observables,

                merge           is used to merge the resultants of two observable into
                                a new observable.
                
                ...etc

                'pipe()' is a fucntion on Observable
                using which the operators can be applied on an 
                observable

        REST API and json-server
        -----------------------------------------------------------------

            a rest api is a collection of middleware functions that
            can be executed by sending an http request.

            Each middleare function in a Rest api is called a http req handler.
            Each of that has a url and is called the rest end-point.

            For a givne rest end point

                        GET     retrive
                        PUT     update
                        POST    insert
                        delete  delete

            json-server     is a javascript tool that generates fake rest api on a given
                            json file.

                            npm --save install json-server

                            json-server --port 9999 --watch datafile.json

        
        Using HttpClient to consume a REST api
        ------------------------------------------------------------------

        1. store all your rest end points in the environment.ts file
        2. Use HttpClient to communicate with those end points

            HttpClientModule
                HttpClient          it is a in-built service
                    get(url) : Observable
                    post(url,reqBody) : Observable
                    put(url,reqBody) : Observable
                    delete(url) : Observable

        Http Interceptors
        --------------------------------------------------------------------

         an interceptor means somthing that play in between 
         a communication.

         AngApp (client)    <-----[Interceptor]--------> RestApi (BackEndApp)

         an interceptor can execute a cxommon job 
            1. before each request leaves the ang-app
            2. or after each response enters the ang-app.

        ng g interceptor InterceptorName

        Angular LifeCycle & Hooks
       ----------------------------------------------------------------------------------

        constructor
        ngOnChanges                      when the data-bound property variations happen (form control gets renewed )
        ngOnInit                         When Angular has completed the creation and introduction of components
        ngDoCheck                        whenever there is a vitality to review the input property of a component or directive
                ngAfterContentInit      when every content of the components gets introduced and checked for the first time
                ngAfterContentChecked   
                ngAfterViewInit
                ngAfterViewChecked
        ngOnDestroy

        Modularization
        --------------------------------------------------------------------------------
        Domain: A domain NgModule is organized around a feature, business domain, or user experience.
        Routed: The top component of the NgModule acts as the destination of a router navigation route.
        Routing: A routing NgModule provides the routing configuration for another NgModule.
        Service: A service NgModule provides utility services such as data access and messaging.
        Widget: A widget NgModule makes a component, directive, or pipe available to other NgModules.
        Shared: A shared NgModule makes a set of components, directives, and pipes available to other NgModules.

                NgModule	Declarations	Providers	    Exports	        Imported by
                ------------------------------------------------------------------------------
                Domain	        Yes	        Rare	        Top component	Another domain, AppModule
                Routed	        Yes	        Rare	        No	            None
                Routing	        No	        Yes (Guards)	RouterModule	Another domain (for routing)
                Service	        No	        Yes	            No	            AppModule
                Widget	        Yes	        Rare	        Yes	            Another domain
                Shared	        Yes	        No	            Yes	            Another domain


        ng g module Shared
        ng g module Widgets
        ng g module Services --module app.module


        lazy loading a domain module
        -------------------------------------------------------------
        ng g module EntityDoamin --route entity --module app.module

       Router Guards
       ----------------------------------------------------------------------------------

        is used to protect a route from being accessed
        only when it is allowed to access.

        Angular provides four types of RouterGuards (interfaces)

            CanActivate            control if a route can be entered or not
            CanDeactivate          control if a route can be left or not
            CanLoad                controls if a lazy loaded route should be laoded or not
            CanChildActivate       control if child-routes can be entered or not
        
        Angular Testing
        ---------------------------------------------------------------------------------

            jasmine     is an independent javascript testing library.


                        describe    -------------> writes test suits (are a collection of test cases)
                        beforeEach  -------------> that executes a common task before executing each test case
                        afterEach   -------------> that executes a common task after  executing each test case
                        it          -------------> which indicate one test case.

                        expect      -------------> creates an assertiopn object which
                                                    reports test being passed or failed.

                                                    the assertion object has matcher functions

                                                    toBe(object)
                                                    toBeSame(Object)
                                                    toBeTrue()
                                                    toBeFalse()
                                                    toBeTruthy()
                                                    toBeFalsy()
                                                    toBeNull()
                                                    toBeNotNull()
                                                    toBeUndefined()
                                                    toBeGreaterThan(value) ......etc

                        describe("test suit description",()=>{

                            beforeEach(()=>{
                                //write a job that has to execute commonly
                                //before executing each test case
                            })

                            afterEach(()=>{
                                //write a job that has to execute commonly
                                //after executing each test case
                            })

                            it("test case descriotion",()=>{
                                //the actual test case.....
                            })
                        });



            karma       is a testing framework/platform for angular, developed by the
                        same tema that developed angular.

                        npm test    ----------->  ng test -------> trigger karma and then
                                                                karma executes the .spec.ts files 
                                                                contianing jasmine test cases 
                                                                and then karma reports the test results
                                                                on the browser (chrome).