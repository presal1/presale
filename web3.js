const sendButton = document.getElementById('send-button');

const web3 = window.Web3
const ethereum = window.ethereum


 var input = document.getElementById('in').value;
var out = document.getElementById('out'); 



function calculateAmount(value){
   
    var l;
    var y = value;
     l =  y *  50000;
     document.getElementById('out').value = l;
}

function calculatAmount(value){
  var a ;
  var o = value;
  a = o / 50000;
  document.getElementById('in').value = a ;
}

window.userWalletAddress = null
const loginButton = document.getElementById('loginButton')
const userWallet = document.getElementById('userWallet')

function toggleButton() {
  if (!window.ethereum) {
    loginButton.innerText = 'MetaMask is not installed'
    loginButton.classList.remove('bg-purple-500', 'text-white')
    loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed')
    return false
  }

  loginButton.addEventListener('click', loginWithMetaMask)
}


async function loginWithMetaMask() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    .catch((e) => {
      console.error(e.message)
      return
    })
  if (!accounts) { return }

  window.userWalletAddress = accounts[0];
  userWallet.innerText = window.userWalletAddress
  loginButton.innerText = 'Sign out of Wallet'

  loginButton.removeEventListener('click', loginWithMetaMask)
  setTimeout(() => {
    loginButton.addEventListener('click', signOutOfMetaMask)
  }, 200)
}

function signOutOfMetaMask() {
  window.userWalletAddress = null
  userWallet.innerText = ''
  loginButton.innerText = 'Connect Wallet'

  loginButton.removeEventListener('click', signOutOfMetaMask)
  setTimeout(() => {
    loginButton.addEventListener('click', loginWithMetaMask)
  }, 200)
}

window.addEventListener('DOMContentLoaded', () => {
  toggleButton()



});




sendButton.addEventListener('click', () => {
ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: userWalletAddress,
          to: '0xe8eb7788A5bDd0Dcd2086aC6045d66656ef67203',
          value : Number(document.getElementById('in').value  * 1e18).toString(16) ,
          // 1000000000000000000
        },
      ],
    }).then((txHash) => Swal.fire({
      title: 'success',
      text: 'Goood',
      icon: 'success',
      confirmButtonText: 'Ok'
    }))
    .catch((error) => Swal.fire({
      title: 'Error!',
      text: 'Something wrong!',
      icon: 'error',
      confirmButtonText: 'Ok'
    }),
    document.getElementById('in').innerHTML = '0'
    );

   })



const sendEthButton = document.querySelector('.buy');

