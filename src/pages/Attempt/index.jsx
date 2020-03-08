import React from 'react';
import { getCity } from '@/api/city';

export default class Attempt extends React.Component {
  componentDidMount() {
    console.log('Attempt')
    let params = {
      level: 1
    }
    getCity(params).then(res => {
      console.log(res,'res')
    })
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}