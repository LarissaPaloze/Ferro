import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;
  const {
    nome,
    preco,
    descricao,
    criadoPor,
    createdAt,
    atualizadoPor,
    updatedAt,
  } = product;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Detalhes do Produto</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{nome}</Text>

        <Text style={styles.label}>Preço:</Text>
        <Text style={styles.value}>R$ {preco.toFixed(2)}</Text>

        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.value}>{descricao || '—'}</Text>

        <Text style={styles.label}>Criado por:</Text>
        <Text style={styles.value}>{criadoPor}</Text>

        {createdAt && (
          <>
            <Text style={styles.label}>Data de criação:</Text>
            <Text style={styles.value}>
              {new Date(createdAt.seconds * 1000).toLocaleString()}
            </Text>
          </>
        )}

        {updatedAt && (
          <>
            <Text style={styles.label}>Atualizado por:</Text>
            <Text style={styles.value}>{atualizadoPor}</Text>
            <Text style={styles.label}>Data de atualização:</Text>
            <Text style={styles.value}>
              {new Date(updatedAt.seconds * 1000).toLocaleString()}
            </Text>
          </>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F7F9FC',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEE',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
    marginTop: 12,
  },
  value: {
    color: '#333',
    marginBottom: 6,
    fontSize: 15,
  },
  button: {
    backgroundColor: '#3D7BF7',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
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
