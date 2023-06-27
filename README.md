# Notch - login shop

## Simulated fake e-commerce that emulates the flow of an online shop

The 'False Login' application is a practice tool designed to **simulate a login to an online shop**. Using a **public API**, the application displays a fictitious list of products available for viewing. Although the login uses a **fixed username and password**, it aims to provide a simulated user experience to practice authentication flow and product data manipulation. This 'False Login' application with a fictitious product list is a practical tool to **get familiar with authentication flow**, product data manipulation and **shopping cart management** in a simulated context.

[Notch - shop online](https://lidiaa3loginshop.netlify.app/)

---

## Features

- **Authentication:** The application presents a login interface where users can enter a username and password. Although the same set of credentials is always used, the **login process is simulated** to become familiar with the flow and validation of credentials.
- **Product list:** Once logged in, the application displays a **dummy list of products obtained through a public API** Product data, such as name, description and price, is generated to simulate an online shop.
- **Shopping cart management:** Users can add dummy products to the shopping cart. Although there is no real payment gateway, this functionality allows to simulate the **experience of adding and deleting products,** and to practice manipulating the cart items.
- **Navigation and user experience:** The application provides an intuitive and user-friendly **interface** for users to navigate through the product list and perform actions in the shopping cart. Although there is no actual checkout functionality, the aim is to provide a **simulated shopping experience**.

---

## Contents structure

```jsx
│   .gitignore
│   index.html
│   package-lock.json
│   package.json
│   vite.config.js
│
├───public
│       icon.svg
│       logo.svg
│       userimg.webp
│
└───src
    │   Layout.jsx
    │   main.jsx
    │
    ├───components
    │   ├───alert
    │   │       Alert.jsx
    │   │       Alert.scss
    │   │
    │   ├───button
    │   │       Button.jsx
    │   │       Button.scss
    │   │
    │   ├───card
    │   │       Card-grid.scss
    │   │       Card.jsx
    │   │       Card.scss
    │   │
    │   ├───footer
    │   │       Footer.jsx
    │   │       Footer.scss
    │   │
    │   ├───icon
    │   │       Icon.jsx
    │   │
    │   └───topbar
    │           Topbar.jsx
    │           Topbar.scss
    │
    ├───scss
    │       global.scss
    │       _forms.scss
    │       _functions.scss
    │       _links.scss
    │       _typography.scss
    │       _utilities.scss
    │       _variables.scss
    │
    └───views
        ├───cart
        │       Cart.jsx
        │       Cart.scss
        │
        ├───login
        │       Login.jsx
        │       Login.scss
        │
        ├───product
        │       Product.jsx
        │       Product.scss
        │
        ├───shop
        │       Shop.jsx
        │
        └───user
                User.jsx
                User.scss
```

---

## Getting started

In order to run this project on your machine you must have npm and node js installed.

To implement it just run the following snippped:

```jsx
npm install
```

You can then run any of the following commands to build the project or run it in local: 

 

```jsx
npm run dev             # Run the project in local
npm run build           # Build the project for server
```

---

## Built with

This project is built using react with javascript logic.

The API used to extract the list of products is documented in the following link:

[Fake Store API](https://fakestoreapi.com/)

In addition, hooks, context API and other react resources have been used.

---

## Author

The author of this project is:

[LidiaA3 - Overview](https://github.com/LidiaA3)

Thank you very much for visiting this repo and feel free to fork or make a pull request. I will be happy to approve new contributions.