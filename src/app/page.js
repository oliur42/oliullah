import Image from "next/image";
import Header from "./components/Header";
import Benner from "./components/Benner";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Benner />
      <Work />
      <Contact />
    </div>
    
  );
}
