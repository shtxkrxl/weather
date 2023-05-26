import Image from 'next/image';
import background from '../../public/background.jpg';

const Background = () => {
  return (
    <div className='pointer-events-none fixed z-[-1] h-screen w-screen scale-[1.1] select-none blur'>
      <Image
        src={background}
        alt='Background image'
        fill
        style={{ objectFit: 'cover' }}
        quality={15}
      />
    </div>
  );
};

export default Background;
