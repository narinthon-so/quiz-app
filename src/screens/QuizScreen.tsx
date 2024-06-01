import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Button, Text, View} from 'react-native';
import QuestionCard from '../components/QuestionCard';
import {Question} from '../types/types';
import {randomizeQuestions} from '../utils/randomize';
import questions from '../data/questions';
import {QuizScreenProps} from '../types/navigation';

interface Answer {
  questionId: string;
  answerId: string;
}

const QuizScreen: React.FC<QuizScreenProps> = ({navigation}) => {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    const randomizedQuestions = randomizeQuestions(questions);
    setQuizQuestions(randomizedQuestions.slice(0, 20));
  }, []);

  const handleAnswer = (questionId: string, answerId: string) => {
    const question = quizQuestions.find(q => q.id === questionId);
    const previousAnswer = answers.find(a => a.questionId === questionId);

    if (!question) {
      return;
    }

    if (previousAnswer) {
      if (
        previousAnswer.answerId === question.correctAnswerId &&
        answerId !== question.correctAnswerId
      ) {
        // Previously correct, now incorrect
        setScore(prevScore => prevScore - 1);
      } else if (
        previousAnswer.answerId !== question.correctAnswerId &&
        answerId === question.correctAnswerId
      ) {
        // Previously incorrect, now correct
        setScore(prevScore => prevScore + 1);
      }
      setAnswers(prevAnswers =>
        prevAnswers.map(a =>
          a.questionId === questionId ? {questionId, answerId} : a,
        ),
      );
    } else {
      if (answerId === question.correctAnswerId) {
        setScore(prevScore => prevScore + 1);
      }
      setAnswers(prevAnswers => [...prevAnswers, {questionId, answerId}]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {quizQuestions.map(question => (
        <QuestionCard
          key={question.id}
          question={question}
          onAnswer={answerId => handleAnswer(question.id, answerId)}
        />
      ))}
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={() => navigation.navigate('Leaderboard', {score})}
        />
      </View>
      <Text style={styles.score}>Score: {score}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  score: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default QuizScreen;
