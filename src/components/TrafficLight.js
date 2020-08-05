import React, { Component } from 'react';
import classNames from 'classnames';
import './TrafficLight.css';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
    constructor() {
        super();
        this.state = {
            currentColor: GREEN
        };
        console.log(this.currentColor);

        setInterval(() => {
            console.log(this.currentColor);
            this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            });
        }, 1000);
    }

    getNextColor(currentColor) {
        switch (currentColor) {
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            default:
                return RED;

        }
    }

    render() {
        const { currentColor } = this.state;
        console.log('Rendering...', currentColor);
        return <div className='TrafficLight'>


            {/* <div className="bulb red" />
            <div className="bulb orange" />
            <div className="bulb green" /> */}
            <div className={classNames('bulb', 'red', {
                active: currentColor === RED
            })} />
            <div className={classNames('bulb', 'orange', {
                active: currentColor === ORANGE
            })} />
            <div className={classNames('bulb', 'green', {
                active: currentColor === GREEN
            })} />


        </div>;
    }


}

export default TrafficLight;