import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import HeroCarousel from './components/HeroCarousel';
import Footer from './components/Footer';
import ClassPage from './pages/ClassPage';
import InstructorPage from './pages/InstructorPage';
import StudentPage from './pages/StudentPage';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
  <ApolloProvider  client ={client}>
   <Router>
        <AppNavbar/>
        <HeroCarousel/>
        <Routes>
          <Route 
            path='/' 
            element={<ClassPage/>} 
          />
          <Route 
            path='/instructor' 
            element={<InstructorPage/>} 
          />
            <Route 
            path='/student' 
            element={<StudentPage />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
        <Footer/>
    </Router>
    </ApolloProvider>
  );
}

export default App;