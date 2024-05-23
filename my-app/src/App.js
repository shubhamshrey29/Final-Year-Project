import React, { useContext } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider, { DataContext } from './context/DataProvider';
import DetailView from './components/details/DetailView';
import Recommendations from './components/recommendation/Recommendation';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Aurangabad from './components/home/cities/Aurangabad';
import Mumbai from './components/home/cities/Mumbai';
import Nagpur from './components/home/cities/Nagpur';
import Nashik from './components/home/cities/Nashik';
import Pune from './components/home/cities/Pune';
import All from './components/home/cities/All';

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
          <Route path='/city/Aurangabad' element={<Aurangabad />} />
          <Route path='/city/Mumbai' element={<Mumbai />} />
          <Route path='/city/Nagpur' element={<Nagpur />} />
          <Route path='/city/Nashik' element={<Nashik />} />
          <Route path='/city/Pune' element={<Pune />} />
          <Route path='/cities' element={<All />} />
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