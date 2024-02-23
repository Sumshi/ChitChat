<h1>Welcome to ChitChat</h1>
<p>it is a realtime chat application where users can chat with each other. It is created using Node.js, Express, MongoDB, Socket.io, Bcrypt, Jsonwebtoken, and Cookie-parser.</p>
<h2>Packages installed</h2>
<ol>
<li>express: To initialize express server</li>
<li>socket.io: To create real time chat application</li>
<li>nodemon: To restart server automatically</li>
<li>dotenv: To use environment variables</li>
<li>bcrypt: To hash password</li>
<li>jsonwebtoken: To create token for authentication</li>
<li>mongoose: To connect to MongoDB</li>
<li>cookie-parser: To parse cookies passsed to req.body</li>
<li>jwt are used to create token for authentication</li>
<li>To generate a secure random number as your jwt secret key, use your bash and type: openssl rand -base64 32'</li>
</ol>

<h3>Backend</h3>
<p>Backend is created using Node.js and Express. MongoDB is used as database. Socket.io is used to create real time chat application. Bcrypt is used to hash password. Jsonwebtoken is used to create token for authentication. Cookie-parser is used to parse cookies.</p>
<p>We used postman api to test our backend routes.</p>
<p>Backend files and folders:</p>
<ol>
<li>routes folder: contains auth.routes.js where we define our authentication routes(signup, login and logout) to be used in server.js<br>
 messages.routes.js where we define our message routes (api/messages/send/id)to be used in server.js<br>
user.routes.js where we define our user routes to be used in server.js</li>
<br>
<br>

<li>controllers folder: contains auth.controller.js where we define our authentication controller function(login, signup and logout) to be used in auth.routes.js<br>
messages.controller.js where we define our {sendMessage and getMessage} functions to be used in messages.routes.js<br>
user.controller.js where we define our {getUserForSidebar} functions to be used in user.routes.js</li>
<br>
<br>

<li>db folder: contains connectToMongoDB.js where we connect to MongoDB database</li>
<br>
<br>

<li>server.js: contains all the backend routes</li>
<br>
<br>

<li>
models folder: contains user.model.js where we define our user schema<br>
message model.js where we define our message schema<br>
conversation.model.js where we define our conversation schema</li>
<br>
<br>

<li>middleware folder: contains protectRoute.js, this file protects the routes from unauthorized access</li>
<br>
<br>

<li>utils folder: contains generateToken.js where the token used for authentication and security is generated</li>

<ol>
