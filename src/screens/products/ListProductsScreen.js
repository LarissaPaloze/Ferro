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
      
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0ECF8',
  },
  container: {
    flex: 1,
    backgroundColor: '#E0ECF8',
    padding: 16,
  },
  addButton: {
    backgroundColor: '#F67828',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#6C63FF',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DCE1E7',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  editText: {
    marginRight: 20,
    color: '#F59E0B',
    fontWeight: '600',
    fontSize: 15,
  },
  deleteText: {
    color: '#EF4444',
    fontWeight: '600',
    fontSize: 15,
  },
  emptyContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 17,
    color: '#9CA3AF',
  },
});
