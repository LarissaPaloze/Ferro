import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;
  const { nome, preco, descricao, criadoPor, createdAt, atualizadoPor, updatedAt } = product;

  return (
    <View style={styles.container}>
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
          <Text style={styles.value}>{new Date(createdAt.seconds * 1000).toLocaleString()}</Text>
        </>
      )}

      {updatedAt && (
        <>
          <Text style={styles.label}>Atualizado por:</Text>
          <Text style={styles.value}>{atualizadoPor}</Text>
          <Text style={styles.label}>Data de atualização:</Text>
          <Text style={styles.value}>{new Date(updatedAt.seconds * 1000).toLocaleString()}</Text>
        </>
      )}

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontWeight: 'bold', marginTop: 12 },
  value: { marginBottom: 4 },
});
