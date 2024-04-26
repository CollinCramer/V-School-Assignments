import { useState } from 'react';
import './App.css';
import { AppContextProvider } from './AppContext';
import FormContents from './FormContents';
import UglyList from './UglyList';

function App() {


  return (
    <>
      <AppContextProvider>
        <FormContents />
        <UglyList />
      </AppContextProvider>
    </>
  )
}

export default App
