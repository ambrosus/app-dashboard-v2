import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { AccountsService, getAccount } from '../../services/accounts.service';
import loginLogoImg from '../../assets/raster/login-logo.png';
import { storageClear, storageSet } from '../../services/storage.service';
import { getToken, privateKeyToAccount } from '../../services/auth.service';
import { messageServiceError } from '../../services/message.service';

const Login = observer(() => {
  const [privateKey, setPrivateKey] = useState('');
  // const [isAccount, setIsAccount] = useState(null);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState(null);
  // const login = () => {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       await authService.login(email, password);
  //       messageService.dismissAll();
  //       resolve();
  //     } catch (error) {
  //       console.error('[LOGIN] Error: ', error);
  //       messageService.error(error, 'Email or password are incorrect', true);
  //       reject();
  //     }
  //   });
  // };
  const getAccountHandler = async (e) => {
    e.preventDefault();
    try {
      const address = privateKeyToAccount(privateKey);
      storageSet('secret', privateKey);
      storageSet('token', getToken());

      const account = await getAccount(address);
      if (account) {
        storageSet('secret', privateKey);
        storageSet('account', account);
        AccountsService(account);
      }
    } catch (error) {
      storageClear();
      messageServiceError(error, 'Private key is incorrect');
    }
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
        onSubmit={(e) => getAccountHandler(e)}
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
