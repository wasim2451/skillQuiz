// quiz.ts
interface QuizQuestion {
  id: number;
  question: string;
  correctAns: string;
  options: string[];
}

export const quiz: QuizQuestion[] = [
  {
    id: 1,
    question: "What does the acronym 'HTML' stand for?",
    correctAns: "HyperText Markup Language",
    options: [
      "HyperText Markup Language",
      "High-Level Text Machine Language",
      "Hyper Transfer Markup Language",
      "HyperText Management Language",
    ],
  },
  {
    id: 2,
    question: "Which of the following is NOT a JavaScript framework?",
    correctAns: "Django",
    options: ["React", "Angular", "Vue", "Django"],
  },
  {
    id: 3,
    question: "What is the output of `console.log(2 + '2')` in JavaScript?",
    correctAns: "'22'",
    options: ["4", "'22'", "22", "NaN"],
  },
  {
    id: 4,
    question: "Which keyword is used to declare a variable in TypeScript?",
    correctAns: "let",
    options: ["var", "let", "const", "All of the above"],
  },
  {
    id: 5,
    question: "What does the `git pull` command do?",
    correctAns: "Fetches changes from a remote repository and merges them into the current branch",
    options: [
      "Creates a new branch",
      "Fetches changes from a remote repository and merges them into the current branch",
      "Deletes a branch",
      "Commits changes to the local repository",
    ],
  },
  {
    id: 6,
    question: "Which data structure uses the Last-In-First-Out (LIFO) principle?",
    correctAns: "Stack",
    options: ["Queue", "Stack", "Array", "Linked List"],
  },
  {
    id: 7,
    question: "What is the time complexity of a binary search algorithm?",
    correctAns: "O(log n)",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
  },
  {
    id: 8,
    question: "Which of the following is NOT a valid HTTP status code?",
    correctAns: "509",
    options: ["200", "404", "500", "509"],
  },
  {
    id: 9,
    question: "What does the `===` operator check in JavaScript?",
    correctAns: "Value and type",
    options: [
      "Only value",
      "Only type",
      "Value and type",
      "Reference equality",
    ],
  },
  {
    id: 10,
    question: "Which command is used to install dependencies in a Node.js project?",
    correctAns: "npm install",
    options: [
      "npm start",
      "npm build",
      "npm install",
      "npm run",
    ],
  },
];

export default quiz;
