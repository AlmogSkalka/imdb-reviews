# SWAPI Articles & Reviews Platform

Welcome to the Swapi Articles & Reviews platform! **Currently**, this project showcases a user authentication system with login and signup forms using React and Vite. Users can sign up and log in (All info is sent to console.log and LocalStorage).

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/AlmogSkalka/swapi-reviews.git
   ```

2. Navigate to the client directory:

   ```
   cd '.\Client\'
   ```

3. Install dependencies using Yarn:

   ```
   yarn
   ```

4. Run the development server using Vite and Yarn:

   ```
   yarn dev
   ```

5. Navigate to the server directory:

   ```
   cd '.\Server\'
   ```

6. Install dependencies using npm:

   ```
   npm i
   ```

7. Run the server using npm nodemon:

   ```
   npm run dev
   ```

8. In your browser, go to your Client localhost and enjoy the program :)



## Current Features

- User authentication with login and signup forms.
- Toggle password visibility.
- Ability to submit login and signup forms.
- Password standard validation

## News and Updates

**August 2023**: 
Aug 29th
I've added server-side integration to enhance the functionality of the platform. The server-side component is built using Node.js, Express, and CORS. This integration allows the application to communicate with a server, enhancing data retrieval and overall performance.

Aug 27th
I've included a utility function named `isSecuredPassword` that helps you validate password security according to specific criteria. This function is useful when users are signing up and creating accounts. It checks whether a password meets specific requirements.

## Project Structure

The project structure is organized as follows:

- `Client/`
  - `src/`
    - `main.js`: Entry point for the Vite application.
    - `WelcomePage.js`: The main component displaying the welcome page and handling form states and submissions.
    - `Comps/`
      - `SignupForm.js`: Component for the signup form.
      - `LoginForm.js`: Component for the login form.
      - `validatePassword.js`: Component for the signup password validation.
    - `welcome.css`: CSS file for styling the welcome page.
  - `public/`: Contains the HTML file and other public assets.

- `Server/`
  - `server.js`: Server-side component built using Node.js, Express, and CORS.

## How to Use

1. Start the server:

   - Navigate to the `Server/` directory.
   - Run `npm install` to install server dependencies.
   - Run `npm start` to start the server.

2. Start the client:

   - Navigate to the `Client/` directory.
   - Run `yarn` to install client dependencies.
   - Run `yarn dev` to start the client development server using Vite and Yarn.

3. Visit the website at your localhost to see the welcome page and forms.
4. Use the signup form to create a new account.
5. Use the login form to log into your account.

**Note:** Make sure both the server and client are running simultaneously for the full functionality of the application.

## Created by AlmogSkalka
