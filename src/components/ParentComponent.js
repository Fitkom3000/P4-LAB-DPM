import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const incrementScoreA = () => {
    if (scoreA < 10) setScoreA(scoreA + 1);
  };

  const decrementScoreA = () => {
    if (scoreA > 0) setScoreA(scoreA - 1);
  };

  const incrementScoreB = () => {
    if (scoreB < 10) setScoreB(scoreB + 1);
  };

  const decrementScoreB = () => {
    if (scoreB > 0) setScoreB(scoreB - 1);
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  const winnerMessage =
    scoreA === 10 ? 'Tim A menang!' : scoreB === 10 ? 'Tim B menang!' : '';

  return (
    <View style={styles.container}>
      <ChildComponent
        teamName="Tim A"
        score={scoreA}
        onIncrement={incrementScoreA}
        onDecrement={decrementScoreA}
      />
      <ChildComponent
        teamName="Tim B"
        score={scoreB}
        onIncrement={incrementScoreB}
        onDecrement={decrementScoreB}
      />
      {winnerMessage && <Text style={styles.winnerText}>{winnerMessage}</Text>}
      <Button title="Reset" onPress={resetScores} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  winnerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
  },
});

export default ParentComponent;
