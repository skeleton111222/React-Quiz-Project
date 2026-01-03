# React Quiz App

## Overview

This is a **React Quiz Application** built using **TypeScript**, **React**, and an external API for fetching quiz questions. The application allows users to take a quiz with multiple-choice questions and track their performance.

The quiz pulls questions from an API and displays them in a random order, with shuffled answers for each question. Users can select their answers, and at the end of the quiz, they’ll receive a score.

## Features

- **Multiple quiz categories and difficulty levels**.
- **Shuffled answers** for each question to avoid guessing based on answer order.
- **Responsive UI** that works on both desktop and mobile devices.
- **Real-time score tracking** as users progress through the quiz.
- **Uses environment variables** to hide API keys.

## Technologies Used

- **React** (for building the UI components)
- **TypeScript** (for static typing and better code quality)
- **React Router** (for routing, if used in the project)
- **Styled Components** (for styling the application)
- **Fetch API** (to make HTTP requests to get quiz data)
- **dotenv** (to manage sensitive API keys using environment variables)

## Installation

### 1. Clone the repository:

```
git clone https://github.com/skeleton111222/React-Quiz-Project.git
cd React-Quiz-Project
code .
```

### 2. Install the dependencies:

```
npm install
```

### 3. Set up the environment variables:

Create a `.env` file in the root directory of your project and add your API URL and any other required secrets.

```env
REACT_APP_API_URL=your-api-url-here
REACT_APP_API_KEY=your-api-key-here
```

### 4. Start the development server:

```
npm start
```

This will launch the app in your browser at `http://localhost:3000`.

## Usage

- Once the app is up and running, you will see the quiz interface with different categories and difficulty levels.
- Select a category and difficulty, and start answering questions.
- After completing the quiz, you will be shown your score.

## Contributing

 Contributions are always Welcome to this project! If you would like to improve or add features, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes and commit (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Create a new Pull Request

## Credits

- **[freeCodeCamp](https://www.freecodecamp.org/)** - For providing excellent tutorials and resources.
- **[YouTube Tutorial by Codevolution](https://youtu.be/F2JCjVSZlG0?si=L7-RGQEJ4ILUTqw_)** - For the React and TypeScript tutorial that helped me build this app.
- **[React Quiz on GitHub by weibenfalk](https://github.com/weibenfalk/react-quiz)** - For the base code and inspiration for this project.
