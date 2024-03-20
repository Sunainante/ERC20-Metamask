// import { useState } from 'react';
import { ethers } from 'ethers';
import lock from "./artifacts/contracts/Lock.sol/Lock.json"
import './App.css';

const contractAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";


function App() {
  async function requestAccount(){
    return await window.ethereum.request({ method: "eth_requestAccounts" });}

  async function mintin(){
    if (typeof window.ethereum !== "undefined"){
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      console.log(await signer);
      const contract = new ethers.Contract(contractAddress,lock.abi,provider);
      console.log(await contract.hasRole(ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE")),"0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"));
      //await contract.connect(signer).mint("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",20);
      console.log(await contract.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"));
      console.log("minted");
     }
     
  }
  
  return (
    <div className="App">
    <h1>jdkfhjkdfh</h1>
      <button onClick={mintin}>Hello</button>
    </div>
  );
}

  


export default App;
