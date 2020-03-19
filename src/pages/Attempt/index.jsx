import React from 'react';
import { getCity } from '@/api/city';
import { Input } from 'antd'
import tsDemo from 'utils/demo/demo'
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
    console.log(tsDemo.aa, 'aa')
    console.log(tsDemo.reverse(12345))
    // let newAddr = this.handleAddress(this.state.address)

    // console.log(newAddr, 'newAddr')
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
      <div>
        <Input onChange={this.handleChange.bind(this)}></Input>
      </div>
    )
  }
}