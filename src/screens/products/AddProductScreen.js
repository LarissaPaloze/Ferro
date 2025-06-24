import React, { useState, useContext } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, StyleSheet, ScrollView, Platform } from 'react-native';
import { ProductsContext } from '../../contexts/ProductsContext';

export default function AddProductScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const { addNew } = useContext(ProductsContext);

  const handleSave = async () => {
    if (!nome || !preco) {
      Alert.alert('Erro', 'Nome e preço são obrigatórios.');
      return;
    }
    await addNew({ nome, preco: parseFloat(preco), descricao });
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}> Novo Produto</Text>
      <Text style={styles.subtitle}>Preencha as informações abaixo</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        placeholder="Ex: Arroz Integral"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        placeholderTextColor="#A1A1AA"
      />

      <Text style={styles.label}>Preço (R$)</Text>
      <TextInput
        placeholder="Ex: 19.90"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
        style={styles.input}
        placeholderTextColor="#A1A1AA"
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        placeholder="Ex: Pacote de 1kg, arroz tipo 1..."
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
        style={[styles.input, styles.textArea]}
        placeholderTextColor="#A1A1AA"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}> Salvar Produto</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F1F5F9',
    padding: 24,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
    }),
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#F67828',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
    }),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
