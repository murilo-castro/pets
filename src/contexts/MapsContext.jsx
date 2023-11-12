'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export const MapsContext = createContext({});

export const TodosContextProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [care, setCare] = useState('');
};

export const useTodosContext = () => useContext(MapsContext);
