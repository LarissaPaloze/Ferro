import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    // Mock de autenticação (substitua pela lógica real se desejar)
    const mockUser = { uid: 'usuario_teste', email };
    await AsyncStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const register = async (email, password) => {
    // Mock de registro
    const mockUser = { uid: 'usuario_teste', email };
    await AsyncStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    (async () => {
      const stored = await AsyncStorage.getItem('user');
      if (stored) setUser(JSON.parse(stored));
      setLoading(false);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}