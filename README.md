# Portofolio-tmthyjw

This is a personal portfolio website built with React and Tailwind CSS. It fetches project data from a local JSON server and displays it in a clean and modern interface.

## Features

*   **Dynamic Content:** Project details, skills, and other information are fetched from a JSON server, making it easy to update.
*   **Responsive Design:** The website is fully responsive and looks great on all devices.
*   **Component-Based Architecture:** The code is organized into reusable React components for better maintainability.
*   **Smooth Scrolling:** Implemented smooth scrolling for a better user experience.

## Technologies Used

*   **Frontend:**
    *   React
    *   Tailwind CSS
    *   Framer Motion (for animations)
    *   React Icons
*   **Backend (for local development):**
    *   JSON Server
*   **Build Tool:**
    *   Vite

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/Portofolio-tmthyjw.git
    cd Portofolio-tmthyjw
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the JSON server:**
    In a separate terminal, run the following command to start the JSON server:
    ```bash
    npm run server OR npx json-server db.json
    ```
    This will serve the `db.json` file on `http://localhost:3001`.

4.  **Start the development server:**
    In another terminal, run the following command to start the Vite development server:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Usage

*   **Development:** `npm run dev` - Starts the development server.
*   **Build:** `npm run build` - Creates a production-ready build in the `dist` directory.
*   **Lint:** `npm run lint` - Lints the code using ESLint.
*   **Preview:** `npm run preview` - Serves the production build locally for previewing.
*   **JSON Server:** `npm run server` - Starts the JSON server.
