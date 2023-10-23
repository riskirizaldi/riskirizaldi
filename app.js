import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

let database = [
    {awal : 'Mobil'},
    {awal : 'Motor'},
    {awal : 'Lokasi'},

]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            data : database
         };
    }
    render() {
        return (
           <View style = {{flex : 1}}>
           <View style = {{padding: 20, backgroundColor: '#84ffff' }}>
           <Text style = {{textAlign: 'center', color: '#263238', fontWeight: 'bold', fontSize: 50}}> JAUHARI  SHOWROOM </Text>

           </View>

           <FlatList
           data = {this.state.data}
           renderItem={({ item }) =>
           <View style = {{borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30}}>
               <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>{item.awal}</Text>
         </View>
           }
           keyExtractor={item => item.awal}
           />
          
           </View>
        )
    }
}

export default App