# Middleware in Express.js

Middleware functions in Express.js are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. These functions can perform various tasks, modify the request and response objects, end the request-response cycle, and call the next middleware function in the stack.

## Basic Usage

In Express, middleware is added to the application using the `app.use()` method. Middleware can be used globally for all routes or applied to specific routes.

### Global Middleware

```javascript
const express = require('express');
const app = express();

// Global middleware
app.use((req, res, next) => {
  console.log('This middleware runs for every request.');
  next(); // Call the next middleware in the stack
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

### Route-specific Middleware

```javascript
const express = require('express');
const app = express();

// Middleware function
const logRequest = (req, res, next) => {
  console.log(`Request received at ${new Date()}`);
  next(); // Call the next middleware in the stack
};

// Apply middleware to a specific route
app.get('/', logRequest, (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

## Built-in Middleware

Express comes with several built-in middleware functions that can be easily integrated into your application. Some common examples include:

- `express.json()`: Parses incoming requests with JSON payloads.
- `express.urlencoded()`: Parses incoming requests with URL-encoded payloads.
- `express.static()`: Serves static files (CSS, images, etc.) from a directory.

```javascript
const express = require('express');
const app = express();

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

## Writing Custom Middleware

We can also create our own custom middleware functions to perform specific tasks. These functions take three parameters: `req`, `res`, and `next`.

```javascript
const express = require('express');
const app = express();

// Custom middleware
const customMiddleware = (req, res, next) => {
  console.log('This is a custom middleware.');
  next();
};

app.use(customMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```