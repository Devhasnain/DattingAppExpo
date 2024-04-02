import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const StoryGradient = ({children}) => {
  return (
    <LinearGradient colors={["#FF5A90","#FF5A90", "#F1883B"]} style={{borderRadius:100, paddingHorizontal:2.2, paddingVertical:1.8, elevation:10}}>
        {children}
    </LinearGradient>
  )
}

export default StoryGradient