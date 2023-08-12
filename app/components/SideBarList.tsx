import Image from 'next/image';

import type { SideAreaCategory, SideBarType } from '@/types';

import { LinkAccordionList } from '@/app/components/SideBar/LinkAccordionList';
import { LinkTitleList } from '@/app/components/SideBar/LinkTitleList';

import json from '@/json/side-area.json';

export const SideBarList = () => {
  const sideAreas: Array<SideAreaCategory> = json as Array<SideAreaCategory>;

  return (
    <div className="md:max-w-4/5">
      {sideAreas.map((entity, index: number) => (
        <div key={index}>
          {isSideBarLinkTitle(entity.type) ? (
            <LinkTitleList title={entity.title} list={entity.list} />
          ) : (
            <LinkAccordionList title={entity.title} list={entity.list} />
          )}
        </div>
      ))}
      <div className="relative cursor-pointer md:h-[75px] md:w-[250px]">
        <Image src="/lpBanner.png" alt="lpBanner" width={640} height={150} loading="lazy" />
      </div>
    </div>
  );
};

const isSideBarLinkTitle = (type: SideBarType): boolean => {
  return type === 'Employment' || type === 'Occupation' || type === 'Industry';
};
