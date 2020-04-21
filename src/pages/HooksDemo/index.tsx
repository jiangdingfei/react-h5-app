import React, { useState, useEffect } from 'react'
import { formatSumIns } from '../../utils/index'

const LIST = ['a111', '24555', '2509', '100', '200', 'b3222', 'd2322', '1223']
const SUMINS = ['1000', '2000', '5000', '6000', '8000', '12000', '19000', '23000']
function sortList(list: string[]): string[] {
  return list.sort((a,b) => {
    let c: number
    if(a>b) {
      c = 1
    } else {
      c = -1
    }
    return c
  })
}
export default function Example() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // console.log(count)
    console.log(sortList(LIST), 'sort')
    console.log(formatSumIns(SUMINS))
  },[])
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button  onClick={() => setCount(count +1)}>Add</button>
    </div>
  )
}
