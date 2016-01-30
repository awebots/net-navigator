# Net-navigator or HTTP-quest
Our app for the Kano university competition: learn what being an HTTP request is like, with Andy, your friendly wire-dwelling bot.

# Technical spec
React/React-router app with heavily nested routing and abuse of route params to animate through sequences of explanations, animations etc etc
SCSS to build the visuals.

npm is used for dependencies, gulp is the task runner, browserify bundles up the js for browser-side use.

# Setup

`git clone` this repository

`cd net-navigator` and then `npm install`

If you don't have a global Gulp set up: `npm install -g gulp`

`gulp serve`: To serve the app.

`gulp watch`: To watch files for changes, rerun tasks (like bundling and SCSS compilation) and serve.

You can find more tasks in `gulpfile.js`.

If you install extra dependencies make sure to `npm install` with `--save` or `--save-dev` flags so that they get committed to the `package.json`.

If you don't have npm/gulp installed, there is no way for you to serve the app as the `dest` folder is checked out at all times.

# Content Ideas

Trace the journey:
- browser requests a URL
- server does some work
- server sends something back specifying the kind of format it's in
- browser renders it

Have a link to each of those sections in more detail
- how does a browser request a URL physically (walk through DNS, routing tables, TCP/IP) (1)
- the server-side stack (What happens when a request hits a webserver) (2)
- types of requests (3)
- browser-rendering (4)
- advanced topics (5)

(1) Internet stack, HTTPS and the TCP Handshake

(2) Web application stack (what does the server do to return all that pretty data): 
- server-side scripting and MVC
- routing (regex matching)
- Database queries (models, relationships)
- data processing in controllers
- templates
- what is output from the server

(3) HTTP Verbs  
Form submissions

(4) CSS, HTML, Javascript, how each of them work

(5) Long polling and websockets

(5) Front-end/back-end:
- XMLHTTPRequest
- SPAs (JSON and history API)
