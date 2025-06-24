
import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Button, Alert, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

export default function LoginScreen({ navigation }) {
  const { login, user, loading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!loading && user) navigation.replace('ListProducts');
  }, [user, loading]);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'E-mail e senha são obrigatórios.');
      return;
    }
    await login(email, password);
  };

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" style={styles.input} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Entrar" onPress={handleLogin} />
      <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Não tem conta? Registre-se</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  input: { borderBottomWidth: 1, marginBottom: 12, padding: 8 },
  link: { marginTop: 16, color: 'blue', textAlign: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' }
});