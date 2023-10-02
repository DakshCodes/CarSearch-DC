// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, setCurrentPage } from './actions';
import CarCard from './components/CarCard';
import Pagination from './components/Pagination';

const ShowCardInPage = 6;

const App = ({ searchTerm, currentPage, setSearchTerm, setCurrentPage }) => {

  const carsData = [
    { id: 1, name: 'Mc Laren 570S MSO', price: '$420.00/month', rating: '4.60', country: 'USA', imgurl: "https://images.unsplash.com/photo-1624976173209-55c50c12a943?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" },
    { id: 2, name: 'Porsche 911 Carrera S (992)', price: '$420.00/month', rating: '4.60', country: 'USA', imgurl: "https://images.unsplash.com/photo-1589517751737-1c2874611784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" },
    { id: 3, name: 'Mercedes Benz AMG GT R', price: '$420.00/month', rating: '4.60', country: 'USA', imgurl: "https://images.unsplash.com/photo-1593145766452-41ef7be15fb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" },
    { id: 4, name: 'Ferrari 570S MSO', price: '$420.00/month', rating: '4.60', country: 'USA', imgurl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
    { id: 5, name: 'Honda', price: '$420.00/month', rating: '4.60', country: 'USA', imgurl: "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
    { id: 6, name: 'Sezuki', price: '$420.00/month', rating: '4.60', country: 'USA', imgurl: "https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" },
    { id: 7, name: 'Lambo', price: '$420.00/month', rating: '4.60', country: 'USA', imgurl: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80" },
    { id: 8, name: 'Swift', price: '$420.00/month', rating: '4.60', country: 'USA', imgurl: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1921&q=80" },
    { id: 9, name: 'Glariyas', price: '$420.00/month', rating: '4.60', country: 'USA', imgurl: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
    { id: 10, name: 'Mc Laren 570S MSO', price: '$420.00/month', rating: '4.60', country: 'USA', imgurl: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
    // Add more cars as needed
  ];

  // According  to Search This Function Gives Results
  const filteredCars = carsData.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // console.log(filteredCars);
  const indexOfLastCar = currentPage * ShowCardInPage;
  const indexOfFirstCar = indexOfLastCar - ShowCardInPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  // console.log(currentCars);

  const handlePageChange = page => setCurrentPage(page);

  return (
    <div>
      <nav class="flex justify-between text-[#fff] px-20 py-10 items-center bg-[#212121] ">
        <h1 class="text-xl text-purple-500 font-bold cursor-pointer">PureCar.</h1>
        <div class="flex items-center">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-[#fff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input class="ml-2 outline-none bg-transparent font-"
              type="text"
              placeholder="Search cars..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <ul class="flex items-center space-x-6">
            <li class="font-semibold text-[#fff] cursor-pointer">Models</li>
            <li class="font-semibold text-[#fff] cursor-pointer">Reviws</li>
            <li class="font-semibold text-[#fff] cursor-pointer">Contact</li>
            <li className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
      <div className="car-list">
        {currentCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
        {/* <CarCard /> */}
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={ShowCardInPage}
        totalItems={filteredCars.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  currentPage: state.currentPage,
});

const mapDispatchToProps = dispatch => ({
  setSearchTerm: term => dispatch({ type: 'SET_SEARCH_TERM', payload: term }),
  setCurrentPage: page => dispatch({ type: 'SET_CURRENT_PAGE', payload: page }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
