import React from 'react';
import { getCity } from '@/api/city';
import { Input } from 'antd'
import { compose } from 'utils'
import JudgeState from 'components/JudgeState'
// let DATA = [
//   {
//     aa: 123,
//     bb: {
//       cc: 234,
//       dd: ['123', '456', 333]
//     }
//   },
//   567,
//   [123, 777]
// ]
export default class Attempt extends React.Component {
  state = {
    address: ''
  }


  componentDidMount() {
    this.init()
    console.log('Attempt')
    let params = {
      level: 1
    }
    getCity(params).then(res => {
      console.log(res,'res')
    })
  }
  init() {
    console.log(compose(this.c, this.b, this.a, 3), 'compose')
  }
  a(num) {
    return num
  }
  b(sum) {
    return sum + 5
  }
  c(sum) {
    return sum + 3
  }
  handleChange(e) {
    console.log(e.target.value)
  }
  render() {
    return (
        <JudgeState>
          <Input onChange={this.handleChange.bind(this)}></Input>
        </JudgeState>
    )
  }
}