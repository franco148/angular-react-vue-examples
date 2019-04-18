# angular-react-vue-examples
Reviewing differences (main characteristics) between Angular5 vs ReactJS vs VueJs.

  
### 1: THE LEARNING CURVE
##### INITIAL STAGE
###### Angular
- Needed to understand about Angular CLI, which add some complex because we have to understand its workflow, why we need the CLI, why we need to create a project like this that we have all the different modules, and components and different files and that. There for we need a workflow which transports typescript and which merges all the files (fats) into a basic bundle.
- Needed to have knowledge regarding to TypeScript
###### ReactJs
- It uses ES6 and JSX we will need to learn about it, and maybe it is not easy to start.
- It recommends strongly ES6 but is not absolutelly necesary. Because then everything is javascript.
- There is JSX which is an HTML like code in javascript that can be tough to understand. However it is not so difficult when we got it, but having this first point this can be difficult.
###### VueJs
- It uses ES5 (Vanilla Javascript) & "Controlling the DOM"
- It just needs a reference to its CDN for starting an initial project.
- We can use ES6 in our workflow, but nothing is wrong using ES5.
- We start simply controlling a part of the DOM and then using the VueJS syntax which is straightforward to understand at the beginning.


##### DIVING DEEPER STAGE
###### Angular
- We have to understand how components, modules and the syntax works and how all these pieces work together. This seems to have a doable step, but still it is something we have to get into. We have to understand the way angular works.
- It might not be as hard as understanding how the project works, how the angular APIs started and why we use TypeScript. But still it is not super easy.
###### ReactJs
- We still need kind of understand that everything is javascript and the first time we try to render content conditionally or we try to output a list of items, it can be tough to understand that all we use are normal javascript functions or methods like for example the map method on an array to render out elements.
- Once got it, again it is not that hard but it is something we have to understand.
###### VueJs
- We are getting a bit more advanced.
- We might start using our local workflow with webpack, so we can use ES6 and have it compile to ES5, and we might start using these the ```.vue``` files to have an easier way of writing components in the end. But again we have to understand that at first we have to understand that ```.vue``` files give us more features because they are compiled to javascript code in our workflow and not compiled in the browser as we did with the very first step.


##### BUILDING APPs STAGE
###### Angular
- We will need to understand about State Management
###### ReactJs
- We will need to understand about State Management
- It is recommended state management patterns like redux which is great but again we have to learn these.
- Again that is quite an effort to make that step. 
###### VueJs
- Component orchestration, communication & routing
- We also need to understand how components may communicate and how we build our apps with components, state management however is a bit easier.
- There is a package called  VueX which is by the creators of VueJs and which integrates nicely into it. And therefore whilst being something we have to learn is not that difficult to learn in the end.


##### DEPLOYMENT STAGE
###### Angular
- It really taking off there are tons of optimizations we can do, and we unfortunately have to do to get an application which really is small and offers the best performance.
- It is not worse from a performance perspective necessarily but getting it to perform nicely and optimizing it for production might be more difficult.
###### ReactJs
- It is easier than angular.
- Has some tools that helps to decrease the bundle size, split up our bundles and optimize the apps.
- But out of the box, these frameworks work better we can say.
###### VueJs
- It is easier than angular.
- Has some tools that helps to decrease the bundle size, split up our bundles and optimize the apps.
- But out of the box, these frameworks work better we can say.


### 2: DOWNSCALING & FULLSTACK APPLICATIONS
###### Can you just drop in a JS import and get started?
- Angular = NO (It is not really for small apps)
- VueJs = YES
- ReactJs = YES (It is possible, no workflow is absolutely needed.)

###### Is the framework suited for multi-page applications (MPAs)?
- Angular = NO (It is not suited for that. It is just way too much code way too complicated for that.)
- VueJs = YES (We can just control de DOM)
- ReactJs = NO/YES (But on the other hand it might not be super easy to get started here. We still need a workflow to setup first for working with many pages)

###### Is a more complex build workflow required/recommended (for "simple" apps)?
- Angular = YES (We need to optimize, we need configurations and bundles)
- VueJs = NO (It is not required, it might be benefitial, it might give some advantages but it is not absolutely required)
- ReactJs = YES (Kind of it is, it is possible to use it without that, but really react works best when using ES6 for which you will probably need a workflow because that it is not supported by all browsers, and you also might need to do some other things bundling things efficiently, so for that instance kind of need a workflow) 

