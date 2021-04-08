const IMAGES = {
  ETHEREUM_ICON:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjQxN3B4IiB2aWV3Qm94PSIwIDAgMjU2IDQxNyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+Cgk8Zz4KCQk8cG9seWdvbiBmaWxsPSIjMzQzNDM0IiBwb2ludHM9IjEyNy45NjExIDAgMTI1LjE2NjEgOS41IDEyNS4xNjYxIDI4NS4xNjggMTI3Ljk2MTEgMjg3Ljk1OCAyNTUuOTIzMSAyMTIuMzIiLz4KCQk8cG9seWdvbiBmaWxsPSIjOEM4QzhDIiBwb2ludHM9IjEyNy45NjIgMCAwIDIxMi4zMiAxMjcuOTYyIDI4Ny45NTkgMTI3Ljk2MiAxNTQuMTU4Ii8+CgkJPHBvbHlnb24gZmlsbD0iIzNDM0MzQiIgcG9pbnRzPSIxMjcuOTYxMSAzMTIuMTg2NiAxMjYuMzg2MSAzMTQuMTA2NiAxMjYuMzg2MSA0MTIuMzA1NiAxMjcuOTYxMSA0MTYuOTA2NiAyNTUuOTk5MSAyMzYuNTg2NiIvPgoJCTxwb2x5Z29uIGZpbGw9IiM4QzhDOEMiIHBvaW50cz0iMTI3Ljk2MiA0MTYuOTA1MiAxMjcuOTYyIDMxMi4xODUyIDAgMjM2LjU4NTIiLz4KCQk8cG9seWdvbiBmaWxsPSIjMTQxNDE0IiBwb2ludHM9IjEyNy45NjExIDI4Ny45NTc3IDI1NS45MjExIDIxMi4zMjA3IDEyNy45NjExIDE1NC4xNTg3Ii8+CgkJPHBvbHlnb24gZmlsbD0iIzM5MzkzOSIgcG9pbnRzPSIwLjAwMDkgMjEyLjMyMDggMTI3Ljk2MDkgMjg3Ljk1NzggMTI3Ljk2MDkgMTU0LjE1ODgiLz4KCTwvZz4KPC9zdmc+',
  LOADING_ICON:
    'data:image/gif;base64,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',
  SUCCESS_ICON:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQyNi42NjcgNDI2LjY2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDI2LjY2NyA0MjYuNjY3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojNkFDMjU5OyIgZD0iTTIxMy4zMzMsMEM5NS41MTgsMCwwLDk1LjUxNCwwLDIxMy4zMzNzOTUuNTE4LDIxMy4zMzMsMjEzLjMzMywyMTMuMzMzDQoJYzExNy44MjgsMCwyMTMuMzMzLTk1LjUxNCwyMTMuMzMzLTIxMy4zMzNTMzMxLjE1NywwLDIxMy4zMzMsMHogTTE3NC4xOTksMzIyLjkxOGwtOTMuOTM1LTkzLjkzMWwzMS4zMDktMzEuMzA5bDYyLjYyNiw2Mi42MjINCglsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
};

class EthCommerce {
  constructor(config) {
    this.config = {
      MIN_CONFIRMATIONS: 3,
      INTERVAL: 3,
      GAS_BOOST: 25,
      HANDLE_UI: true,
      ...config,
    };
  }

  getImage(name) {
    return IMAGES[name];
  }

  render(options, errorCallback, successCallback) {
    const { targetElementId } = options;

    const targetElement = document.getElementById(options.targetElementId);

    if (!targetElement) {
      console.error('Target element id is not defined');
      return;
    }

    this.targetElement = targetElement;
    this.options = options;
    this.errorCallback = errorCallback;
    this.successCallback = successCallback;

    window.addEventListener('load', () => {
      if (typeof web3 !== 'undefined') return this.renderButton();
      if (this.config.HANDLE_UI) this.renderNoWeb3();
      this.errorCallback({ error: 'no web3 detected' });
    });
  }

