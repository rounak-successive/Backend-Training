# Backend-Training

This repository is set up for backend training and development using Node.js.

## Node.js Installation

Ensure you have the LTS version of Node.js installed by following these steps:

1. Update Package Lists:

   ```bash
   sudo apt update
   ```

2. Install Node.js:

   ```bash
   sudo apt install curl
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt install nodejs
   ```

3. Verify Installation:

   ```bash
   node -v
   npm -v
   ```

## Project Setup

To use this repository for your backend training, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/rounak-successive/Backend-Training.git
   cd backend-training
   ```

2. Explore the code and start building your backend applications.

Certainly! Below are the steps you can include in your README.md file:

### Setting up Express

1. Install the latest stable version of Express using npm:

    ```bash
    npm install express
    ```

2. Set up and configure the `cookie-parser` dependency:

    ```bash
    npm install cookie-parser
    ```

### Setting up Postman

1. Open a terminal.

2. Add the Postman repository:

    ```bash
    sudo sh -c 'echo "deb https://dl.pstmn.io/download/latest/linux64" > /etc/apt/sources.list.d/postman.list'
    ```

3. Import the Postman GPG Key:

    ```bash
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
    ```

4. Update the package list:

    ```bash
    sudo apt-get update
    ```

5. Install Postman:

    ```bash
    sudo apt-get install postman
    ```


