import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChildComponent = ({ teamName, score, onIncrement, onDecrement }) => {
  // State untuk warna tombol
  const [plusColor, setPlusColor] = useState(getRandomColor());
  const [minusColor, setMinusColor] = useState(getRandomColor());

  // Fungsi untuk menghasilkan warna RGB acak
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  // Mengubah warna tombol secara otomatis setiap 1 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setPlusColor(getRandomColor());
      setMinusColor(getRandomColor());
    }, 1000); // Mengubah warna setiap 1 detik

    // Membersihkan interval saat komponen unmount
    return () => clearInterval(interval);
  }, []); // Efek hanya dijalankan sekali setelah render pertama

  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={onIncrement} color={plusColor} />
        <Button title="-" onPress={onDecrement} color={minusColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 40,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
});

export default ChildComponent;
