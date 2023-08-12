'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ENGAGE_IMG } from '@/const';
import ToggleRight from '@/public/gif/toggle-right.gif';

import json from '@/json/footer-service.json';

interface FooterEntity {
  id: string;
  group: string;
  site: string;
  site_sub: string;
  site_url: string;
  site_alt: string;
  site_image: string;
}

export const Footer = () => {
  const NONE = 'none';
  const BLOCK = 'block';

  // 求職者様向け求人サービス 表示可否
  const [displayRecruiter, setDisplayRecruiter] = useState(NONE);

  // 企業様向けサービス 表示可否
  const [displayCompany, setDisplayCompany] = useState(NONE);

  const showRecruiterFlgClick = () => {
    if (displayRecruiter === NONE) {
      setDisplayRecruiter(BLOCK);
    } else {
      setDisplayRecruiter(NONE);
    }
  };

  const showCompanyFlgClick = () => {
    if (displayCompany === NONE) {
      setDisplayCompany(BLOCK);
    } else {
      setDisplayCompany(NONE);
    }
  };

  const recruiterHeight = () => {
    return displayRecruiter === BLOCK ? '100%' : '0px';
  };

  const companyHeight = () => {
    return displayCompany === BLOCK ? '100%' : '0px';
  };

  // SP表示
  const SpFooterArea = () => {
    return (
      <ul className="mt-2 flex flex-wrap justify-center">
        <li className="icon-alert-circle_gray mt-3 w-[45%] text-[10px] hover:text-[#f70]">
          <Link href="">ヘルプ・お問い合わせ</Link>
        </li>
        <li className="icon-alert-circle_gray mt-3 w-[45%] text-[10px] hover:text-[#f70]">
          <Link href="">プライバシーポリシー・ご利用規約</Link>
        </li>
        <li className="icon-alert-circle_gray mt-3 w-[45%] text-[10px] hover:text-[#f70]">
          <Link href="">サイトマップ</Link>
        </li>
        <li className="icon-alert-circle_gray mt-3 w-[45%] text-[10px] hover:text-[#f70]">
          <Link href="">運営会社</Link>
        </li>
        <li className="icon-alert-circle_gray mt-3 w-[90%] text-[10px] hover:text-[#f70]">
          <Link href="">求人掲載（無料）について</Link>
        </li>
      </ul>
    );
  };

  // PC表示
  const PcFooterArea = () => {
    const JobSeekerList: FooterEntity[] = [];
    const CompanyList: FooterEntity[] = [];

    json.forEach((entity) => {
      if (entity.group === 'JobSeeker') {
        JobSeekerList.push(entity);
      } else if (entity.group === 'Company') {
        CompanyList.push(entity);
      }
    });

    return (
      <>
        <div className="flex justify-center">
          <ul className="mt-2 flex w-[70%] flex-wrap justify-center">
            <li className="mt-3 flex w-[15%] justify-center text-[10px] hover:text-[#f70]">
              <Link href="">ヘルプ・お問い合わせ</Link>
            </li>
            <li className="mt-3 flex justify-center border-l-2 border-solid border-[#CCC] px-2 text-[10px] hover:text-[#f70]">
              <Link href="">プライバシーポリシー・ご利用規約</Link>
            </li>
            <li className="mt-3 flex justify-center border-l-2 border-solid border-[#CCC] px-2 text-[10px] hover:text-[#f70]">
              <Link href="">サイトマップ</Link>
            </li>
            <li className="mt-3 flex justify-center border-l-2 border-solid border-[#CCC] px-2 text-[10px] hover:text-[#f70]">
              <Link href="">運営会社</Link>
            </li>
            <li className="mt-3 flex justify-center border-l-2 border-solid border-[#CCC] px-2 text-[10px] hover:text-[#f70]">
              <Link href="">求人掲載（無料）について</Link>
            </li>
          </ul>
        </div>
        <div className="flex hidden flex-col items-center md:flex">
          <div className="mt-8 w-7/12 border-y-2 border-solid bg-[#f4f4f4] pl-2.5 text-sm font-bold">
            【エン・ジャパングループ】サービス一覧
          </div>
          <div className="flex h-8 w-7/12 cursor-pointer border-b border-solid pl-5 text-xs hover:bg-[#FFFFEE]">
            <div className="flex items-center" onClick={showRecruiterFlgClick}>
              求職者様向け求人サービス
              <Image src={ToggleRight} alt="" width={10} height={10} className="ml-3" />
            </div>
            <div
              style={{
                height: `${recruiterHeight()}`,
                display: `${displayRecruiter}`,
              }}
            >
              {JobSeekerList.map((entity, index: number) => (
                <li
                  key={index}
                  className="flex list-none border-b border-solid p-2.5 text-xs text-gray-600 last:border-0"
                >
                  <Image
                    src={entity.site_image}
                    alt={entity.site_alt}
                    width={110}
                    height={26}
                    className="mx-auto"
                  />
                  <div>
                    <Link href="/" className="flex">
                      <span className="ml-2.5 flex items-center justify-center">{entity.site}</span>
                    </Link>
                    <span className="ml-2.5 flex items-center justify-center text-[10px]">
                      {entity.site_sub}
                    </span>
                  </div>
                </li>
              ))}
            </div>
          </div>
          <div className="flex h-8 w-7/12 cursor-pointer border-b border-solid pl-5 text-xs hover:bg-[#FFFFEE]">
            <div className="flex items-center" onClick={showCompanyFlgClick}>
              企業様向けサービス
              <Image src={ToggleRight} alt="" width={10} height={10} className="ml-3" />
            </div>
            <div
              style={{
                height: `${companyHeight()}`,
                display: `${displayCompany}`,
              }}
            >
              {CompanyList.map((entity, index: number) => (
                <li
                  key={index}
                  className="flex list-none border-b border-solid p-2.5 text-xs text-gray-600 last:border-0"
                >
                  <Image
                    src={entity.site_image}
                    alt={entity.site_alt}
                    width={110}
                    height={26}
                    className="mx-auto"
                  />
                  <div>
                    <Link href="/" className="flex">
                      <span className="ml-2.5 flex items-center justify-center">{entity.site}</span>
                    </Link>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <footer className="h-full w-full border-t border-solid bg-white py-10">
      <div className="relative mx-auto h-[28px] w-[178px]">
        <Image
          src={ENGAGE_IMG}
          alt="engage Logo"
          fill={true}
          priority={true}
          sizes="(max-width: 178px),
              (max-height: 28px)"
        />
      </div>
      <div className="md:hidden">
        <SpFooterArea />
      </div>
      <div className="hidden md:block">
        <PcFooterArea />
      </div>
      <div>
        <small className="mt-8 flex justify-center text-[10px]">
          Copyright © 2021 en Japan Inc. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};
