import "./App.css";
import BackgroundSlider from "react-background-slider";

function App() {
  let images = []
  
  for (let i = 1; i < 16; i++) {
      images.push(`images/img-${i}.jpeg`)
  }

  images = images.sort(() => Math.random() - 0.5)

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
