const ethPaymentBtn = new EthPaymentBtn();

const texts = {
  pay: 'Pay with Ethereum',
  loading: 'Loading',
  waitConfirm: 'Waiting for confirmation',
  waitHold: 'Hold tight! This might take a while...',
  success: 'Thank you!',
  install: 'Install metamask',
};

const options = {
  targetElementId: 'pay-button',
  amount: 1,
  currency: 'USD',
  address: '0xfac01a7CefeA86BB9426F496b96E64C0FF78ea79',
  texts,
};

const errorCallback = (e) => console.log('error callback', e);
const successCallback = (tx) => console.log('success callback', tx);

ethPaymentBtn.render(options, errorCallback, successCallback);
