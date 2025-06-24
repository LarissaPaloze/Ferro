import React, { useContext } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

export default function ProfileScreen() {
  const { user, loading, logout } = useContext(AuthContext);
  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>E-mail:</Text>
      <Text style={styles.value}>{user.email}</Text>
      <Text style={styles.label}>UID:</Text>
      <Text style={styles.value}>{user.uid}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  label: { fontWeight: 'bold', marginTop: 12 },
  value: { marginBottom: 4 },
});
