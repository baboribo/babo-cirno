import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", height: '100%' }}>
      {/* <Link href="https://youtu.be/JDpkvycpqaQ?si=P1uaI-GzTUx_KxlJ">
        <Image src="/baka.png" width={400} height={400} alt="Baka Cirno" className='rounded-xl' />
      </Link> */}
      <iframe
        src="https://www.youtube.com/embed/JDpkvycpqaQ?si=P1uaI-GzTUx_KxlJ"
        title="YouTube video player"
        className='rounded-xl'
        style={{ width: '100%', height: '500px', maxWidth: '800px', marginTop: '20px' }}
        allow="accelerometer; autoplay; subtitle; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </div>
  );
}