import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LeaderboardScreen: React.FC<{route: any}> = ({route}) => {
  const {score} = route.params;

  // This should be replaced with actual leaderboard data
  const leaderboard = [
    {name: 'Player 1', score: 10},
    {name: 'Player 2', score: 8},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <Text style={styles.score}>Your Score: {score}</Text>
      {leaderboard.map((entry, index) => (
        <Text key={index} style={styles.entry}>
          {entry.name}: {entry.score}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  score: {
    fontSize: 18,
    marginVertical: 10,
  },
  entry: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default LeaderboardScreen;
