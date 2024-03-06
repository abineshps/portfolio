import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import Pdf from '../assets/Abinesh resume..pdf'

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            github: 'https://github.com/abineshps',
            Instagram: 'https://www.instagram.com/abinesh_xo/',
            linkedin: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-black text-8xl font-hero-font'>Hi, <br/> Im <span className='text-red-700'>Abinesh</span> 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.github} className='pr-5 hover:text-red-500'><AiOutlineGithub size={40} /></a>
                <a href={config.social.Instagram} className='pr-5 hover:text-red-500'><AiOutlineInstagram size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-red-500'><AiOutlineLinkedin size={40}/></a>
            </div>
            <div className='pl-5'>
            <a  href={Pdf}   target="_blank" rel="noopener noreferrer" className="btn button secondary-button mr-2 text-uppercase" >GET CV</a>

            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
