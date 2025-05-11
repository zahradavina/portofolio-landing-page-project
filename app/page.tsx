import Image from "next/image";
import Lanyard from "./components/Components/Lanyard/Lanyard";
import DecryptedText from "./components/TextAnimations/DecryptedText/DecryptedText";
import BlurText from "./components/TextAnimations/BlurText/BlurText";
import AnimatedContent from "./components/Animations/AnimatedContent/AnimatedContent";
import Aurora from "./components/Backgrounds/Aurora/Aurora";
import ClickSpark from "./components/Animations/ClickSpark/ClickSpark";
import ShinyText from "./components/TextAnimations/ShinyText/ShinyText";

export default function Home() {
  function handleAnimationComplete(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className ="min-h-screen overflow-x-hidden bg-[#1a1a1a]">
      <ClickSpark />
   <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full"> 
    <Aurora 
    colorStops={["#00cc99","#f2f2f2","#ff4dff"]}
    blend={0.5}
    amplitude={1.0}
    speed={0.5}/>
    </div>
    <div className="container mx-auto h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <div className="flex items-center h-full">
            <div className="flex flex-col gap-6">
              <AnimatedContent 
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}>
                  <h1 className="text-2xl text-amber-100 font-bold">Davin's Portofolio</h1>
                      <DecryptedText text="Hello, I'm Zahra Davina B!" 
                        speed={50} 
                        maxIterations={10} 
                        sequential={true} 
                        revealDirection="start" 
                        useOriginalCharsOnly={false} 
                        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+" 
                        className="text-5xl text-pink-300 font-bold" />

                      <DecryptedText text="I am an Electrical Engineer" 
                        speed={50} 
                        maxIterations={10} 
                        sequential={true} 
                        revealDirection="start" 
                        useOriginalCharsOnly={false} 
                        haracters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+" 
                        className="text-3xl text-amber-100 font-semibold" />
                      <BlurText
                        text="Welcome to my portofolio page! You can called me Davin, currently working as a professional clown and addicted to coffee.🤡☕️"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-xl mb-8" />
                        <div className="flex items-center gap-4">
                        <a href ="mailto:davin@example.com"><ShinyText text="Contact Me!" disabled={false} speed={5} className='custom-class border-2 px-4 py-2 rounded-3xl' /></a>
                        </div>
                </AnimatedContent>
              </div>
           </div>
        </div>
          <div className="col-span-6">
          <Lanyard position={[0,0,12]} gravity={[0,-40,0]}/>
          </div>
          </div>
        </div>
      </div>
  );
}
