import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Question} from '../types/types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answerId: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({question, onAnswer}) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);

  const handlePress = (answerId: string) => {
    setSelectedAnswerId(answerId);
    onAnswer(answerId);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{question.text}</Text>
      {question.answers.map(answer => (
        <TouchableOpacity
          key={answer.id}
          style={[
            styles.answerButton,
            selectedAnswerId === answer.id && styles.selectedAnswerButton,
          ]}
          onPress={() => handlePress(answer.id)}>
          <Text
            style={[
              styles.answerText,
              selectedAnswerId === answer.id && styles.selectedAnswerText,
            ]}>
            {answer.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
  },
  answerButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  selectedAnswerButton: {
    backgroundColor: '#cce5ff',
  },
  answerText: {
    fontSize: 16,
  },
  selectedAnswerText: {
    color: '#0056b3',
  },
});

export default QuestionCard;
