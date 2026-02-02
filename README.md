# 🛒 Full-Stack Amazon Clone (AI-Enhanced)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)
[![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)](https://stripe.com/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

A modern, high-performance Amazon replica built with the MERN-equivalent stack (React, Express, Firebase). This project features a full e-commerce lifecycle, including an **AI-driven shopping assistant** to help users find products via natural language.

---

## 📑 Table of Contents
- [✨ Key Features](#-key-features)
- [🤖 AI Integration](#-ai-integration)
- [🛠️ Technologies Used](#️-technologies-used)
- [🚀 Getting Started](#-getting-started)
- [🧪 Testing Credentials](#-testing-credentials)

---

## ✨ Key Features
* **Secure Authentication**: Full Sign-up/Sign-in functionality via Firebase Auth.
* **Dynamic Basket**: Real-time cart updates with persistent storage.
* **Stripe Integration**: Fully functional checkout flow with secure payment processing.
* **Order History**: Real-time Firestore database to track past purchases.
* **Responsive UI**: Optimized for mobile, tablet, and desktop views.

## 🤖 AI Integration
This version goes beyond a standard clone by featuring an **AI Shopping Agent**:
* **Natural Language Search**: Users can ask "I'm looking for a gift for a tech-lover under $50."
* **Context Awareness**: The assistant is primed with store inventory data to provide relevant recommendations.
* **Tech**: Powered by Google's Gemini 3 Flash for near-instant responses.

---

## 🛠️ Technologies Used
### **Frontend**
* React.js (Hooks & Context API)
* React Router (Navigation)
* Currency-format (Price handling)

### **Backend & Cloud**
* **Firebase 10**: Auth, Firestore (NoSQL), Hosting.
* **Cloud Functions**: Node.js environment for Stripe backend logic.
* **Express.js**: Handling server-side API requests.

### **Payments**
* **Stripe API**: Processing card payments securely.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2. Install dependencies 
```
# Install frontend dependencies
npm install

# Install functions dependencies
cd functions
npm install
cd ..
```
### 3. Configure Firebase & Stripe
#### 1. Create a project in the Firebase Console.
#### 2. Enable Authentication, Firestore, and Functions.
#### 3. Create a .env file in the root directory and add your keys:
```Plaintext
REACT_APP_STRIPE_PUBLIC_KEY=your_public_key
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_GEMINI_API_KEY=your_ai_key
```
#### 4. Set your Stripe Secret Key in Firebase Functions via the CLI:
```
firebase functions:config:set stripe.secret="your_secret_key"
```

### 4. Run Locally
```
npm start
```

## 🧪 Testing Credentials
Option 1: Create Your Own Testing Account

Click on "Sign Up." and follow the on-screen instructions to create your account with a unique email and secure password.

Option 2: Use the Shared Testing Account

- Account: test1@gmail.com
- Password: 123123

## 📄 License
Distributed under the MIT License.
