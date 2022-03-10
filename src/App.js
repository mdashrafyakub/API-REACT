import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [statuscode, setStatuscode] = useState(false);
  function apidata() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status === 200) {
          setStatuscode(true);

          return response.json();
        }
      })
      .then((json) => setData(json));
  }
  useEffect(() => {
    apidata();
  });

  return (
    <div>
      {statuscode ? (
        <div>
          <div class="alert">
            <span class="closebtn" onclick={() => setStatuscode(false)}>
              &times;
            </span>
            <strong>Sucess!</strong> API call is Done.
          </div>
          {data.length > 0 && <p>{data.length}</p>}
          {data.length > 0 && data.map((data) => <p>{data.name}</p>)}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
