import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import QRCode from 'qrcode.react'
import './Home.css';

class Home extends React.Component {
  state = {
    username: '',
    user: {},
    qrCode: '',
    challengeAnswer: ''
  }
  componentDidMount() {
    Auth.currentAuthenticatedUser().then(user => this.setState({ user }))
    Auth.currentUserInfo()
      .then(data => {
        this.setState({
          username: data.username
        })
      })
      .catch(err => console.log('error: ', err))
  }
  addTTOP = () => {
    Auth.setupTOTP(this.state.user).then((code) => {
      const authCode = "otpauth://totp/AWSCognito:" + this.state.user.username + "?secret=" + code + "&issuer=AWSCognito";
      this.setState({ qrCode: authCode })
    });
  }
  setPreferredMFA = (authType) => {
    Auth.verifyTotpToken(this.state.user, this.state.challengeAnswer).then(() => {
      Auth.setPreferredMFA(this.state.user, authType)
        .then(data => console.log('data from verify...: ', data))
        .catch(err => console.log('error: ', err))
    });
  }
  render() {
    return (


      <div className="jumbotron mainPortal">
        <div className="topContent">
          <h1 className="display-6">Mozart Mechanics</h1>
          <p>Officia aliquip cupidatat aliquip Lorem fugiat nostrud ad minim non adipisicing ullamco id laborum. Culpa nisi duis tempor do esse aute veniam occaecat aute sit sint nisi dolore quis. Dolore aliquip est officia aute nisi ea nulla ex do duis nisi ut duis. </p>
          <p>Commodo anim laboris ullamco culpa nisi in voluptate. Enim nisi incididunt quis do sunt in id excepteur Lorem ullamco ullamco. Excepteur do consequat qui elit elit eiusmod veniam consectetur veniam id.
          </p>
        </div>
        <div class="mainContent">

          <ul class="set" id="keyboardLayout">
            <li class="white b"></li>
            <li class="black as"></li>
            <li class="white a"></li>
            <li class="black gs"></li>
            <li class="white g"></li>
            <li class="black fs"></li>
            <li class="white f"></li>
            <li class="white e"></li>
            <li class="black ds"></li>
            <li class="white d"></li>
            <li class="black cs"></li>
            <li class="white c"></li>
          </ul>

        </div>


      </div>
    )
  }
}

class Route1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Route 1</h1>
        <p onClick={() => {
          Auth.signOut()
            .then(() => {
              this.props.history.push('/auth')
            })
            .catch(() => console.log('error signing out...'))
        }}>Sign Out</p>
      </div>
    )
  }
}

Home = withRouter(Home)
Route1 = withRouter(Route1)

export {
  Home,
  Route1
}