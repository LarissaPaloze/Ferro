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
    padding: 24,
    backgroundColor: '#EEF2FF',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E3A8A',
    alignSelf: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
  },
  label: {
    fontWeight: '700',
    color: '#4B5563',
    marginTop: 16,
    fontSize: 16,
  },
  value: {
    color: '#111827',
    marginTop: 4,
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#F67828',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 32,
    shadowColor: '#6366F1',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
