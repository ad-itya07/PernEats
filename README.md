# PernEats [Live](https://perneats-frontend.onrender.com/)

**PernEats** is a comprehensive full-stack food delivery application designed to connect users with a variety of restaurants, facilitating seamless ordering and efficient delivery services. The application is live and accessible at [PernEats Live](https://perneats-frontend.onrender.com/).

## Features

- **User Authentication & Authorization**: Secure user login and registration implemented using Auth0.
- **Responsive Design**: Fully responsive interface ensuring optimal user experience across all devices.
- **Restaurant Management**: Users can manage their own restaurants, including profile editing and menu management.
- **Advanced Search & Filtering**: Search for restaurants by location, name, cuisines, and menu items; filter results by price, delivery time, and rating.
- **Real-Time Order Tracking**: Customers can monitor their order status in real-time, with updates fetched every 5 seconds.
- **Cart Management**: Add or remove items from the cart with ease.
- **Payment Integration**: Secure payment processing through Stripe.
- **Notifications**: Real-time notifications using Shadcn Toaster.
- **Image Uploads**: Restaurant images are handled via Cloudinary, with Multer managing file uploads.
- **Pagination**: Search results are paginated, displaying 10 results per page for improved performance.
- **Restaurant Owner Dashboard**: Dedicated page for restaurant owners to manage and update order statuses.

## Tech Stack

- **Frontend**:

  - React.js (Vite)
  - React Router for client-side routing
  - React Query for data fetching and state management
  - Tailwind CSS for styling
  - Shadcn for UI components and notifications

- **Backend**:

  - Node.js with Express.js framework
  - TypeScript for type safety
  - MongoDB for database management
  - Multer for file handling
  - Stripe API for payment processing

- **Deployment**:
  - Render for hosting both frontend and backend services

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ad-itya07/PernEats.git
   cd PernEats
   ```

2. **Install Dependencies**:
    - For the backend
    ```bash
    cd server
    npm install
    ```

   - For the frontend
   ```bash
   cd client
   npm install

3. **Set up environment variables**

> ***For Backend:***
- Create a `.env` file in the `server` directory and add the following variables based on the structure below:

    ```plaintext
    # Server Port
    PORT=your_server_port

    # MongoDB Configuration
    MONGOPWD=your_mongodb_password
    MONGODB_username=your_mongodb_username
    MONGODB_CONNECTION_STRING=your_mongodb_connection_string

    # Auth0 Configuration
    AUTH0_AUDIENCE=your_auth0_audience
    AUTH0_ISSUER_BASE_URL=your_auth0_issuer_base_url

    # Cloudinary Configuration
    CLODUINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLODUINARY_API_SECRET=your_cloudinary_api_secret

    # Stripe Configuration
    FRONTEND_URL=your_frontend_url
    STRIPE_API_KEY=your_stripe_api_key
    STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
    ```

> ***For frontend:***
- Create a `.env` file in the `client` directory and add the following variables based on the structure below:

    ```plaintext
    # Auth0 Configuration
    VITE_AUTH0_DOMAIN=your_auth0_domain
    VITE_AUTH0_CLIENT_ID=your_auth0_client_id
    VITE_AUTH0_CALLBACK_URL=your_auth0_callback_url
    VITE_AUTH0_AUDIENCE=your_auth0_audience

    # API Configuration
    VITE_API_BASE_URL=your_backend_api_base_url
    ```

4. **Run the development servers**

- Backend :
    ```bash
    cd server
    npm run dev
    ```

- Frontend : 
    ```bash
    cd client
    npm run dev
    ```

5. **Access the application**

- Access the application on the frontend url.
- And the backend will run on the port you provided.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.