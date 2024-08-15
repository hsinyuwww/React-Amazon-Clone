# Full-Stack Amazon Clone

This project is a full-stack Amazon clone developed using React.js, Express.js, Firebase 10, and Stripe API. It features checkout functionality, payment integration, user authentication, and real-time database capabilities. The application is deployed on Firebase hosting.

To get started, follow these steps to set up your testing account:

Option 1: Create Your Own Testing Account

Click on "Sign Up." and follow the on-screen instructions to create your account with a unique email and secure password.

Option 2: Use the Shared Testing Account

- Account: test1@gmail.com
- Password: 123123

Happy testing!

## Technologies Used

- Frontend:
  - React.js
- Backend:
  - Express.js
  - Firebase 10
    - Authentication
    - Firestore
    - Hosting
    - Functions
- Other:
  - React Router
  - React Context API
  - Stripe API for payments

## Features

1. User Authentication
   - Sign up
   - Sign in
   - Sign out
2. Product Management
   - View products
   - Add to cart
   - Remove from cart
3. Checkout Process
   - Secure payment with Stripe
4. Order Management
   - View order history
5. Responsive Design
   - Mobile-friendly interface
  
## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
git clone <your-repository-url>

2. **Install dependencies:**
cd <project-folder>
npm install

3. **Configure Firebase:**
- Create a new Firebase project in the Firebase Console
- Enable the following Firebase services:
  - Authentication
  - Firestore
  - Hosting
  - Functions
- Install Firebase CLI (if not already installed):
  ```
  npm install -g firebase-tools
  ```
- Login to Firebase:
  ```
  firebase login
  ```
- Initialize Firebase in your project:
  ```
  firebase init
  ```
- Add your Firebase configuration to the project:
  - Create a `.env` file in the root directory
  - Add your Firebase config values to this file

4. **Set up Stripe:**
- Create a Stripe account at [stripe.com](https://stripe.com)
- Obtain your Stripe API keys
- Add your Stripe public key to the `.env` file
- Configure your Stripe secret key in Firebase Functions:
  ```
  firebase functions:config:set stripe.secret="your_stripe_secret_key"
  ```

5. **Start the development server:**
```
npm start
```
6. **Access the application:**
- Open your web browser
- Navigate to `http://localhost:3000`

Now you should have the Amazon Clone running locally on your machine!
