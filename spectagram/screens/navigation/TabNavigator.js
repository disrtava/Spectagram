import React from 'react'
import {createBottomNavigator} from 'react-navigation/bottom-tabs'
import Feed from '../Feed'
import Profile from '../Profile'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = ()=>{


  return(
    
      <Tab.Navigator
      screenOptions = {({route}) => ({
        tabBarIcon : ({focused,color,size}) =>{
          let iconName
          if (route.name === 'Feed'){
            iconName = focused
            ? 'book'
            : 'book-outline'

          }else if(route.name === 'createPost'){
            iconName = focused ? 'create': 'create-outline'

          }
          return <Ionicons size = {size} name = {iconName} color={ color}/>

        }
      })
    }
    activColor = {"tomato"}
    InactiveColor = {"gray"}>
      <Tab.Screen name = 'Feed' component = {Feed}/>
      <Tab.Screen name = 'createStory' component = {createScreen}/>
      

      </Tab.Navigator>
    
  )
}

export default BottomTabNavigator