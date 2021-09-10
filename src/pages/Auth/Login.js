/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';
import messageService from '../../services/message.service';
import storageService from '../../services/storage.service';
import accountsService from '../../services/accounts.service';
import Web3 from 'web3';
import loginLogoImg from '../../assets/raster/login-logo.png';
import authService from '../../services/auth.service';

const Login = observer(() => {
  const [isAccount, setIsAccount] = useState(null);
  const [privateKey, setPrivateKey] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);
  const web3 = new Web3();
  const history = useHistory();
  const login = () => {
    return new Promise(async (resolve, reject) => {
      try {
        await authService.login(email, password);
        messageService.dismissAll();
        resolve();
      } catch (error) {
        console.error('[LOGIN] Error: ', error);
        messageService.error(error, 'Email or password are incorrect', true);
        reject();
      }
    });
  };
  const getAccount = (e) => {
    e.preventDefault();
    return new Promise(async (resolve, reject) => {
      try {
        const address = authService.privateKeyToAccount(privateKey);
        console.log('address', address);
        storageService.set('secret', privateKey);
        storageService.set('token', authService.getToken());

        const account = await accountsService.getAccount(address);
        if (account) {
          console.log('account', account);
          storageService.set('secret', privateKey);
          storageService.set('account', account);
          accountsService._account.next(account);
          authService.signupAddress = '';
          messageService.dismissAll();
          resolve();
        }
      } catch (error) {
        console.error('[GET] Account: ', error);
        storageService.clear();
        messageService.error(error, 'Private key is incorrect');
        reject();
      }
    });
  };
  const inputHandler = (type, value) => {
    if (type === 'privateKey') {
      setPrivateKey(value);
    }
  };

  return (
    <div className="login-page">
      <a className="logo" href="/login">
        <img src={loginLogoImg} alt="Ambrosus" />
      </a>
      <h1 className="center" style={{ margin: '65px 0 25px' }}>
        Choose your log-in method
      </h1>

      <form
        className="form"
        style={{ maxWidth: 624 }}
        onSubmit={(e) => getAccount(e)}
      >
        <label>
          <h1>Your private key</h1>
          <span className="info">
            <h2 className="message">
              For maximum security, your private key will <b>never</b> leave
              your browser.
            </h2>
          </span>
          <input
            value={privateKey}
            onChange={(e) => {
              inputHandler('privateKey', e.target.value);
            }}
            type="text"
          />
        </label>
        <div style={{ justifyContent: 'center', marginTop: 45 }}>
          <button type="submit">Log in</button>
        </div>
      </form>
      <form className="form" style={{ maxWidth: 410 }}>
        <label>
          <h3>Your email</h3>
          <input type="email" name="new-email" />
        </label>
        <label>
          <h3>Your password</h3>
          <input name="new_password" />
        </label>
        <div style={{ justifyContent: 'center', marginTop: 45 }}>
          <button type="submit">Log in</button>
        </div>
      </form>

      <div className="center" style={{ margin: '50px 0 30px' }}>
        <a href="/signup">Register an account</a>
      </div>
    </div>
  );
});
export default Login;
