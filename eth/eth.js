class EthPaymentBtn {
  constructor(config) {
    this.config = {
      MIN_CONFIRMATIONS: 3,
      INTERVAL: 3,
      GAS_BOOST: 1,
      ...config,
    };
  }

  /**
   * Render pay btn
   * @param {{
   *  targetElementId: string,
   *  amount: number,
   *  currency: string,
   *  address: string,
   *  texts: {
   *   pay: string,
   *   loading: string,
   *   waitConfirm: string,
   *   waitHold: string,
   *   success: string,
   *   install: string,
   *  },
   * }} options
   * @param {function} errorCallback
   * @param {function} successCallback
   * @returns
   */
  render(options, errorCallback, successCallback) {
    const targetElement = document.getElementById(options.targetElementId);

    if (!targetElement) return console.error('target element is undefined');

    if (window.ethereum) window.web3 = new Web3(ethereum);

    this.targetElement = targetElement;
    this.options = options;
    this.errorCallback = errorCallback;
    this.successCallback = successCallback;

    window.addEventListener('load', () => {
      if (typeof web3 !== 'undefined') return this.renderButton();
      this.renderNoWeb3();
      this.errorCallback({ error: 'no web3 detected' });
    });
  }

  renderNoWeb3() {
    const downloadBtn = document.createElement('a');
    downloadBtn.href = 'https://metamask.io/download.html';
    downloadBtn.classList.add('eth-btn');

    const btnText = document.createElement('span');
    btnText.className = 'eth-btn-text';
    btnText.textContent = this.options.texts.install;

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
    const { amount, address, currency } = this.options;

    this.payBtn = document.createElement('a');
    this.payBtn.classList.add('eth-btn');

    this.btnText = document.createElement('span');
    this.btnText.className = 'eth-btn-text';
    this.btnText.textContent = this.options.texts.pay;

    this.payBtn.appendChild(this.btnText);

    this.payBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (this.loading) return;

      this.loading = true;
      this.btnText.textContent = this.options.texts.loading;

      const price = await this.getEtherPriceIn(currency);
      const amountIntETH = parseFloat(amount / price).toFixed(18);
      const amountToReceive = web3.utils.toWei(amountIntETH, 'ether');

      try {
        const response = await web3.currentProvider.send('eth_requestAccounts');
        if (!response.result || !response.result.length) return;
        const account = response.result[0];

        try {
          const tx = await this.sendTransaction(
            account,
            address,
            amountToReceive
          );

          this.btnText && this.btnText.classList.add('waiting');

          this.btnText.textContent = this.options.texts.waitConform;
          const waiting = document.createElement('p');
          waiting.classList.add('eth-waiting');
          waiting.id = 'hold-tight';
          waiting.textContent = this.options.texts.waitHold;
          this.targetElement.appendChild(waiting);

          this.waitForConfirmation(
            tx,
            this.config.MIN_CONFIRMATIONS,
            this.config.INTERVAL
          );
        } catch (e) {
          console.error('Error sending transaction', e);
          this.btnText.textContent = this.options.texts.pay;
          this.btnText && this.btnText.classList.remove('waiting');
          this.errorCallback(e);
          this.loading = false;
        }
      } catch (e) {
        console.error('Error', e);
        this.btnText.textContent = this.options.texts.pay;
        this.errorCallback(e);
        this.loading = false;
      }
    });

    this.targetElement.appendChild(this.payBtn);
  }

  onTransactionConfirmed(result) {
    if (this.btnText) {
      this.btnText.classList.remove('waiting');
      const hold = document.getElementById('hold-tight');
      hold.parentNode.removeChild(hold);
    }

    this.btnText.textContent = this.options.texts.success;
    this.successCallback(result);
  }

  waitForConfirmation(tx, minConfirmations, interval) {
    let txBlockNumber = null;

    const checkConfirmations = setInterval(() => {
      web3.eth.getTransaction(tx, (error, result) => {
        if (error) return this.errorCallback(error);

        txBlockNumber = result.blockNumber;
        if (!txBlockNumber) return;

        web3.eth.getBlockNumber((error, currentBlockNumber) => {
          if (error) return this.errorCallback(error);

          const confirmations = currentBlockNumber - txBlockNumber;
          if (confirmations < minConfirmations) return;

          clearInterval(checkConfirmations);
          this.onTransactionConfirmed(result);
        });
      });
    }, interval * 1000);
  }

  async sendTransaction(account, address, amount) {
    const tData = { from: account, to: address, value: amount };
    const gas = await web3.eth.estimateGas(tData);
    const gasPrice = await web3.eth.getGasPrice();

    const tObject = {
      ...tData,
      gas,
      gasPrice: gasPrice * this.config.GAS_BOOST,
    };

    return new Promise((resolve, reject) => {
      const callback = (e, txID) => (e ? reject(e) : resolve(txID));
      web3.eth.sendTransaction(tObject, callback);
    });
  }
}
