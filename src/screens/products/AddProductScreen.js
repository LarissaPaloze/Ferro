import React, { useState, useContext } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Produto</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
        style={[styles.input, styles.textArea]}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, 
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#3D7BF7',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
