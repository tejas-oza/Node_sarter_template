# Node.js Starter Template

> A clean and scalable Node.js backend template with Express.js, following best practices for modular structure and maintainability.

---

`src` -> This folder is the entry point of your actual code. All the actual source code of the project will be available inside this folder.

Let's go inside the `src` folder ->

1. `db/` -> **Database Connection**

   This folder contains all the database related configuration.

   - Inside the `index.js` file, there is a function called `connectDB`, which helps establish a connection to the database (here, MongoDB).

   - You can modify this function to connect to any database of your choice, such as **PostgreSQL, MySQL or any other**.

2. `models/` -> **Database Models**

   This folder contains all the schema defination for the database collections.

   - Each file inside represents a **MongoDB schema** (if using Mongoose) or a **table model** (if using another ORM like Sequelize or Prisma).
   - All models are exported through `index.js` for easy imports.

   Example:-

   1. `User.model.js` -> Defines users schema.
   2. `Product.model.js` -> Defines products schema.

3. `controllers/` -> **Business Logic**

   This folder contains controller functions that handle requests and responses.

   - Controllers **process data** received from `routes`, interact with `models`, and return responses.
   - Each file corresponds to a specific resource.

   Example:-

   1. `User.controller.js` -> Contains all the business logic related to users (register, login, profile etc...).
   2. `product.controller.js` -> Contains all the business logic related to products (CRUD Operations).

4. `routes/` -> **API Endpoints**

   This folder defines **API Routes**.

   - In the routes folder, we register a route and the corresponding `middlewares` and `controllers`.

   Example:-

   1. `user.route.js` -> Defines routes like `GET /users`, `POST /users/login`.
   2. `product.route.js` -> Defines routes like `GET /products`, `POST /create-product`

5. `middlewares/` -> **Middleware Functions**

   This folder contains all the middleware functions that runs before reaching controllers.

   - Used for **authentication, logging, validation, and error handling**.

   Example:-

   1. `authMiddleware.js` -> Verifies user authentication before accessing protected routes.
   2. `errorMiddleware.js` -> Handles errors globally in the app.

6. `utils/` -> **Helper Functions**

   This folder contains utility/helper functions used across the application.

   - Common helpers, formatters, and reusable logic are placed here.

   Example:-

   1. `verifyJwt.js` -> Used to verify jwt for authentication.
   2. `Logger.js` -> Logs all the api requests and errors.

**Other files inside src** ->

7. `index.js` -> Main entry point of the application; starts the server
8. `app.js` -> Main Express app setup, including middleware, routes, and error handling.
9. `constants.js` -> Stores global constants like API keys, error messages, and status codes.

---

`public` -> **Static files**

This folder contains public assets such as images, videos, and frontend-related static content.

`.env.sample` -> A sample of .env file for reference.

---

### Setting up the project ->

1. **Clone the Repository ->**

Download the template from GitHub and open it in any text editor of your choice.

2. **Navigate to the Project Directory ->**

Open the terminal and check your current working directory using:

```
pwd
```

If you are not inside the project root, navigate to it using:

```
cd your_rootFolderName
```

3. **Install Dependencies ->**
   Run the following command to install all dependencies:

```
npm install
```

4. **Set Up Environment Variables ->**
   Inside the root directory, create `.env` file and add the necessary environment variavles.

Example: -

```
PORT=<your port number>
DB_URI=<your database URI>
DB_NAME=<your database name>
ACCESS_TOKEN=<your access token>
REFRESH_TOKEN=<your refresh token>
```

Feel free to add any additional environment variables based on your project needs.
