# Bank Of FlatIron Transaction Manager

Bank Of FlatIron Transaction Manager is a simple web application that allows users to manage their transactions. Users can add new transactions, view existing transactions, search for specific transactions, and delete transactions they no longer need.

## Features

- **Add Transaction Form**: Users can fill out a form to add a new transaction, including the description, category, and amount.
- **Transaction List**: Displays a list of transactions with details like date, description, category, and amount. Transactions can be filtered by description using the search bar.
- **Delete Transaction**: Each transaction in the list has a delete button that allows users to remove it from the list.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Axios**: Promise-based HTTP client for making requests to the backend server.
- **JSON Server**: Simple backend server that uses a JSON file as a database to store transactions.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Peter00010/bank-of-flatiron.git
    ```

2. Navigate to the project directory:

    ```bash
    cd bank-of-flatiron
    ```

3. Install dependencies:

    ```bash
    npm install
    npm install axios
    ```

## Usage

1. Start the JSON server:

    ```bash
    npm run server
    ```

2. Start the React development server:

    ```bash
    npm start
    ```

3. Open your browser and go to [http://localhost:3002](http://localhost:3002) to view the app.

## Folder Structure

The project structure is organized as follows:

- **`src/`**: Contains all the source code for the frontend application.
  - **`components/`**: Contains React components for different parts of the application.
  - **`App.js`**: Main entry point of the application.
- **`db.json`**: JSON file used as a database for storing transactions.
- **`package.json`**: Contains project metadata and dependencies.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

Special thanks to [Moringa School](https://moringaschool.com/) and [FlatIron School](https://flatironschool.com/) for the inspiration behind the project.