  renderNoWeb3() {
    this.renderStyles();

    const downloadBtn = document.createElement('a');
    downloadBtn.href = 'https://metamask.io/download.html';
    downloadBtn.classList.add('eth-btn');

    const btnText = document.createElement('span');
    btnText.id = 'eth-btn-text';
    btnText.textContent = 'Install metamask';

    downloadBtn.append(btnText);

    this.targetElement.appendChild(downloadBtn);
  }

  async getEtherPriceIn(currency) {
    const priceUrl = `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=${currency}&sign=true`;
    const response = await fetch(priceUrl, { method: 'POST' });
    const data = await response.json();
    return data[currency];
  }

  renderButton() {
    this.renderStyles();

    const { amount, address, currency } = this.options;

    const payBtn = document.createElement('a');
    payBtn.classList.add('eth-btn');

    if (this.config.HANDLE_UI) {
      const iconWrapper = document.createElement('span');
      iconWrapper.classList.add('eth-icon-wrapper');

      const icon = document.createElement('img');
      icon.src = this.getImage('ETHEREUM_ICON');
      icon.id = 'eth-icon-svg';
      iconWrapper.appendChild(icon);

      payBtn.appendChild(iconWrapper);
    }

    const btnText = document.createElement('span');
    btnText.id = 'eth-btn-text';
    btnText.textContent = 'Pay with Ethereum';

    payBtn.appendChild(btnText);

    payBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (this.loading) return;

      this.loading = true;

      if (this.config.HANDLE_UI) {
        const icon = document.getElementById('eth-icon-svg');
        icon.src = this.getImage('LOADING_ICON');
      }

      const price = await this.getEtherPriceIn(currency);
      const amountIntETH = parseFloat(amount / price).toFixed(18);

      console.log('amountIntETH: ', amountIntETH);

      if (window.ethereum) window.web3 = new Web3(ethereum);

      const amountToReceive = web3.utils.toWei(amountIntETH, 'ether');

      try {
        const response = await web3.currentProvider.send(
          'eth_requestAccounts',
          []
        );

        if (!response.result || !response.result.length) return;

        const account = response.result[0];

        try {
          const tx = await this.sendTransaction(
            account,
            address,
            amountToReceive
          );

          if (document.getElementById('eth-btn-text')) {
            document.getElementById('eth-btn-text').classList.add('waiting');
          }

          if (this.config.HANDLE_UI) {
            document.getElementById('eth-btn-text').textContent =
              'Waiting for confirmation';
            const waiting = document.createElement('p');
            waiting.classList.add('eth-waiting');
            waiting.id = 'hold-tight';
            waiting.textContent = 'Hold tight! This might take a while...';
            document.getElementById(targetElement).appendChild(waiting);
          }

          this.waitForConfirmation(
            tx,
            this.config.MIN_CONFIRMATIONS,
            this.config.INTERVAL
          );
        } catch (e) {
          console.error('Error sending transaction', e);

          if (this.config.HANDLE_UI) {
            document.getElementById('eth-icon-svg').src = this.getImage(
              'ETHEREUM_ICON'
            );
            document.getElementById('eth-btn-text').textContent =
              'Pay with Ethereum';
          }

          if (document.getElementById('eth-btn-text')) {
            document.getElementById('eth-btn-text').classList.remove('waiting');
          }

          this.errorCallback(e);
          this.loading = false;
        }
      } catch (e) {
        console.error('Error', e);

        if (this.config.HANDLE_UI) {
          document.getElementById('eth-icon-svg').src = this.getImage(
            'ETHEREUM_ICON'
          );
          document.getElementById('eth-btn-text').textContent =
            'Pay with Ethereum';
        }
        this.errorCallback(e);
        this.loading = false;
      }
    });

    this.targetElement.appendChild(payBtn);
  }

  renderStyles() {
    const style = document.createElement('style');
    style.innerHTML =
      '.eth-btn {' +
      'margin: 25px 0px;' +
      'width: 80%;' +
      'min-width: 220px;' +
      'max-width: 220px;' +
      'height: 42px;' +
      'background-color: #fcfcfc;' +
      'border-radius: 2px;' +
      'box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .2);' +
      'cursor: pointer;' +
      'cursor: hand;' +
      'align-self: center;' +
      'user-select: none;' +
      'transition: all 400ms ease 0s;' +
      'display: flex;' +
      '}' +
      '.eth-btn .eth-icon-wrapper {' +
      'position: absolute;' +
      'margin-top: 1px;' +
      'margin-left: 1px;' +
      'width: 40px;' +
      'height: 40px;' +
      'border-radius: 2px;' +
      'user-select: none' +
      '}' +
      '.eth-btn #eth-icon-svg {' +
      'position: absolute;' +
      'margin-top: 11px;' +
      'margin-left: 11px;' +
      'width: 18px;' +
      'height: 18px;' +
      'user-select: none' +
      '}' +
      '.eth-btn #eth-btn-text {' +
      'float: right;' +
      'margin: 11px 14px 40px 40px;' +
      'color: #757575;' +
      'font-size: 15px;' +
      'letter-spacing: .2px;' +
      'font-family: Helvetica Neue, Arial;' +
      'user-select: none' +
      '}' +
      '.eth-btn:hover {' +
      'box-shadow: 0 3px 8px rgba(117, 117, 117, .5);' +
      'user-select: none;' +
      '}' +
      '.eth-web3-missing-wrapper {' +
      'min-width: 290px;' +
      '}' +
      '.eth-web3-missing {	' +
      'font-size: 13px;' +
      'color: #999;' +
      'line-height: 20px;' +
      'max-width: 320px;' +
      'display: block' +
      '}' +
      '.eth-web3-missing a{	' +
      'color: #FF0000;' +
      '}' +
      '.eth-waiting{	' +
      'color: #999999;' +
      'font-size: 13px;' +
      'text-align:center;' +
      '}' +
      '.eth-btn:active {' +
      'box-shadow: 0 1px 1px #757575;' +
      'background: #F8F8F8;' +
      'color: #fff;' +
      'user-select: none;' +
      '.';
    ('}');

    const ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);
  }

  onTransactionConfirmed(result) {
    if (document.getElementById('eth-btn-text')) {
      document.getElementById('eth-btn-text').classList.remove('waiting');
      const hold = document.getElementById('hold-tight');
      hold.parentNode.removeChild(hold);
    }

    if (this.config.HANDLE_UI) {
      document.getElementById('eth-btn-text').textContent = 'Thank you!';
      document.getElementById('eth-icon-svg').src = this.getImage(
        'SUCCESS_ICON'
      );
    }

    this.successCallback(result);
  }

  waitForConfirmation(tx, minConfirmations, interval) {
    let txBlockNumber = null,
      confirmations = 0,
      start_time = Date.now();

    let checkConfirmations = setInterval((_) => {
      web3.eth.getTransaction(tx, (error, result) => {
        if (!error) {
          txBlockNumber = result.blockNumber;
          if (txBlockNumber) {
            web3.eth.getBlockNumber((error, currentBlockNumber) => {
              if (!error) {
                const confirmations = currentBlockNumber - txBlockNumber;
                if (confirmations >= minConfirmations) {
                  const delta = (Date.now() - start_time) / 1000;
                  clearInterval(checkConfirmations);
                  this.onTransactionConfirmed(result);
                }
              } else {
                this.errorCallback(error);
              }
            });
          }
        } else {
          this.errorCallback(error);
        }
      });
    }, interval * 1000);
  }

  sendTransaction(account, address, amount) {
    let tData = { from: account, to: address, value: amount };
    return new Promise((resolve, reject) => {
      web3.eth.estimateGas(tData, (error, gas) => {
        if (!error) {
          web3.eth.getGasPrice((error, gasPrice) => {
            if (error) {
              reject(error);
            } else {
              web3.eth.sendTransaction(
                {
                  ...tData,
                  gas: gas,
                  gasPrice: gasPrice * this.config.GAS_BOOST,
                },
                (error, txID) => {
                  if (error) {
                    reject(error);
                  } else {
                    resolve(txID);
                  }
                }
              );
            }
          });
        } else {
          reject(error);
        }
      });
    });
  }
}
