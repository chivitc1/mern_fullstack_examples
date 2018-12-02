# Skeleton for backend
## Specs

- Sign up: Users can register by creating a new account using an email address
- User list: Any visitor can see the list of all registered users
- Authentication: Registered users can sign in and sign out
- Protected user profile: Only registered users can view individual user details after signing in
- Authorized user edit and delete: Only a registered and authenticated user can edit or remove their own user account details

## Install dev modules
- Install Babel modules as devDependencies

npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-stage-2

npm install babel-loader@7

- Install Webpack bundle as devDependencies

npm install --save-dev webpack webpack-cli webpack-node-externals

- Install nodemon as devDependencies

 npm install --save-dev nodemon

- Install express

 npm install express

- Install body-parser

Body parsing middleware to handle the complexities of parsing streamable request objects, so we can simplify browser-server communication by exchanging JSON in the request body

npm install body-parser

- Install cookie-parser

Cookie parsing middleware to parse and set cookies in request objects

npm install cookie-parser

- Install compression

Compression middleware that will attempt to compress response bodies for all requests that traverse through the middleware
 
npm install compression


- Install helmet

A collection of middleware functions to help secure Express apps by setting various HTTP headers

npm install helmet

- Install CORS

Middleware to enable CORS (Cross-origin resource sharing)

npm install cors

- Install mongoose

npm install mongoose

