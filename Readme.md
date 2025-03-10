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

   Inside utils folder we have following helper functions:-

   - `asyncHandler.js` ->

     This utility function wraps async route handlers to catch errors automatically and pass them to Express's error-handling middleware.

     Usage:-

     ```
     import { asyncHandler } from "../utils/asyncHandler.js";
     app.get("/example",
              asyncHandler(async (req, res) => {
              const data = await someAsyncOperation();
              res.status(200).json({ success: true, data });
              })
            );
     ```

     - Eliminates repetitive `try-catch` blocks.
     - Ensures unhandled promise rejections are forwarded to Express's error middleware.

   - `ApiResponse.js` ->

     A class that structures API responses with a consistent format, including status codes and messages.

     Usage:-

     ```
     import { ApiResponse } from "../utils/ApiResponse.js";

     res.status(200).json(new ApiResponse(200, { user: "John Doe" }, "User fetched successfully"));
     ```

     - Ensures uniform API responses across the application.
     - Includes a success flag for easy frontend handling.

   - `ApiError.js` ->

     A class that standardizes error messages, status codes, and additional error details.

     Usage:-

     ```
     import { ApiError } from "../utils/ApiError.js";
     if (!user) {
     throw new ApiError(404, "User not found");
     }
     ```

     - Provides meaningful error messages with status codes.
     - Captures error stacks for debugging.
     - Easily integrates with Express’s error-handling middleware.

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
CORS_ORIGIN=<your cors origin>

```

Feel free to add any additional environment variables based on your project needs.

5. **Set Up Environment Variables for your database(here MongoDB) ->**

Inside your `.env` file, add the following variable:

```

DB_URI=<your_db_connection_string>

```

6. **Configure Database Connection ->**

This project uses MongoDB as the database. But you can use any database you want and make changes. The connection logic is handled inside the db/index.js file.

- The `connectDB` function establishes a connection with MongoDB using `mongoose.connect()`.
- It fetches the `MongoDB connection URI` from the `.env` file and uses the default database name stored in constants.js.
- If the connection fails, the application will log an error and exit.

7. **Start the Server ->**

Once the database connection is successful, the server will start listening on the specified `PORT`.
This is handled inside `index.js`:

```

connectDB()
.then(() => {
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
})
.catch((err) => {
console.log(`MongoDB connection error`, err);
});

```

If the connecion fails, an error message will be displayed.

8. **Run the project**

Now inside terminal go the root direcory and check the current directory. If you are in root the run the following command:

```

npm run dev

```

This will start the server and connect to DB.

```

```
