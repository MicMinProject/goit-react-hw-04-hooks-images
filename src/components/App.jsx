import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Searchbar from './Searchbar.jsx';
import ImageGallery from './ImageGallery.jsx';
import ImageGalleryItem from './ImageGalleryItem.jsx';
import Button from './Button.jsx';
import Modal from './Modal.jsx';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from 'axios';

const API_KEY = '25107796-9974ea960b32f02e8ca5a894d';
const perPage = 12;

export class App extends React.Component {
  
  state={
    value: '',
    page: 1,
    data: [null],
    current: 'idle',
    currentLoad: 'idle',
    image: '',
  }

  apiState = {
    idle: () => {this.setState({current: 'idle'})},
    pending: () => {this.setState({current: 'pending'})},
    success: () => {this.setState({current: 'success'})},
    errors: () => {this.setState({current: 'error'})},
    loadIdle: () => {this.setState({currentLoad: 'idle'})},
    loadPending: () => {this.setState({currentLoad: 'pending'})},
    loadSuccess: () => {this.setState({currentLoad: 'success'})},
    loadError: () => {this.setState({currentLoad: 'error'})},
  }

  handlerSubmit = (e) =>{
    e.preventDefault();
    const {pending, success, errors} = this.apiState;
    pending()
    axios.get(`https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
      .then(response => {this.setState({data: response.data.hits,
        totalHits: response.data.totalHits});
        success()})
      .catch(error => {
        errors();
      }


  handlerChange = (e) =>{
    e.preventDefault();
    this.setState((state) => ({value: e.target.value}))
  }

  handlerClick = async (e) =>{
    const {loadPending, loadSuccess, loadError} = this.apiState;
    loadPending();
    await this.setState({page: this.state.page +1})
    axios.get(`https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
      .then(response => {this.setState({data: [...this.state.data, ...response.data.hits]});
        loadSuccess();})
      .catch(error => {
        loadError()})
  }

  handlerImage = (e) =>{
    const item = this.state.data.find(record => record.id === Number(e.target.id))
    this.setState({image: item.largeImageURL})
    
  }

  handlerEscape = (e) =>{
    this.setState({image: ''})
  }

  render() {
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
        <Searchbar onSubmit={this.handlerSubmit} value={this.state.value} onChange={this.handlerChange}/>
        {this.state.image !== '' ? (<Modal image={this.state.image} onClick={this.handlerEscape} onKeyPress={this.handlerEscape}/>) : ''}
        <ImageGallery data={this.state.data} currentState={this.state.current} currentLoadState={this.state.currentLoad}>
          <ImageGalleryItem data={this.state.data} currentState={this.state.current} onClick={this.handlerImage}/>
        </ImageGallery>
        {this.state.totalHits > this.state.page*perPage ? <Button data={this.state.data} onClick={this.handlerClick}/> : ""}
      </ErrorBoundary>
    </div>
    )
  };
};
