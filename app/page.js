import Image from "next/image";
import Create from "./create/page";
import { Linkedin, Github, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <main className="sm:mx-20 flex flex-col min-h-screen">
      <nav className="flex justify-center py-5">
        <div className="logo"><h1 className="font-bold text-3xl font-[Sansita Swashed]">Creat<span className="text-orange-400">i</span></h1></div>
        {/* <div className="flex items-center justify-center">
          <ul className="flex gap-7 font-bold items-center justify-center">
            <li>Home</li>
            <li>About</li>
            <li>Library</li>
            <li>Pricing</li>
          </ul>
        </div> */}
      </nav>

      <Create />
      {/* <header className="flex flex-col my-[50px]">
        <div className="flex justify-between">
          <h1 className="text-[3vw] font-bold">GENERATE YOUR IDEAS INTO</h1>
          <div className="w-[100px] rounded-lg m-4">
            <Image src="./head.jpg" alt="" />
          </div>
        </div>
        <div className="flex flex-row">
          <h1>STUNNING VISUALS</h1>
          <div>
            <p>Introducing Bayangin the Generative Alimage for brings your</p>
            <p>ideas to life with perfectly matched and unique visuals. -</p>
          </div>
        </div>
      </header> */}

      <footer class="flex justify-center items-center flex-col gap-3 mt-auto mb-3">
        <div class="flex justify-center items-center flex-col gap-2">
          <h1>Rahul Bhati</h1>
          <ul class="flex justify-center gap-5">
            <li><a href="https://www.linkedin.com/in/rahul-bhati-25482a1a0/" target="_blank"><Linkedin /></a></li>
            <li><a href="https://github.com/rahul-Bhati/" target="_blank"><Github /></a></li>
            <li><a href="https://x.com/RahulBh77113306" target="_blank"><Twitter /></a></li>
          </ul>
        </div>
      </footer>

      {/* <footer className="items-end">
        <div className="flex justify-center items-center flex-col gap-5">
          <h1>Rahul Bhati</h1>
          <ul className="flex justify-center gap-5">
            <li><a href="https://www.linkedin.com/in/rahul-bhati-25482a1a0/" target="_blank"><Linkedin /></a></li>
            <li><a href="https://github.com/rahul-Bhati/" target="_blank"><Github /></a></li>
            <li><a href="https://x.com/RahulBh77113306" target="_blank"><Twitter /></a></li>
          </ul>
        </div>
      </footer> */}
    </main>
  );
}
