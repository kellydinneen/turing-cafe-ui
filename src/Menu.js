import React, { Component } from 'react';
import { fetchMenu } from './apiCalls';
import './Menu.css';

class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      drinks: [],
      food: [],
      isLoading: true,
      errorMsg: null
    }
  }

  componentDidMount() {
      fetchMenu('drinks')
          .then(result =>{
            if (typeof(result) !== 'object') {
              this.setState({
                isLoading: false,
                errorMsg: result
              })
            } else {
              console.log(result);
              this.setState({
                  drinks: result,
                  isLoading: false
                })
            }})
            fetchMenu('food')
                .then(result =>{
                  if (typeof(result) !== 'object') {
                    this.setState({
                      isLoading: false,
                      errorMsg: result
                    })
                  } else {
                    console.log(result);
                    this.setState({
                        food: result,
                        isLoading: false
                      })
                  }})
    }

  render() {
    const drinks = this.state.drinks.map(drink => {
      return (
        <p>{drink.name}, ${drink.price}</p>
      )
    })

    const food = this.state.food.map(foodItem => {
      return (
        <p>{foodItem.name}, ${foodItem.price}</p>
      )
    })

    return (
      <div className="menu">
        <h2>Turing Cafe Menu</h2>
        <h3>Drinks</h3>
          {drinks}
        <h3>Food</h3>
          {food}
      </div>
    )
  }


}

export default Menu;
