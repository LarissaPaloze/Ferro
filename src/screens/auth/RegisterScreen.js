
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

export default function RegisterScreen({ navigation }) {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'E-mail e senha são obrigatórios.');
      return;
    }
    await register(email, password);
    Alert.alert('Sucesso', 'Registrado com sucesso!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" style={styles.input} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Registrar" onPress={handleRegister} />
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Já tem conta? Faça login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  input: { borderBottomWidth: 1, marginBottom: 12, padding: 8 },
  link: { marginTop: 16, color: 'blue', textAlign: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' }
});
