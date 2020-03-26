import React from 'react';
import { getCity } from '@/api/city';
import { Input } from 'antd'
import { cloneForce, deepCopy } from 'utils'
import JudgeState from 'components/JudgeState'
import tsDemo from 'utils/demo/demo'
let DATA = [
  {
    aa: 123,
    bb: {
      cc: 234,
      dd: ['123', '456', 333]
    }
  },
  567,
  [123, 777]
]
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
      // console.log(res,'res')
    })
  }
  init() {
    // console.log(tsDemo.aa, 'aa')
    // console.log(tsDemo.reverse(12345))
    console.log(DATA)
    // console.log('DATA',cloneForce(DATA))
    console.log('copy',deepCopy(DATA))
    DATA[0].bb.dd.push(7777)
  }
  // 处理传入的域名地址(老王)
  // handleAddress(addr) {
  //   if (addr.startsWith('http://mmbiz.qpic.cn/')) {
  //     return 'http://saas.yuemia.com/site/' + addr.slice(21)
  //   }
  //   return addr
  // }
  handleChange(e) {
    console.log(e.target.value)
    // this.setState({
    //   address: e.target.value
    // })
    // let newAddr = this.handleAddress(e.target.value)

    // console.log(newAddr, 'newAddr')
  }
  render() {
    return (
        <JudgeState>
          <Input onChange={this.handleChange.bind(this)}></Input>
        </JudgeState>
    )
  }
}