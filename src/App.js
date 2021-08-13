import "./App.css";
import BackgroundSlider from "react-background-slider";
import { useState } from "react";
import { useEffect } from "react";
import { copy } from "fs-extra";

function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
      for (let i = 1; images.length < 16; i++) {
        images.push(`images/img-${i}.jpeg`)
      }
      
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
      setImages(copy)
  }, [images])

  return (
    <>
        <BackgroundSlider 
          id="background"
          images={images}
          duration={2}
          transition={2}
        />
          <div id="app-container"></div>
    </>
  );
}

export default App;
