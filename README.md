# UserSphere 
## Overview
The User Directory App is a React Native project that allows users to view a list of users fetched from the JSONPlaceholder API. The app provides features like infinite scrolling, user search, sorting, and detailed user information.
## Features

  1. User List Screen
     
      - Displays a paginated list of users with their name and email.
      - Infinite scrolling to load more users dynamically as the user scrolls.
      - Real-time search functionality to filter users by name.
      - Sorting options to sort users alphabetically by name or email.
  
  2. User Details Screen
  
      - Provides detailed information about a selected user, including:
          -  Name
          -  Email
          -  Address (Street, City, Zip)
          -  Company Name
          -  Easy navigation back to the user list.
  
  3.    Additional Features
      - Error handling for network issues
      - Loading indicators during data fetch
      - Placeholder text and styles for better user experience.

## Setup and Installation
  1. Clone the Repository:
   ```bash 
      git clone [GitHub Repository URL]
      cd [repository-folder]
   ```
  2. Install Dependencies:
  ```bash
     npm install
  ```
  3. Start the Metro Server:
  ```bash
     npx expo start
  ```
  4. Run the App:
  ```bash
      npx expo start
  ```

## Media Links

  - Screenshots : (View Screenshot)[https://drive.google.com/drive/folders/14hV-JxShBKY9Bgi52TJWEX4OUzMeiSHs?usp=sharing]
  - Demo Video : (Watch Video)[https://drive.google.com/file/d/1eQNkzYroL3wii0Wcj7Rb-9upBvjJWf50/view?usp=drive_link]

## Challenges Faced

  1. Dynamic Search and Sorting:
      -Ensured smooth interaction between search, sorting, and pagination.

## Technologies Used

  -  React Native for app development.
  -  React Navigation for screen transitions. 
  -  FlatList for optimized user list rendering.
  -  JavaScript for logic implementation.

## Acknowledgements

Special thanks to JSONPlaceholder for providing a free, easy-to-use API for prototyping.


