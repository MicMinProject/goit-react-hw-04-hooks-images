import React, {useState, useEffect} from 'react';
import ErrorBoundary from './ErrorBoundary';
import Searchbar from './Searchbar.jsx';
import ImageGallery from './ImageGallery.jsx';
import ImageGalleryItem from './ImageGalleryItem.jsx';
import Button from './Button.jsx';
import Modal from './Modal.jsx';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import axios from 'axios';

const API_KEY = '25107796-9974ea960b32f02e8ca5a894d';
const perPage = 12;

function App() {

  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([null]);
  const [current, setCurrent] = useState('idle');
  const [currentLoad, setCurrentLoad] = useState('idle');
  const [image, setImage] = useState('');
  const [totalHits, setTotalHits] = useState('');

  const apiState = {
    idle: () => setCurrent('idle'),
    pending: () => setCurrent('pending'),
    success: () => setCurrent('success'),
    errors: () => setCurrent('error'),
    loadIdle: () => setCurrentLoad('idle'),
    loadPending: () => setCurrentLoad('pending'),
    loadSuccess: () => setCurrentLoad('success'),
    loadError: () => setCurrentLoad('error'),
  }

  const handlerSubmit = (e) =>{
    e.preventDefault();
    const {pending, success, errors} = apiState;
    pending();
    axios.get(`https://pixabay.com/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
      .then(response => {setData(response.data.hits);
        setTotalHits(response.data.totalHits);
        success()})
      .catch(error => {
        errors();
      });
  }

  const handlerChange = (e) =>{
    setValue(e.target.value);
  }
  
  const handlerImage = (e) =>{
    const item = data.find(record => record.id === Number(e.target.id));
    setImage(item.largeImageURL)
  }
  
  const handlerEscape = (e) =>{
    setImage('')
  }

  const handlerClick =  (e) =>{
    const {loadPending} = apiState;
    loadPending();
    setPage(page + 1);
  }
  
  useEffect(() => {
    const {loadSuccess, loadError} = apiState;
    axios.get(`https://pixabay.com/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
      .then(response => {setData([...data, ...response.data.hits]);
        loadSuccess();})
      .catch(error => {
        loadError()});
  },[page])

    return(
    <div
      css={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '40px',
        color: '#010101',
      }}
    >
      <ErrorBoundary>
        <Searchbar onSubmit={handlerSubmit} value={value} onChange={handlerChange}/>
        <Modal image={image} onClick={handlerEscape} onKeyPress={handlerEscape}/>
        <ImageGallery data={data} currentState={current} currentLoadState={currentLoad}>
          <ImageGalleryItem data={data} currentState={current} onClick={handlerImage}/>
        </ImageGallery>
        {totalHits > page*perPage ? <Button data={data} onClick={handlerClick}/> : ""}
      </ErrorBoundary>
    </div>
    )
  
};

export {App};
