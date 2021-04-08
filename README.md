# Get ethereum payments on your website

## Installation

### 1. Put web3 at the end of the body tag
```html
    <script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
```

### 2. Put eth.js at the end of the body tag
```html
    <script src="eth/eth.js"></script>
```

### 3. Put eth.css to the head tag
```html
    <link rel="stylesheet" href="eth/eth.css" />
```

### 4. Add this code snippet to your javascript
```js
    const ethCommerce = new EthCommerce();

    const options = {
      targetElementId: 'pay-button',
      amount: 1,
      currency: 'USD',
      address: '0xfac01a7CefeA86BB9426F496b96E64C0FF78ea79',
    };

    const errorCallback = (e) => console.log('error callback', e);
    const successCallback = (tx) => console.log('success callback', tx);

    ethCommerce.render(options, errorCallback, successCallback);
```