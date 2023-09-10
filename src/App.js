
import logo from './logo.svg';
import './App.css';
import record from './Data';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let filteredByCategory = selectedCategory === 'All' ? record : record.filter(item => item.category === selectedCategory);

    let filteredBySearch = filteredByCategory.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredData(filteredBySearch);
  }, [selectedCategory, search]);
  return (
    <>

      <body>
        <h1 className='text-center text-white py-5 mb-5 border-bottom'>Welcome to My E-library</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-3 d-flex flex-column'>
              <button className='py-3 w-75 btn-secondary btn  my-3 text-black ' onClick={() => setSelectedCategory('All')} >All</button>
              <button className='py-3 w-75 btn-secondary btn  my-3 text-black ' onClick={() => setSelectedCategory('Adventure')}>Adventure</button>
              <button className='py-3 w-75 btn-secondary btn   my-3 text-black ' onClick={() => setSelectedCategory('Comic Book')}>Comic Book</button>
              <button className='py-3 w-75 btn-secondary btn   my-3 text-black ' onClick={() => setSelectedCategory('Detective Book')}>Detective Book</button>
              <button className='py-3 w-75 btn-secondary btn  my-3 text-black ' onClick={() => setSelectedCategory('Fantasy Book')}>Fantasy Book</button>
              <button className='py-3 w-75 btn-secondary btn   my-3 text-black ' onClick={() => setSelectedCategory('Historical Fiction')}>Historical Fiction</button>
              <button className='py-3 w-75 btn-secondary btn   my-3 text-black ' onClick={() => setSelectedCategory('Suspense and Thrillers')}>Suspense and Thrillers</button>
              <button className='py-3 w-75 btn-secondary btn   my-3 text-black ' onClick={() => setSelectedCategory('Short Stories')}>Short Stories</button>
              <button className='py-3 w-75 btn-secondary btn   my-3 text-black ' onClick={() => setSelectedCategory('Horror book')}>Horror book</button>
              <button className='py-3 w-75 btn-secondary btn  my-3 text-black ' onClick={() => setSelectedCategory('Science Fiction book')}> Science Fiction book</button>
            </div>
            <div className='col-9 overflow-hidden'>
              <table className='d-flex justify-content-center '>
                <tr className='w-75 mt-3 mb-4 bg-light btn  d-flex justify-content-center text-secondary'>
                  <td className='text-center'><input type="text" className='text-center btn py-2 px-5 fs-4 fw-bold' onChange={(e) => setSearch(e.target.value)} placeholder="Search Your Book" /></td>
                </tr>
              </table>
          
              <div className='row '>
                {filteredData.map((item, index) => (
                  <div key={index} className='col-4'>
                    <div className='book-card my-3'>
                      <img src={item.image} alt={item.name} />
                      <h4 className='text-center my-2 p-3'>{item.name}</h4>
                      <h5 className='text-center py-3 '>{item.category}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div >






      </body >

    </>
  );
}


export default App;
