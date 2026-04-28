import SocialCard from "~/components/SocialCard";
import type { ReactElement } from 'react';

interface ContactsProps {
    linkedinUrl: string;
    githubUrl: string;
    xUrl: string;
  }
const Contacts= ({linkedinUrl, githubUrl, xUrl}:ContactsProps) => {
  const LinekdinIcon: ReactElement = (
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
            <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.61c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.95v5.72h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25z"/>
        </svg>
    </span>
);
  
    const GithubIcon: ReactElement = (
      <span><svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="20"
      width="20"
    >
      <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
    </svg></span>
    );
    const TwitterIcon: ReactElement = (
      <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" fill="currentColor" height="20" viewBox="0 0 24 24">
      <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
      </svg></span>
    );
    
    const gridCount = [linkedinUrl, githubUrl, xUrl].filter((url) => url).length;
    if (gridCount === 0) {
      return <div className='mt-20'/>;
    }
    
    const gridClass = gridCount === 1 ? 'grid grid-cols-1 gap-4' : gridCount ===2?'grid grid-cols-2 gap-3':'grid grid-cols-3';
    return (
        
       <div className="flex flex-col items-center p-8">
        <div className={gridClass}>
        
            {
              linkedinUrl && 
              <SocialCard
              service="Linkedin"
              href={linkedinUrl}
              icon={LinekdinIcon}
              />
            }
            {
              githubUrl && (
                <SocialCard
                service="GitHub"
                href={githubUrl}
                icon={GithubIcon}
                />)
            }
            {
              xUrl && (
                <SocialCard
                service="X"
                href={xUrl}
                icon={TwitterIcon}
                />)
            }
        </div>
      </div>
    );
  };
  
  export default Contacts;