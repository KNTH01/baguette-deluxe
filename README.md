# Vue Training

Welcome to Z1 Vue Training. In this excercise, you will learn:

- How to create a Vue Component with class decorators
- How to use props, filters, methods, and computed properties
- How to use Vue Router
- How to use Vuex
- How to create a component with V-model


## The exercise

Hello rookie. Welcome to your first day working at CNI.

Your first task is building your own admin panel for the missions you will be asigned. As some of the missions are top secret,
you have been ordered to assign a codename in less than 24 hours (trust me, you don't want to know what will happen if you
don't change the name). Some of them already have a codename, so you won't be able to edit them. 

The CNI Backend Developers have provided you an API with the following endpoints. These endpoints are FREAKING SLOW, so avoid calling them more than once:

- localhost:3000/profile -> Retrieve agent name and ID
- localhost:3000/missions -> Retrieve missions
- localhost:3000/missions/:id -> Retrieve/Update mission with id = :id

Good Luck, agent Dander Perro.

## Screens

The app may consist in three screen.

All of them will have a common layout, where the navbar is shown. In the navbar, we only show the initial of the first name and the last name. So, Dander Perro would be D. Perro.

The navbar must be a component. The background of the navbar is located at src/assets/bg.png  The logo, at public/assets

```
+------------------------------------+
| logo    Main   Settings  D. Perro  |
+------------------------------------+
|                                    |
|                                    |
|           Main Content             |
|                                    |
|                                    |
+------------------------------------+
```
Key Features:
- Get name from Store.
- Filters: D. Perro must be built using a filter.
- Router-view



### Screen 1: Main
Route: '/':
This is the main view. Here you will be able to see the missions you have assigned. They loved
the layout of the list elements, that's why the want that each list element must be a *reusable*
component. The mission list must be a component only for the missions application and should not include
the missions count. 

```
  +----------------------------------------------------------+
  |   LogoIMG                    Main   Settings  D. Perro   |
  +----------------------------------------------------------+
  |                                              3 missions  |
  |   +--------------------------------------------------+   |
  |   | Inform everyone Xiaomi offers               Edit |   |
  |   | best quality and price                           |   |
  |   +--------------------------------------------------+   |
  |                                                          |
  |   +--------------------------------------------------+   |
  |   | Austrian Potatoes                                |   |
  |   |                                                  |   |
  |   +--------------------------------------------------+   |
  |                                                          |
  |   +--------------------------------------------------+   |
  |   | Discover why 42 is the answer               Edit |   |
  |   | to life                                          |   |
  |   +--------------------------------------------------+   |
  |                                                          |
  +----------------------------------------------------------+
```

Key Features:
- API Call from store (Await/Async)
- Getter from store
- V-for
- Route changes
- Computed properties: The missions counter must be a computed property of the length.
- V-if (When loading, we won't show anything except the loading text)


Route 2: '/detail/:id/':
In this view you will be able to change the name of a task. After you click on save, the name must be change and you should be redirected to the main view again.
Please note, if you try to edit a non-editable mission, you should be redirected to the main view too. Again, CNI want the form to be reusable, so the functionality
must live out of the form component. The button must be disabled until the new name has at least a length of 8. They want the input to be a custom component.
```
+----------------------------------------------------------+
|                                                          |
| LogoIMG                      Main   Settings  D. Perro   |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|                                                          |
|   +--------------------------------------------------+   |
|   | Inform everyone Xiaomi offers                    |   |
|   | best quality and price                           |   |
|   +--------------------------------------------------+   |
|   |                                                  |   |
|   | New name                                         |   |
|   | +---------------------+             +----------+ |   |
|   | |                     |             |   SAVE   | |   |
|   | +---------------------+             +----------+ |   |
|   +--------------------------------------------------+   |
|                                                          |
|                                                          |
+----------------------------------------------------------+
```
Key Features:
- Make an update call to an endpoint and update store with the result.
- Methods.
- Emit / receive events.
- Before router enter.
- V-model for the input

Route 3: '/settings/':
In this view, you just need to show your id and name. Sometimes the CNI missions will make you forgot who you are. 
You can include a picture of something you like if it helps to make you remember your identity
```
+----------------------------------------------------------+
|                                                          |
| LogoIMG                      Main   Settings  D. Perro   |
|                                                          |
+----------------------------------------------------------+
|   ID: 1                                                  |
|   Name: Dander Perro                                     |
|                                                          | 
|                       ()()                               |
|                       (^.^)                              |
|                       (()())                             |
|                                                          |
+----------------------------------------------------------+
```
## Desired component folder structure
- src/components -> components that can be used at any view: PG: Input, button...
- src/views -> views not related with the missions.

- src/apps/missions/components -> components only for the missions list. This components can include some store logic
- src/apps/missions/views -> views related with the missions


 ## Final suggestion
Vue was created for the sake of simplicity. A complex code not always mean that is more efficient. Simple code can 
work really well, and always think in the future developer that will need to work on this. The future developer shouldn't
expend more than 1 hour for understanding the whole structure and work methodology of a project. (In this project, it should
expend 5 minutes). And remember, simple != dirty

Please, keep this in mind. 

 ## Running the project
 ```
 npm install
 ````

```
npm run serve
```