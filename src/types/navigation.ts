import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Quiz: undefined;
  Leaderboard: {score: number};
};

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;
type LeaderboardScreenRouteProp = RouteProp<RootStackParamList, 'Leaderboard'>;

export type QuizScreenProps = {
  navigation: QuizScreenNavigationProp;
};

export type LeaderboardScreenProps = {
  route: LeaderboardScreenRouteProp;
};
