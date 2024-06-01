import {Question} from '../types/types';

export const randomizeQuestions = (questions: Question[]): Question[] => {
  const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
  return shuffledQuestions.map(question => ({
    ...question,
    answers: question.answers.sort(() => 0.5 - Math.random()),
  }));
};
