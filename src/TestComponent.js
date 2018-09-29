import React from 'react';
import axios from 'axios';

class TestComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: false,
            color: "#000000"
          };
        
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        
        axios.get(`http://www.colr.org/json/color/random`)
        .then(res => {
            this.setState(state => ({
                rndColor1: '#' + res.data.colors[0].hex
            }));
        });

        axios.get(`http://www.colr.org/json/color/random`)
        .then(res => {
            this.setState(state => ({
                rndColor2: '#' + res.data.colors[0].hex
             }));
        });    
    }

    handleClick() {
        var newColor = (this.state.isToggleOn ? '#000000' :
            (Math.random() >= 0.5 ? this.state.rndColor1 : this.state.rndColor2));

        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
            color: newColor
        }));
    }

    render() {
      return <h1 onClick={this.handleClick} style={{background: this.state.color}}>Click me!</h1>;
    }
}

  export default TestComponent;