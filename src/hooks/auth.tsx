import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firebaseAuth } from '../services/firebase';
import { getErrorMessage } from '../utils/getErrorMessage';

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}

interface AuthContextState {
  error: string | null;
  user: User | null;
  loading: boolean;
  register: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  const register = async (name: string, email: string, password: string) => {
    setError(null);
    setLoading(true);

    try {
      const result = await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      await result.user?.updateProfile({ displayName: name });
      history.replace('/dashboard');
    } catch (error) {
      console.log(error);
      const message = getErrorMessage(error);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setError(null);
    setLoading(true);

    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
      history.replace('/dashboard');
    } catch (error) {
      const message = getErrorMessage(error);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    firebaseAuth.signOut();
    history.replace('/');
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, register, error, loading, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
