import React from 'react'
import PropTypes from 'prop-types'
import IMG1 from '../../../assets/btc.png'


const ai = props => {

    const projects =[
        {name: "Bitcoin price prediction",
         description: "A bitcoin price predictor which predicts the future bitcoin price using historical data. Due to the volaticity nature of the bitcoin price I decided to make an artficial intelligence model using Recurrent neural networks and te model arrchieved 76% accuracy",
         images: IMG1,
         technologies:"python language, pyQt framework"
         },
         
        {name: "Zebra cross recognition system",
        description: "A bitcoin price predictor which predicts the future bitcoin price using historical data. Due to the volaticity nature of the bitcoin price I decided to make an artficial intelligence model using Recurrent neural networks and te model arrchieved 76% accuracy",
        images:"",
        technologies:"python language, pyQt framework"}
    ]
  return (
    <div>
  
    </div>
  )
}

ai.propTypes = {}

export default ai