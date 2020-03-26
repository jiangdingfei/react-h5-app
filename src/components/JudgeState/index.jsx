import React from 'react'

export default class JudgeState extends React.PureComponent {
  state = {
    isShowChildren: false
  }
  render() {
    const { isShowChildren } = this.state
    return (
      isShowChildren ? this.props.children : null
    )
  }
}