import Contacts from "./Contacts";

interface ProfileProps {
  dp: string;
  name: string;
  designation: string;
  description: string;
  width: number;
  height: number;
  linkedinUrl: string;
  githubUrl: string;
  xUrl: string;
}

export default function Profile({ dp, name, designation, description, linkedinUrl, githubUrl, xUrl, width, height }: ProfileProps) {
  return (
    <div className="grid max-w-lg grid-cols-1 justify-items-center gap-4 mb-4 mx-auto">
      <img
        src={dp}
        alt={name}
        className="h-auto max-w-32 rounded-full overflow-hidden" // Adjust max-w-xs to suit your design
        width={width}
        height={height}
        
      />
      <div className="grid grid-cols-1 gap-2 text-center">
        <h1 className="font-sans font-semibold tracking-tighter dark:text-white mint:text-black text-slate-800 text-3xl md:text-4xl">
          {name}
        </h1>
        <p className="font-sans font-semibold text-xl italic font-se eading-normal tracking-tight dark:text-slate-400 mint:text-black text-slate-700">
          {designation}
        </p>
        <p className="font-serif text-md italic font-se eading-normal tracking-tight dark:text-slate-400 mint:text-black text-slate-700 pt-8">
          {description}
        </p>
      </div>
      <Contacts linkedinUrl={linkedinUrl} githubUrl={githubUrl} xUrl={xUrl}/>
    </div>
  );
}
