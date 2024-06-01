import {Question} from '../types/types';

const questions: Question[] = [
  {
    id: '1',
    text: 'What is the capital of France?',
    answers: [
      {id: '1a', text: 'Berlin'},
      {id: '1b', text: 'Madrid'},
      {id: '1c', text: 'Paris'},
      {id: '1d', text: 'Lisbon'},
    ],
    correctAnswerId: '1c',
  },
  {
    id: '2',
    text: 'Which planet is known as the Red Planet?',
    answers: [
      {id: '2a', text: 'Earth'},
      {id: '2b', text: 'Mars'},
      {id: '2c', text: 'Jupiter'},
      {id: '2d', text: 'Saturn'},
    ],
    correctAnswerId: '2b',
  },
  {
    id: '3',
    text: 'What is the largest ocean on Earth?',
    answers: [
      {id: '3a', text: 'Atlantic Ocean'},
      {id: '3b', text: 'Indian Ocean'},
      {id: '3c', text: 'Arctic Ocean'},
      {id: '3d', text: 'Pacific Ocean'},
    ],
    correctAnswerId: '3d',
  },
  {
    id: '4',
    text: 'Who wrote "Hamlet"?',
    answers: [
      {id: '4a', text: 'Charles Dickens'},
      {id: '4b', text: 'William Shakespeare'},
      {id: '4c', text: 'Leo Tolstoy'},
      {id: '4d', text: 'Mark Twain'},
    ],
    correctAnswerId: '4b',
  },
  {
    id: '5',
    text: 'What is the smallest prime number?',
    answers: [
      {id: '5a', text: '0'},
      {id: '5b', text: '1'},
      {id: '5c', text: '2'},
      {id: '5d', text: '3'},
    ],
    correctAnswerId: '5c',
  },
  {
    id: '6',
    text: 'Which element has the chemical symbol "O"?',
    answers: [
      {id: '6a', text: 'Gold'},
      {id: '6b', text: 'Oxygen'},
      {id: '6c', text: 'Silver'},
      {id: '6d', text: 'Osmium'},
    ],
    correctAnswerId: '6b',
  },
  {
    id: '7',
    text: 'What is the longest river in the world?',
    answers: [
      {id: '7a', text: 'Amazon River'},
      {id: '7b', text: 'Nile River'},
      {id: '7c', text: 'Yangtze River'},
      {id: '7d', text: 'Mississippi River'},
    ],
    correctAnswerId: '7b',
  },
  {
    id: '8',
    text: 'Who painted the "Mona Lisa"?',
    answers: [
      {id: '8a', text: 'Vincent van Gogh'},
      {id: '8b', text: 'Pablo Picasso'},
      {id: '8c', text: 'Claude Monet'},
      {id: '8d', text: 'Leonardo da Vinci'},
    ],
    correctAnswerId: '8d',
  },
  {
    id: '9',
    text: 'What is the hardest natural substance on Earth?',
    answers: [
      {id: '9a', text: 'Gold'},
      {id: '9b', text: 'Iron'},
      {id: '9c', text: 'Diamond'},
      {id: '9d', text: 'Platinum'},
    ],
    correctAnswerId: '9c',
  },
  {
    id: '10',
    text: "Which gas is most abundant in the Earth's atmosphere?",
    answers: [
      {id: '10a', text: 'Oxygen'},
      {id: '10b', text: 'Hydrogen'},
      {id: '10c', text: 'Nitrogen'},
      {id: '10d', text: 'Carbon Dioxide'},
    ],
    correctAnswerId: '10c',
  },
  {
    id: '11',
    text: 'What is the square root of 64?',
    answers: [
      {id: '11a', text: '6'},
      {id: '11b', text: '7'},
      {id: '11c', text: '8'},
      {id: '11d', text: '9'},
    ],
    correctAnswerId: '11c',
  },
  {
    id: '12',
    text: 'Which country is known as the Land of the Rising Sun?',
    answers: [
      {id: '12a', text: 'China'},
      {id: '12b', text: 'Japan'},
      {id: '12c', text: 'South Korea'},
      {id: '12d', text: 'Thailand'},
    ],
    correctAnswerId: '12b',
  },
  {
    id: '13',
    text: 'Who developed the theory of relativity?',
    answers: [
      {id: '13a', text: 'Isaac Newton'},
      {id: '13b', text: 'Albert Einstein'},
      {id: '13c', text: 'Galileo Galilei'},
      {id: '13d', text: 'Nikola Tesla'},
    ],
    correctAnswerId: '13b',
  },
  {
    id: '14',
    text: 'What is the chemical formula for water?',
    answers: [
      {id: '14a', text: 'H2O'},
      {id: '14b', text: 'CO2'},
      {id: '14c', text: 'O2'},
      {id: '14d', text: 'H2SO4'},
    ],
    correctAnswerId: '14a',
  },
  {
    id: '15',
    text: 'Which planet is the largest in our solar system?',
    answers: [
      {id: '15a', text: 'Earth'},
      {id: '15b', text: 'Mars'},
      {id: '15c', text: 'Jupiter'},
      {id: '15d', text: 'Saturn'},
    ],
    correctAnswerId: '15c',
  },
  {
    id: '16',
    text: 'What is the capital of Italy?',
    answers: [
      {id: '16a', text: 'Rome'},
      {id: '16b', text: 'Venice'},
      {id: '16c', text: 'Florence'},
      {id: '16d', text: 'Milan'},
    ],
    correctAnswerId: '16a',
  },
  {
    id: '17',
    text: 'What is the largest mammal in the world?',
    answers: [
      {id: '17a', text: 'Elephant'},
      {id: '17b', text: 'Blue Whale'},
      {id: '17c', text: 'Giraffe'},
      {id: '17d', text: 'Great White Shark'},
    ],
    correctAnswerId: '17b',
  },
  {
    id: '18',
    text: 'Who is the author of "Harry Potter"?',
    answers: [
      {id: '18a', text: 'J.K. Rowling'},
      {id: '18b', text: 'J.R.R. Tolkien'},
      {id: '18c', text: 'George R.R. Martin'},
      {id: '18d', text: 'Suzanne Collins'},
    ],
    correctAnswerId: '18a',
  },
  {
    id: '19',
    text: 'What is the main ingredient in guacamole?',
    answers: [
      {id: '19a', text: 'Tomato'},
      {id: '19b', text: 'Onion'},
      {id: '19c', text: 'Avocado'},
      {id: '19d', text: 'Garlic'},
    ],
    correctAnswerId: '19c',
  },
  {
    id: '20',
    text: 'What is the chemical symbol for gold?',
    answers: [
      {id: '20a', text: 'Au'},
      {id: '20b', text: 'Ag'},
      {id: '20c', text: 'Gd'},
      {id: '20d', text: 'Pb'},
    ],
    correctAnswerId: '20a',
  },
];

export default questions;
