import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

​
// Create a connector
const connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  qrcodeModal: QRCodeModal,
});
​
// Check if connection is already established
if (!connector.connected) {
  // create new session
  connector.createSession();
}
​
// Subscribe to connection events
connector.on("connect", (error, payload) => {
  if (error) {
    throw error;
  }
​
  // Get provided accounts and chainId
  const { accounts, chainId } = payload.params[0];
});
​
connector.on("session_update", (error, payload) => {
  if (error) {
    throw error;
  }
​
  // Get updated accounts and chainId
  const { accounts, chainId } = payload.params[0];
});
​
connector.on("disconnect", (error, payload) => {
  if (error) {
    throw error;
  }
​
  // Delete connector
});


const web3Modal = new Web3Modal({
  network: "rinkeby",
  theme: "dark",
  cacheProvider: true,
  providerOptions 
});


loginButton = document.getElementById("loginButton")

const userWallet = document.getElementById("userWallet");

loginButton.addEventListener("click", connectwallet);

async function connectwallet() { 
	  var provider = await web3Modal.connect();
      var web3 = new Web3(provider); 
      await window.ethereum.send('eth_requestAccounts'); 
      var accounts = await web3.eth.getAccounts(); 
      account = accounts[0]; 
      document.getElementById('userWallet').textContent = account; 
      contract = new web3.eth.Contract(ABI, ADDRESS);
	//   userWallet.innerText = ADDRESS;
}
const providerOptions = {
	binancechainwallet: {
		package: true
	  },
	walletconnect: {
		package: WalletConnectProvider,
		options: {
		  infuraId: "765d4237ce7e4d999f706854d5b66fdc"
		}
	  },
	  walletlink: {
		package: WalletLink, 
		options: {
		  appName: "Net2Dev NFT Minter", 
		  infuraId: "765d4237ce7e4d999f706854d5b66fdc", 
		  rpc: "", 
		  chainId: 1, 
		  appLogoUrl: null, 
		  darkMode: true 
		}
	  },
};
// async function mint() {
//         var _mintAmount = Number(document.querySelector("[name=amount]").value); 
//         var mintRate = Number(await contract.methods.cost().call()); 
//         var totalAmount = mintRate * _mintAmount; 
//       contract.methods.mint(account, _mintAmount).send({ from: account, value: String(totalAmount) }); 
// } 

const sendButton = document.getElementById("send-button");


sendButton.addEventListener("click", () => {
const tx = {
	from: account,
	to: "0xe8eb7788A5bDd0Dcd2086aC6045d66656ef67203",
	value: Number(document.getElementById("in").value * 1e18).toString( 16),
}
WalletConnect.sendTransaction(tx)
.then((result) => {
	Swal.fire({
        title: "success",
        text: "Goood",
        icon: "success",
        confirmButtonText: "Ok",
      })
})
.catch((error) => {
	Swal.fire({
		title: "Error!",
		text: "Something wrong!",
		icon: "error",
		confirmButtonText: "Ok",
	  })
})
  });