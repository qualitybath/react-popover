import F from "ramda"
import React from "react"
import Popover from "../../source"
import "../base.css"
import "./main.css"

class Row extends React.Component {
  state = {
    isOpen: false,
  }
  toggle(toState = null) {
    this.setState({ isOpen: toState === null ? !this.state.isOpen : toState })
  }
  render() {
    const { isOpen } = this.state
    return (
      <Popover
        window={this.props.window}
        isOpen={isOpen}
        body={this.props.children}
        children={
          <div
            className="Row"
            onMouseOver={() => this.toggle(true)}
            onMouseOut={() => this.toggle(false)}
            children={this.props.children}
          />
        }
      />
    )
  }
}

const Main = ({ window }) => (
  <div
    id="app"
    children={F.range(0, 51).map(i => (
      <Row window={window} key={i} children={i} />
    ))}
  />
)

export default Main
