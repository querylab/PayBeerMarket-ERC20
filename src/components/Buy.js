import { ethers } from "ethers";
     

const Buy = ({ state }) => {
  const paybeermarket = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract);
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.paybeermarket(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
   
  
  };


  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={paybeermarket}>


          
          <div className="col-md-4 mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Customers"
            />
          </div>



          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Your Feedback"
            />
          </div>
          

          <button
          
            type="submit"
            class="btn btn-outline-warning"
            disabled={!state.contract}
            style={{
              width: "25%",
              borderRadius: "7px",
              color: "black",
       
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            }}
            
            
            >paybeer ₿⚡</button>




            
        </form>
      </div>
    </>
  );
  
};


export default Buy;
