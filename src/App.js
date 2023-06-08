import abi from "./contract/paybeer.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import beer from "./beer.png";
import pay from "./pay.png";
import paybeer from "./paybeer.png";
import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xf2BF860AEdE959Ba0178c5945C6a30349b948c33"; //change this to your deploy own address
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  // console.log(state);
  return (
    <div style={{ backgroundColor: "#ffffff", height: "100%" }}>

<div style={{ display: "flex", justifyContent: "center" }}>
  <img src={beer} className="img-fluid" alt=".." width="15%" style={{ margin: "0 10px" }} />
  <img src={paybeer} className="img-fluid" alt=".." width="30%" style={{ margin: "0 10px" }} />
  <img src={pay} className="img-fluid" alt=".." width="15%" style={{ margin: "0 10px" }} />

</div>




<div
  style={{
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
  }}
>
  <p className="text-muted lead" style={{ marginLeft: "5px", fontWeight: "bold", color: "#333" }}>
    <small>Connected Account - {account}</small>
  </p>
</div>


      <div className="container">
        <Buy state={state} />
        <Memos state={state} />
      </div>


    </div>
  );
}

export default App;
