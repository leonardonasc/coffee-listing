import background from '/public/assets/imgs/bg-cafe.jpg';
import Image from 'next/image';

export default function Banner() {
  return (
      <Image src={background} alt="café bg" className="w-full"/>
  )
}