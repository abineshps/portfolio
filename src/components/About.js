import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'I am a motivated individual eager to embark on a highly rewarding career in a challenging and stimulating work environment where I can apply my skills and knowledge effectively to contribute to organizational growth. With expertise in Python, HTML5, CSS, JavaScript, React JS, and C++, along with soft skills such as adaptability, problem-solving, creative thinking, and management, I am well-equipped to tackle diverse challenges.',
        line2: 'Proficient in tools and software including VScode, GitHub, MongoDB, Figma, and PowerPoint, I am capable of developing innovative solutions and delivering impactful results. My past projects reflect my dedication to innovation and problem-solving. For instance, I have developed an IoT-based drip monitoring system leveraging deep learning techniques to optimize water usage and promote efficient irrigation practices.Furthermore, I have implemented a face recognition bot using computer vision technologies to enhance security measures and enable personalized interactions in various applications such as access control and user authentication.',
        line3: 'Additionally, I have continually invested in my professional development, completing courses in cloud computing and participating in workshops on UI/UX design and Python programming.With a strong foundation in technology and a passion for innovation, I am eager to bring my skills and expertise to a dynamic team, contributing to the advancement of cutting-edge projects while continuously growing and learning in the process.'
    }

    return <section className='flex flex-col md:flex-row bg-primary p-[30px] ' id='about'>
        <div className='p-[50px] md:w-1/3'>
            <img src={AboutImg} />
        </div>
        <div className='pr-[100px] md:w-3/4 flex justify-center'>
            <div className='flex flex-col justify-center text-black'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}