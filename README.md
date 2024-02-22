<h1>Welcome to ChitChat</h1>
<p>ChitChat is a chat application that allows you to send messages to your friends in real time. You can create an account and add friends to your friends list. You can also create chat rooms and invite your friends to join them. You can also send private messages to your friends. You can also send messages to your friends in real time. You can also create an account and add friends to your friends list. You can also create chat rooms and invite your friends to join them. You can also send private messages to your friends.</p>
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
<li>routes folder: contains auth.routes.js where we define our authentication routes(signup, login and logout) to be used in server.js
messages.routes.js where we define our message routes (api/messages/send/id)to be used in server.js</li>
</li>
<li>controllers folder: contains auth.controller.js where we define our controllers to be used in auth.routes.js
messages.controller.js where we define our controllers to be used in messages.routes.js</li>
</li>
<li>db folder: contains connectToMongoDB.js where we connect to MongoDB database</li>
<li>server.js: contains all the backend code</li>
<li>
models folder: contains user.model.js where we define our user schema
message model.js where we define our message schema
conversation.model.js where we define our conversation schema</li>
</li>
<li>middleware folder: contains protectRoute.js, this file protects the routes from unauthorized access</li>
<li>
<p>We will have a message collection wih unique id, senderid, receiverid, message, and timestamp</p>
<p>For conversation model, we will have a unique id, participants array[1, 2] and the messages array</p>
</li>
