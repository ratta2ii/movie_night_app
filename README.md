# **Movie Night App**
#### By Trevor Mackin   

##### GH_PAGES: https://ratta2ii.github.io/movie_night_app/



## IMPORTANT NOTES:

The application is also incomplete in that there are a few styling updates as well as some linting errors in the console that I need to run through and fix really quick. Some of the other things are as follows...
1. The footer, wishlist, as well as some other minor things have yet to be styled fully. I will be addressing color at some point as well.
2. The site currently uses lots of mock data. I have created it in a way that the owner can upload their files within a specific structure, and it will populate the application. So for now this is just placeholder text, so fear not if it looks like I duplicated anything. :-)
3. Don't forget to get on your phone and check out the mobile version. This site was styled for 5 different viewport sizes.


## **Component Tree Planning Phase (Updates coming)**

![ Screenshot of Project ](src/Assets/Images/projectStructure.png)


## **Description**

_This is a client-side application built in React. This project focuses on building a website for an outdoor movie theatre rental company._

_The business has a small number of products that a user can choose from by clicking on an item. Once the user chooses a product, a single page will be populated with all the corresponding data from that particular product. From here, a user will be able to add this product to a wish list, view the entirety of their wishlist at this point, move on to the checkout page, or return back to the list of products._

_When a user has decided that they have saved all relevant products in the wish list, a user will then head to checkout where they will see their wish list and be asked to fill out a form. The form will include personal information, the day and time of the event, and any other information they wish to add at this time. This information will then be used to populate an email response to the business owner, and then be sent along with the customers wish list._ 

_The reason for the unorthodox checkout, and the reason for a wish list instead of a cart, is due to the nature of the company. It is my understanding that the company prefers to first speak with customers due to the many factors that go into planning an event. This site will eventually function as the main page for an event team, and they have requested that the site follow this model._ 


##  **Setup/Installation Instructions**

1. Github Project Address: https://github.com/ratta2ii/movie_night_app
2. $ git clone https://github.com/ratta2ii/movie_night_app.git (Clone repository)
3. $ cd movie_night_app (Navigate to the project directory) 
4. $ npm install
5. $ npm run start



## **Features**

* Once a user has filled out the reservation form, their wishlist will be added to email and sent to the company owner.
* Stateful components using Redux
* CRUD functionality surrounding a users wishlist
* Fully responsive on all viewport sizes, including mobile
* Collapsible navbar (sidebar) for smaller screens
* Sidebar active when a user clicks the hamburger icon


## **Technologies Used**

* React
* JavaScript
* Redux
* HTML
* CSS
* Material UI
* Form Spree (Email Services)
* Webpack
* npx-create-react-app


## **License**

MIT License
Copyright (c) 2020 **MIT** (Trevor Mackin)

