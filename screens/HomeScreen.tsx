import React from 'react'
import {StyleSheet, View, ActivityIndicator, SafeAreaView} from 'react-native'
import Constants from 'expo-constants';

import {FetchData} from '../utils';
import {Searchbar, ButtonGroup, NotFound, ItemList, SwipeList} from '../components'
import {search} from '../mockData.js'
import { addMovieToFavorites } from './favorites/favoritesSlice';
import { useDispatch } from 'react-redux';

const movieURL = Constants.manifest.extra.MOVIE_URL
const apikey = Constants.manifest.extra.APIKEY

const types = ['all', 'movie', 'series', 'episode']


const SwipeDeleteMovie = (props) => {
  const dispatch = useDispatch()

  const actionButton = [{
    title: 'Save',
    event: (item) => dispatch(addMovieToFavorites(item)),
  }]

  return (
    <SwipeList data={props.data} 
    handlePress={props.handlePress} 
    actionButton={actionButton}
    />  
  )
}



class HomeScreen extends React.Component {

  constructor(props: object){
    super(props)
    this.state = {
      data: [],
      isLoading: true, 
      movieNotFound: false,
      title: 'alien',
      type: 'all',
      year: 'all',
    }
  }

 
  getMovieDetail = (item: object) => {
    this.props.navigation.push('Detail', {item})
  }

  getMovies = async (title: string, type: string, year: string) => {
    type = type === 'all' ? '' : `&type=${type}`
    year = year === 'all' ? '' : `&y=${year}`

    const url = `${movieURL}/?apikey=${apikey}&s=${title}${type}${year}`
    console.log(url)

    try{
      const res = await FetchData(url)
      // const res = search

      if(res.Response === 'False'){
        this.setState({movieNotFound: true})
        return 
      }
        
      this.setState({data: res.Search, movieNotFound: false})

    } catch(error){
      console.error(error)
    } finally {
      this.setState({isLoading: false})
    }

  }


  onSearch = (text) => {
    this.setState({title: text})
    this.getMovies(text, this.state.type, this.state.year)
  }
  handleButtonGroup = (type) => {
    this.setState({type})
    this.getMovies(this.state.title, type, this.state.year)
  }

  componentDidMount(){
    this.getMovies(this.state.title, this.state.type, this.state.year)
  } 

  // actionButton = [{
  //   title: 'Save',
  //   event: (item) => dispatch(addMovieToFavorites(item)),
  // }]


  render(){
    return (
      <SafeAreaView>
        <View>
          <ButtonGroup 
            data={types}
            handleButtonGroup={this.handleButtonGroup}
            color={'#000'}
          />
          <Searchbar searchValue={this.state.title} onSearch={this.onSearch}/> 
        </View>  
        <View style={{margin: 5}}>     
        {this.state.isLoading ? <ActivityIndicator /> : (this.state.movieNotFound ? <NotFound title={''}/>: (
        <SwipeDeleteMovie data={this.state.data} handlePress={(item) => this.props.navigation.navigate('Detail', {item})}/>
        )) }
        </View>
       
      </SafeAreaView>
    )
  }

}
export default HomeScreen
