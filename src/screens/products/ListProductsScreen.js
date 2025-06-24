import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';
import { ProductsContext } from '../../contexts/ProductsContext';

export default function ListProductsScreen({ navigation }) {
  const { products, loading, remove } = useContext(ProductsContext);

  const confirmDelete = (id) => {
    Alert.alert('Confirmação', 'Deseja excluir este produto?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', onPress: () => remove(id) },
    ]);
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#3D7BF7" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddProduct')}
      >
        <Text style={styles.addButtonText}>+ Novo Produto</Text>
      </TouchableOpacity>

      {products.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhum produto cadastrado.</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('ProductDetails', { product: item })
              }
            >
              <Text style={styles.productName}>{item.nome}</Text>
              <Text style={styles.productPrice}>
                R$ {item.preco.toFixed(2)}
              </Text>

              <View style={styles.actions}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('EditProduct', { product: item })
                  }
                >
                  <Text style={styles.editText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                  <Text style={styles.deleteText}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F9FC',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    padding: 16,
  },
  addButton: {
    backgroundColor: '#3D7BF7',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EEE',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  productName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    marginTop: 4,
    fontSize: 15,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 12,
  },
  editText: {
    marginRight: 20,
    color: '#FFA500',
    fontWeight: 'bold',
  },
  deleteText: {
    color: '#FF4D4D',
    fontWeight: 'bold',
  },
  emptyContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});
