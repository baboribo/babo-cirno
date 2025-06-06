import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", height: '100%' }}>
      <Link href="https://youtu.be/JDpkvycpqaQ?si=P1uaI-GzTUx_KxlJ">
        <Image src="/baka.png" width={400} height={400} alt="Baka Cirno" className='rounded-xl' />
      </Link>
    </div>
  );
}