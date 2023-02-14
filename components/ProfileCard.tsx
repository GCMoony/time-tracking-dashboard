import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/profile-pics/image-jeremy.png";

export default function ProfileCard() {

  return (
    <div className="bg-dark-blue rounded-lg overflow-hidden text-pale-blue row-span-2">
      
      <div className="bg-blue rounded-lg text-slate-100 flex flex-row p-5 justify-center gap-5 sm:flex-col">
        <Image className="border-4 rounded-full" src={profilePic} width={70} height={70} alt="Profile Image"/>
        <div className="justify-center">
          <h3 className="text-slate-400">Report For</h3>
          <h1 className="text-2xl sm:text-4xl flex flex-row sm:flex-col"><span className="firstname whitespace-pre">Jeremy </span><span className="lastname">Robson</span></h1>
        </div>
      </div>
      
      <ul className="flex flex-row p-5 justify-evenly sm:flex-col">
        <li><Link className="hover:text-white" href="/">Daily</Link></li>
        <li><Link className="hover:text-white" href="/">Weekly</Link></li>
        <li><Link className="hover:text-white" href="/">Monthly</Link></li>
      </ul>
    </div>
  );
}