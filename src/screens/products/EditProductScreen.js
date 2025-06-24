// src/screens/products/EditProductScreen.js
import React, { useState, useContext } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { ProductsContext } from '../../contexts/ProductsContext';

export default function EditProductScreen({ route, navigation }) {
  const { product } = route.params;
  const [nome, setNome] = useState(product.nome);
  const [preco, setPreco] = useState(product.preco.toString());
  const [descricao, setDescricao] = useState(product.descricao);
  const { update } = useContext(ProductsContext);

  const handleSave = async () => {
    if (!nome.trim() || !preco.trim()) {
      Alert.alert('Erro', 'Nome e preço são obrigatórios.');
      return;
    }

    try {
      await update(product.id, {
        nome,
        preco: parseFloat(preco),
        descricao,
      });
      Alert.alert('Sucesso', 'Produto atualizado com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar o produto.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Produto</Text>

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
        <Text style={styles.buttonText}>Atualizar Produto</Text>
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
    elevation: 2, // sombra no Android
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
    elevation: 3, // sombra no Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
