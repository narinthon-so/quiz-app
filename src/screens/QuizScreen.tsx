import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Button, Text, View} from 'react-native';
import QuestionCard from '../components/QuestionCard';
import {Question} from '../types/types';
import {randomizeQuestions} from '../utils/randomize';
import questions from '../data/questions';
import {QuizScreenProps} from '../types/navigation';

const QuizScreen: React.FC<QuizScreenProps> = ({navigation}) => {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const randomizedQuestions = randomizeQuestions(questions);
    setQuizQuestions(randomizedQuestions.slice(0, 20));
  }, []);

  const handleAnswer = (questionId: string, answerId: string) => {
    const question = quizQuestions.find(q => q.id === questionId);
    if (question && question.correctAnswerId === answerId) {
      setScore(prevScore => prevScore + 1);
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
