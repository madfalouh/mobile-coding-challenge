import React, { Component } from 'react'
import RepoElement from './Components/RepoElement'
import axios from 'axios'
import moment from 'moment'
import { StyleSheet, Text, ScrollView, FlatList, View } from "react-native"



class App extends Component {
  constructor() {
    super()
    this.state = {
      repo: [],
      error: '',
      page: 1,
      

    }
  }



  componentDidMount() {
    this.loadRepo()
  }



  loadRepo = async () => {
    const { page, repo } = this.state

    const DATE_30_DAYS_BEFORE = moment().subtract(30, 'days').format('YYYY-MM-DD')
     
    // Getting the data from Github API
   
setTimeout(() =>{ 

  axios.get(
    ` https://api.github.com/search/repositories?q=created:>${DATE_30_DAYS_BEFORE}&sort=stars&order=desc&page=${page} `
  )

    .then(resp => {

      this.setState({
        // repo: resp.data.items,
        repo: [...repo, ...resp.data.items], // here when scrolling, Repo get updated instantly
        

      })

    })

    .catch((error) => {
      this.setState({
        error: error,

      })
    })

} , 1500)

  
  }



  loadData = () => {
    const { page } = this.state
     this.setState({
       page : this.state.page+1
     }   ,()=> {

      this.loadRepo()
     }
     
     )
   
    


  }



  render() {
    const { repo } = this.state



  



    return (
      <View>



        <FlatList



          onEndReached={this.loadData}
          data={repo}
          renderItem={({ item, index }) => (  <RepoElement repo={item}></RepoElement> )}
          key={repo.id}
          onEndReachedThreshold={10}
          keyExtractor={item => item.id}
           


        />

      </View>





    )
  }
}

export default App
