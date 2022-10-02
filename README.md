# Full stack todo-app

Let us build a simple Tasklist app! 🚀

Tech Stack:

- Frontend:   
    - HTML
    - CSS
    - Javascript
- Backend:
    - Node.js
    - Express
    - MongoDB

**Output**:



This application has the following features:
The user can:
- Add a new Task
- Remove a task
- Check the task to mark it as complete.

**Base Setup**:

- Create an empty directory named `tasklist-app`
- Open up the console, navigate to the directory and run `npm init`
- Fill out the required information to initialize the project
- Within the `tasklist-app` directory, install express library using `npm i express`

**Files**:

- `server.js`  → Should contain the code for the backend Node.js Express server
- `/public/index.html` → Should contain Your Frontend HTML Code
- `/public/index.js` → Should contain Your Javascript 
- `/public/styles.css` → Should contain Your CSS styles

**Sample Functionality:**



**APIs:**

- `GET` request for the endpoint `\tasks` → To Get the tasks
- `POST` request for the endpoint `\tasks` → To Add a task
- `DELETE` request for the endpoint `\tasks` → To Remove a task
- `PUT` request for the endpoint `\tasks` → To Update a task (when user checks the checkbox)

**Use Case:**

- Display the list of tasks by making a `GET` API call - which internally fetches the tasks from the MongoDB database
- When you click on the add task button from your HTML form it should make a `POST`request to the backend node.js API endpoint with the task details
- Your backend server should add the task to MongoDB Database → inside `tasks` collection
- When you remove a task, a `DELETE` request is initiated which will remove the task from the database

**Bonus 1:**

- Instead of hosting your backend in Local using [Localhost](http://Localhost) you can try using [https://ngrok.com/](https://ngrok.com/)
- Read more about Ngrok usablity with node.js here:
    
    [Create Secure Tunnel To Node.js Application With Ngork](https://medium.com/@amarjotsingh90/create-secure-tunnel-to-node-js-application-with-ngork-e4806b21bef0)
    

**Bonus 2:**

- Deploy your fullstack application to netlify!
- Read more here:
[Deploy React/Javascript App to Netlify in 2 Minutes](https://medium.com/geekculture/deploy-react-javascript-app-to-netlify-in-2-minutes-a46b03894f9e)

Refer https://hashinsert.notion.site/Your-First-FullStack-App-0383552362c14396b012eea898539c12