###### Does the framework come with a lot of overhead?
- Angular = YES (we know that it can be optimized, we can stip out code that we are not using, but still the whole idea behind laying low with modules and everything is just a bit overkill for simply controlling a tiny piece in a existing application or on a page of a multi page application)
- VueJs = NO (It may also include things you do not need on that single page, but in the end it is clean and you can only bring what you need. And there is not difficult concept behind it which is overkill)
- ReactJs = NO (It is also good for data, does not a ship with a lot of overhead it is pretty lean, it is made for dead except purpose of controlling and manipulating your view, so the HTML code and therefore that is really great for that.)


### 3: UPSCALING/SPAs
###### Can you write and maintain complex/a lot of code?
Folders structure, best practices.
- Angular: YES (There are a lot of best practices for how we should name our files, how we should strucutre them. If we need a complex workflow anyways and we get the CLI which sets up a great workflow and build process for us bundling everything and this stuff also works great)
- VueJs: YES/NO (That is really tough, it is not clear best practice and if you follow the approach shown for example in the official documentation for storing your components that might get difficult to maintain in bigger apps, so you will have to come up with a different way of naming things and storing things. And that is something which can be complicated because there is not clear best practice here. So doable but it is solved in a better way in angular)
- ReactJs: YES/NO (There are some best practices which you want in the community but it is up to you to learn about these and to find the one which fits your needs. It is not given to us as it is in the angular case and that might be difficult)
###### Do you need to rely on a lot of third-party packages (e.g. for form validation)?
Do we have to rely on a lot of third party packages to add certain functionalities with which we might need, for example for validation.
- Angular: NO (The angular team itself has created a lot of packages which cover a lot of common use cases. We have the forums package which handles form validation, we got the official router package which handles routing, we got the official angular material package which give us material styling and also some pre-build components we can use, a lot of things you can use which all come from the official angular team or closely connected teams. So we can get updated in time and not one year after a new versions come out.)
- VueJs: YES/NO (That is great, and the spected packages are abviously maintained and updated in time. However if we talk about from validation for example, that is something which is not baked into the VueJs. So we have to use forward party packages which might not be finished which are only developed by one guy who just does not have enough time to keep them up to date, and that might be an issue for you depending on what your app needs to do)
- ReactJs: NO (Because React itself is a very clean package and a lot of our things for state management = redux for example or for routing react-router. These things are not official packages. We have community packages here and sometimes we even have multiple alternatives, and that makes it hard to pick the right one for newcomers)
###### Optimization capabilities
- Angular: YES/YES (It is not super easy, but there are a lot of things we can do. We really can squeeze out the last piece of performance)
- VueJs: YES/NO (We have decent optimization capabilities. Out of the box VueJs optimized some things for you so that is not necessarily a bad thing, but if you are one of the people who really liked dig into it and optimize everything manually, well you certainly got more possibilities of doing so in an AngularApp)
- ReactJs: YES/NO (We have decent optimization possibilities, we do not need to optimize somethings, we do have to optimize an angular. So that is why we have less possibilities, but on the other hand while we do not have to optimize it in the first place. But if we like to do some optimization manually we have less posibilities)
###### Ease of managing the state
In bigger apps this point is the huge problem.
- Angular: NO/YES (In the core all the packages provided by the official team we get services for managing the state and that might work out well for your app in very very big applications, the capabilities to get there might be limited though, and then you might need a package like NgRx which is kind of code developed by an official angular developer but mostly not. It is mostly a community project and there we again have the issue of does it get updated in time.)
- VueJs: YES (VueX and official package which integrates nicely into VueJs and which makes managing the state easier. So that is really great and that is something we can use and which really allows us to manage the state.)
- ReactJs: YES//NO (We do not have an official package, we have REDUX which is pretty common to use and we also have flux and that is the first thing you have to decide which approach should I use. Itegrate them is also hard the first time)

### 4: PERFORMANCE
###### Angular:
- We uses che CLI and execute ```ng build --prod --aot``` for optimizing all the project for production.
- dist folder contains all the bundled files.
- Some files are a little big, they would be smaller actually (430KB of vendor is not much small).

###### VueJs:
- Uses ```npm run build```, it optimize and minimizes everything.
- The final result is just 105KB, it contains everything even the vendor libraries (Actually i would became much more smaller).

###### ReactJs:
- Uses ```npm run build```, it optimizes evething.
- The result is one main.js, it contains everything 203KB.

###### JS Frameworks Benchmark.
Performance order:
1. Vue
2. React
3. Angular: However this is designed for very big applications, in which Vue and React may not have a good performance.


### GENERAL RESULT

| APPROACH | ANGULAR | VUE | REACT |
| :--- | :---: | :---: | :---: |
|Learning Curve| - | + | - |
|Downscaling/MPAs| - | + | +/- |
|Upscaling/SPAs| + | +/- | +/- |
|Performance| -/+ (better for bigger apps)| + | +/- |
|Dev to Production||||
|Popularity/Jobs||||























