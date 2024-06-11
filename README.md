# WorkSync

## Overview

WorkSync is an Employee Management platform designed to streamline the management of employee data, performance tracking, and payroll processing. It offers a comprehensive suite of tools for HR executives to manage their workforce efficiently.

## Site Information

- **Site Name**: WorkSync
- **Site URL**: [https://arnabsahawrk-work-sync.web.app](https://arnabsahawrk-work-sync.web.app)
- **Server Side GitHub Repository**: [Server Repository](https://github.com/arnabsahawrk/WorkSync-Server.git)

## Login Credentials

- **Employee Email**: employee@worksync.com
- **HR Email**: hr@worksync.com
- **Admin Email**: admin@worksync.com
- **Password**: workSync

## Features

- **Employee Management**: Add, update, and manage employee details.
- **Performance Management**: Track and evaluate employee performance.
- **Payroll Management**: Process salaries and handle payment operations securely with Stripe.
- **Employee Verification**: Toggle employee verification status.
- **Secure Access**: Different routes and permissions for HR, Admin, and general users.
- **Fired Employee Management**: Ensure fired employees cannot access the system.
- **Multiple Search Functionality**: Advanced search options for employee data.
- **Pagination and Sorting**: Implemented using Tanstack Table.
- **Employee Statistics**: Detailed statistics on work hours, total payment, etc.
- **Responsive Design**: Mobile-friendly and accessible design.
- **JWT Secure Authorization**: Secure backend authorization.

## Project Structure

The project is divided into several key components and routes to manage the application efficiently.

### Key Routes

- **/employee-list**: HR-only route displaying all employee information in a table.
- **/employee-details**: Route to view detailed employee statistics.
- **/payroll**: HR-only route to handle salary payments.
- **/auth**: Authentication routes for login and registration.
- **/admin**: Admin-only routes for administrative tasks.
- **/profile**: User profile management.

### Technologies Used

- **Frontend**: React, React Router, React Helmet
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication
- **Payment Gateway**: Stripe for payroll management
- **State Management**: React Context API, Tanstack Query
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Deployment**: Firebase Hosting

## NPM Packages

- **tanstack query**
- **tanstack table**
- **axios**
- **recharts**
- **react-router-dom**
- **react-helmet**

## Installation and Setup

To get the project up and running locally, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/arnabsahawrk/WorkSync-Client.git (Client Side)
   git clone https://github.com/arnabsahawrk/WorkSync-Server.git (Server Side)
   cd work-sync
   ```
2. **Install dependencies**:
   npm install

3. **Set up environment variables**:
   check out the .env.example file

4. **Run the application**:
   npm start

### Contact

For any questions or suggestions, please contact [arnabsahawrk@gmail.com].
