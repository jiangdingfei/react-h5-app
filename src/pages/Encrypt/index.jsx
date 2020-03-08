import React from 'react';
import { decryptPrivate, encryptPrivate } from 'utils/encrypt';
import { Input, Button } from 'antd';
import './index.scss'
const { TextArea } = Input;

export default class Encrypt extends React.Component {
  state = {
    privateKey: '',
    needHandleInfo: ''
  }
  handleInput = e => {
    console.log(e.target.name, 'value')
    const { name, value } = e.target
    this.setState({
      [name]: value
    });
  }
  handleDecrypt = () => {
    console.log('1111')
    const { privateKey, needHandleInfo } = this.state
    console.log(privateKey, 'pri');
    console.log(needHandleInfo, 'need')
    let answer = decryptPrivate(needHandleInfo, privateKey)
    this.setState({
      answer
    });
  };
  handleEncrypt = () => {
    console.log(2222)
    const { privateKey, needHandleInfo } = this.state
    console.log(privateKey, 'pri');
    console.log(needHandleInfo, 'need')
    let answer = encryptPrivate(needHandleInfo, privateKey)
    console.log(answer, '加密')
    this.setState({
      answer
    });
  }
  componentDidMount() {

  };
  render() {
    return (
      <div className="encrypt">
        <div className="title">在线RSA私钥加密解密</div>
        <div className="content">
          <div className="parameter">
            
          </div>
          <div className="private-key">
            <span className="tit">输入加密私钥（以“-----BEGIN PRIVATE KEY-----”开头 “-----END PRIVATE KEY-----” 结尾）</span>
            <TextArea rows={8} name="privateKey" onInput={this.handleInput}></TextArea>
          </div>
          <div className="text">
            <span className="tit">待加密、解密的文本</span>
            <TextArea rows={8} name="needHandleInfo" onInput={this.handleInput}></TextArea>
          </div>
          <div className="submit">
            <Button onClick={this.handleEncrypt}>加密</Button>
            <Button onClick={this.handleDecrypt}>解密</Button>
          </div>
          <div className="answer">
            <span>结果</span>
            <TextArea value={this.state.answer} rows={4}></TextArea>
          </div>
        </div>
      </div>
    );
  };
}