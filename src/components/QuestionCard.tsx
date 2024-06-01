import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Question} from '../types/types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answerId: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({question, onAnswer}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{question.text}</Text>
      {question.answers.map(answer => (
        <Button
          key={answer.id}
          title={answer.text}
          onPress={() => onAnswer(answer.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default QuestionCard;
