import React, { useContext } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider, { DataContext } from './context/DataProvider';
import DetailView from './components/details/DetailView';
import Recommendations from './components/recommendation/Recommendation';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'; // import ProtectedRoute

function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}

function AppContent() {
  const { isAuthenticated } = useContext(DataContext);

  return (
    <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/city/:id' element={<DetailView />} />
          <Route path='/api/recommendations/:userId' element={
            <ProtectedRoute 
              element={<Recommendations />} 
              isAuthenticated={isAuthenticated} 
            />} 
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;