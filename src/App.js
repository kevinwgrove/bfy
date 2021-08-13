import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(12)

  const imgUrls = new XMLHttpRequest();
  imgUrls.open("GET", "/images", true);
  imgUrls.responseType = "document";

  // useEffect(() => {
  //   const getRandomNum = () => {
  //     let newNum = Math.floor(Math.random() * (17 - 1) + 1)
  //     if (num === newNum){
  //       getRandomNum()
  //     } else {
  //       setNum(newNum)
  //     }
  //   };
  //   setInterval(() => getRandomNum(), 10000)
  // })
  
  
  let img_num = `url(images/img-${num}.jpeg)`;

  return (
    <>
      {num === 11 ? (
        <div
          id="background"
          style={{
            backgroundImage: `url(images/img-12.jpeg)`,
            backgroundPosition: "0 5%",
          }}
        ></div>
      ) : (
          <div
            id="background"
            style={{
              backgroundImage: img_num,
            }}
          ></div>
      )}
      <div id="app-container"></div>
    </>
  );
}

export default App;
