import { useState, useEffect } from "react";


const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;


  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);





  
  return (
    <>
    <p style={{ textAlign: "center", marginTop: "20px" }}>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Day/Time&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Message&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wallet Address
</p>



 
        {memos.map((memo) => {
        return (
          <div
            className="container-fluid"
            style={{ width: "100%" }}
            key={Math.random()}
          >
            <table
              style={{
                marginBottom: "10px",
              }}
            >
              <tbody>
                <tr>
              
                  <td
                    style={{

                      
                      textAlign: "center",
                      backgroundColor: "#ffc96f",
                      border: "1px solid white",
                      borderRadius: 7,
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "500px",
                    }}
                  >
                    {new Date(memo.timestamp * 1000).toLocaleString()}
                  </td>


                  <td
                    style={{
                      textAlign: "center",
                      backgroundColor: "#ffc96f",
                      border: "1px solid white",
                      borderRadius: 7,
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}
                  >
                    {memo.name}
                  </td>


                  <td
                    style={{
                      textAlign: "center",
                      backgroundColor: "#ffc96f",
                      border: "1px solid white",
                      borderRadius: 7,
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                    }}
                  >
                    {memo.message}
                  </td>


                  <td
                    style={{
                      textAlign: "center",
                      backgroundColor: "#ffc96f",
                      border: "1px solid white",
                      borderRadius: 7,
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "400px",
                    }}
                  >
                    {memo.from}
                  </td>

                  
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}


<footer style={{ textAlign: "center", marginTop: "20px" }}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <a href="https://github.com/querylab" target="_blank" rel="noopener noreferrer">
      <img src="https://repository-images.githubusercontent.com/322583197/e7958f30-5dcf-4101-9f18-63aa08a338bb" width={55} alt="GitHub" />
    </a>
    <p style={{ fontWeight: "bold", marginTop: "10px" }}>Made with ❤️ by querylab</p>
  </div>
  {/* agree more code*/}
</footer>

      
    </>
  );
};
export default Memos;
