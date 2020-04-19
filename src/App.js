import React from 'react';
import './App.css';
import GlitchClip from 'react-glitch-effect/core/Clip'
import dayjs from 'dayjs'

dayjs.locale('ja')

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      ymd : dayjs().format('YYYY / MM / DD'),
      hms : dayjs().format('HH:mm:ss')
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      ()=>this.tick(),
      100
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      ymd : dayjs().format('YYYY / MM / DD (ddd)'),
      hms : dayjs().format('HH:mm:ss')
    })
  }

  render() {
    return (
    <div>
      <p>{this.state.ymd}</p>
      <p>{this.state.hms}</p>
    </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <GlitchClip>
        <Clock />
        </GlitchClip>
      </header>
    </div>
  );
}

export default App;
