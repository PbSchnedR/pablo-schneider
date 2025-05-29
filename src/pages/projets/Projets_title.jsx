import Sidebar from '../../Sidebar';
import DechiffrementTitle from '../../components/DechiffrementTitle';

import class_video from '../../assets/class.mp4';

const Projets_title = () => {
    return (
       <div className="relative w-full overflow-hidden h-screen w-screen flex flex-row justify-center items-center">
       <Sidebar />
       {/* Conteneur principal pour mobile */}
       <div className="w-full h-full relative">
           {/* Vidéo en arrière-plan */}
           <video
               autoPlay
               loop
               muted
               playsInline
               className="absolute inset-0 w-full h-full object-cover"
           >
               <source src={class_video} type="video/mp4" />
           </video>
           
           {/* Overlay pour assombrir la vidéo sur mobile */}
           <div className="sm:block lg:hidden absolute inset-0 bg-black/60"></div>

           {/* Version mobile du titre */}
           <div className="absolute inset-0 w-full h-full flex justify-center items-center z-10 lg:hidden">
                <DechiffrementTitle title="Mes Projets" />
           </div>
       </div>

       {/* Version desktop du titre */}
       <div className="hidden lg:flex w-1/2 h-full bg-black flex justify-center items-center">
           <DechiffrementTitle title="Mes Projets" />
       </div>
   </div>
    );
};

export default Projets_title;