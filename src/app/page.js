import Loader from "./components/Loader";
import ThreeJsModule from "./components/ThreeJsModule";

export default function Home() {
  return (
<div 
  className="w-screen h-screen" 
  style={{
    backgroundImage: "url('/assets/welcomegif.gif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <Loader />
    </div>
  );
}
