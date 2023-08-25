import Image from 'next/image';

export function Logo() {
  return (
    <div>
      <Image
        src={'/images/ee_logo.svg'}
        width={50}
        height={50}
        alt="eagle icon"
      />
    </div>
  );
}

export function LogoType() {
  return (
    <div className="">
      <Image
        src={'/images/ee_logo_type.svg'}
        width={100}
        height={30}
        alt="eagle icon"
      />
    </div>
  );
}
