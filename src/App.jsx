import { Canvas, useFrame } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import background from './assets/background/banner.jpg'
import './index.css'
import NavBar from "./components/NavBar";

function App() {

  return (

    <div>

<NavBar/>

      <div style={{ display: "flex", alignContent: "center", height: "100vh", justifyContent: "center", alignItems: "center", backgroundImage: `url(${background})`, backgroundPosition: "0, 0", backgroundSize: "cover" }}>
        <div >   <div className="title-font" style={{ fontSize: "70px", marginRight: "5px", fontFamily: 'lilita One, cursive;', color: "white" }}>Welcome on my Website</div>
          <div>
            I am tanguy Web developper
          </div>
        </div>

        <div style={{ right: "0", top: "0" }}>
          <Canvas
            style={{ height: '90vh' }} onCreated={({ gl }) => {
              gl.setClearColor(0xFF0000, 0);
              gl.autoClear = false;
              gl.clearDepth()
            }} shadows camera={{ position: [25, 5, 15], fov: 10 }}>
            <Experience />

          </Canvas>

        </div>
      </div>


      <div style={{height:"200px"}}>dslkfmjmsdlfkmsdflk</div>


    </div>

  );
}

export default App;
