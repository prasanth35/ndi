import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const PartnerLogo = ({className}:{className?:string}) => {
  const logos: Array<{ key: string; url: string; displayPosition: number; hide: boolean }> = [
    { key: 'Boltshift', url: '/assets/svg/boltShift.svg', displayPosition: 1, hide: false },
    { key: 'Loghtbox', url: '/assets/svg/lightBox.svg', displayPosition: 2, hide: false },
    { key: 'FeatherDev', url: '/assets/svg/featherDev.svg', displayPosition: 3, hide: false },
    { key: 'Spherule', url: '/assets/svg/spherule.svg', displayPosition: 4, hide: false },
    { key: 'GlobalBank', url: '/assets/svg/globalBank.svg', displayPosition: 5, hide: false },
    { key: 'Nietzsche', url: '/assets/svg/nietzche.svg', displayPosition: 6, hide: false },
    { key: 'Epicurious', url: '/assets/svg/epicurious.svg', displayPosition: 7, hide: false },
    { key: 'Acme Corp', url: '/assets/svg/acmeCorp.svg', displayPosition: 8, hide: false },
    { key: 'PolyMath', url: '/assets/svg/polymath.svg', displayPosition: 9, hide: false },
  ];

  const row1 = logos.filter((logo) => logo.displayPosition <= 5 && !logo.hide);
  const row2 = logos.filter((logo) => logo.displayPosition > 5 && !logo.hide);

  return (
    <div className={cn(["space-y-4 mt-5 opacity-35",className])}>
      <Marquee pauseOnHover>
        {row1.map((logo) => (
          <Image
            height={100}
            width={150}
            key={logo.key}
            src={logo.url}
            alt={logo.key}
            className="mx-4"
          />
        ))}
      </Marquee>
      <Marquee pauseOnHover direction="right">
        {row2.map((logo) => (
          <Image
            height={100}
            width={150}
            key={logo.key}
            src={logo.url}
            alt={logo.key}
            className="mx-4"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default PartnerLogo;
