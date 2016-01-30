# Net-navigator or HTTP-quest
Our app for the Kano university competition: learn what being an HTTP request is like, with Andy, your friendly wire-dwelling bot.

# Technical spec
React/React-router app with heavily nested routing and abuse of route params to animate through sequences of explanations, animations etc etc
SCSS to build the visuals

# Content

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

(2) Web application stack (what does the server do to return all that pretty data): 
- server-side scripting and MVC
- routing (regex matching)
- Database queries (models, relationships)
- data processing in controllers
- templates
- what is output from the server

(3) HTTP Verbs  
Form submissions

(1) Internet stack, HTTPS and the TCP Handshake

(4) Long polling and websockets

(4) Front-end/back-end:

- SPAs
- XML HTTP Request
