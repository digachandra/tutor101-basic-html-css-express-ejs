<img src=".asset/.banner.png" width="100%" />

### Tutorial 101: Basic HTML CSS with Express JS & EJS

Hi! welcome to Tutorial 101..
in this tutorial we will learn about how to build html & css basic with ExpressJS as main engine and EJS for the template engine. So let's get started!

#### 1. Installation

As we use ExpressJS as the main engine, we need to know that we will use [NodeJS](https://nodejs.org/en/ "NodeJS") and [npm](https://www.npmjs.com/ "npm")

```
npm init
npm install -S express body-parser
npm install -S ejs express-ejs-layouts
```

**Note** if you want to use github, don't forget to add **.gitignore**

```
touch .gitignore
```

#### 2. Build skeleton

```
├── public
│   └── css
│       └── style.css
├── routes
│   └── index.js
├── views
│   ├── pages
│   │   └── home.ejs
│   ├── layout.ejs
│   ├── layout-head.ejs
│   └── layout-footer.ejs
├── .gitignore
└── index.js
```

#### 3. Init index.js

Init required modules

```
const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      ejs = require('ejs'),
      expressLayouts = require('express-ejs-layouts')
```

Setup index.js

```
var app = express()
var port = process.env.PORT || 9000

// Set template engine
app.set('view engine', 'ejs')
app.use(expressLayouts)

// Set starting routes
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require('/routes'))

// Set port
app.listen(port)
console.log(`Live on port ${port}`)
```

#### 4. Init routes (routes/index.js)

```
var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  res.render('home');
})
```

#### 5. Init views

Main layout (views/layout.ejs)

```
code
```

Main layout header (views/layout-header.ejs)

```
code
```

Main layout footer (views/layout-footer.ejs)

```
code
```

Page home (views/pages/home.ejs)

```
code
```

#### 6. Init css (public/css/style.css)

```
code
```

#### 7. Start the engine!

```
node index.js
```
