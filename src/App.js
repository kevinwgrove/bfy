import "./App.css";
import BackgroundSlider from "react-background-slider";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [images, setImages] = useState([])
  for (let i = 1; images.length < 16; i++) {
    images.push(`images/img-${i}.jpeg`)
  }
  const shuffle = () => {
    var copy = [], n = images.length, i;

    // While there remain elements to shuffle…
    while (n) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * images.length);

      // If not already shuffled, move it to the new images.
      if (i in images) {
        copy.push(images[i]);
        delete images[i];
        n--;
      }
    }
    return copy
  }
  useEffect(() => {
    setImages(shuffle())
  }, [])


  return (
    <>
        <BackgroundSlider 
          id="background"
          images={images}
          duration={8}
          transition={2}
        />
          <div id="app-container"></div>
    </>
  );
}

export default App;
