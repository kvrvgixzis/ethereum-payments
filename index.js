const ethCommerce = new EthCommerce();

const options = {
  targetElement: 'pay-button',
  amount: 1,
  currency: 'USD',
  address: '0xfac01a7CefeA86BB9426F496b96E64C0FF78ea79',
};

const errorCallback = (e) => console.log('error callback', e);
const successCallback = (tx) => console.log('success callback', tx);

ethCommerce.render(options, errorCallback, successCallback);
