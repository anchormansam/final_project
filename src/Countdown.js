import React, { Component } from "react";


class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeView: null,
    }
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      timeView: this.getTimeRemaining()
    });
  }

  getTimeRemaining() {
    var endtime = this.props.endDate;
    var total = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((total / 1000) % 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    var minutes = Math.floor((total / 1000 / 60) % 60);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    if (hours < 10) {
      hours = "0" + hours;
    }
    var days = Math.floor(total / (1000 * 60 * 60 * 24));
    if (days < 10) {
      days = "0" + days;
    }
    return {
      't': total,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  render() {
      if (!this.state.timeView){
        return null
      }
      if(this.state.timeView.t <= 0){
        return <p>Happy Birthday!</p>
      }
    var { days, hours, minutes, seconds } = this.state.timeView;
    var timeString = `${days}Days ${hours}Hours : ${minutes}Min : ${seconds}Sec`
    return (<p>{timeString}</p>)
  }
}


export default Countdown;