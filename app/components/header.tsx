'use client';

import { useState } from 'react';
import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  HeartIcon,
  HistoryIcon,
  HomeIcon,
  LoginIcon,
  MenuIcon,
  MessageIcon,
  OfferIcon,
  SearchIcon,
} from '@/components/icon';
import { ENGAGE_IMG } from '@/const';

import { MyMenuDrawer } from '@/app/components/my-menu-drawer';

type Props = {
  loginCheck: boolean;
};

type LoginMenuProps = {
  openMyMenuDrawer: () => void;
};

type HeaderAreaProps = {
  items: HeaderAreaDetailsProps[];
};

type HeaderAreaDetailsProps = {
  icon: FC<{ className: string }>;
  label: string;
  count: number;
};

type LikeAreaProps = {
  count: number;
};

export const Header = (props: Props) => {
  const { loginCheck } = props;

  const [menuRightPosition, setMenuRightPosition] = useState(MENU_HIDDEN_POSITION);
  const [menuOpacity, setMenuOpacity] = useState(MENU_HIDDEN_OPACITY);

  const openMyMenuDrawer = () => {
    setMenuRightPosition(MENU_VISIBLE_POSITION);
    setMenuOpacity(MENU_VISIBLE_OPACITY);
  };

  const closeMyMenuDrawer = () => {
    setMenuRightPosition(MENU_HIDDEN_POSITION);
    setMenuOpacity(MENU_HIDDEN_OPACITY);
  };

  return (
    <header className="fixed left-0 top-0 z-50 h-[50px] w-full border-b border-solid bg-white md:h-[70px]">
      <div className="flex h-full w-full items-center justify-start">
        <Link
          className="relative ml-[10px] h-[21.11px] w-[130px] md:ml-5 md:h-[33.29px] md:w-[205px]"
          href="/"
        >
          <Image
            src={ENGAGE_IMG}
            alt="engage Logo"
            fill={true}
            priority={true}
            sizes="(max-width: 205px),
            (max-height: 33px)"
          />
        </Link>
        <h1 className="relative top-[2.5px] ml-[5px] whitespace-pre-wrap text-[8px] leading-[1.2] md:top-[1.5px] md:ml-[15px] md:text-xs md:leading-[1.3]">{`求人企業数No.1\n社員・バイト求人サイト`}</h1>
        {loginCheck ? <HeaderArea {...loginFeatures} /> : <HeaderArea {...logoutFeatures} />}
        {loginCheck ? <LoginMenu openMyMenuDrawer={openMyMenuDrawer} /> : <LogoutMenu />}
        <MyMenuDrawer
          right={menuRightPosition}
          opacity={menuOpacity}
          closeMyMenuDrawer={closeMyMenuDrawer}
        />
      </div>
    </header>
  );
};

const HeaderArea = (props: HeaderAreaProps) => {
  const { items } = props;
  return (
    <nav className="absolute left-0 right-0 top-[50px] flex h-14 w-full items-center justify-around bg-white px-8 md:static md:top-[70px] md:ml-auto md:h-full md:w-auto md:border-y-0 md:pr-20 md:pt-0">
      <ul className="flex w-full justify-around">
        {items.map((item: HeaderAreaDetailsProps, index: number) => {
          const Icon = item.icon;
          return (
            <li
              key={index}
              className="relative mx-4 flex cursor-pointer justify-center font-semibold md:mx-2 md:mt-2"
            >
              {item.count !== 0 && <LikeArea count={item.count} />}
              <div className="flex w-14 text-xs font-thin">
                <Link href="/" className="w-full">
                  <Icon className="m-auto mb-[2px] h-5 w-5" />
                  <div className="flex justify-center text-[10px] md:mt-1">{item.label}</div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const LoginMenu = (props: LoginMenuProps) => {
  const { openMyMenuDrawer } = props;
  return (
    <div
      className="absolute right-0 top-2 mx-4 cursor-pointer text-[8px] md:top-4 md:mr-[26px]"
      onClick={openMyMenuDrawer}
    >
      <MenuIcon className="m-auto h-6 w-6" />
      <div className="md:mt-1">MYメニュー</div>
    </div>
  );
};

const LogoutMenu = () => {
  return (
    <div className="absolute right-0">
      <Link
        className="text-center text-[10px] font-thin leading-7 md:hidden md:text-[11px]"
        href="/user/login/"
      >
        ログイン
      </Link>
      <Link
        className="mx-2 inline-block h-[25px] w-auto rounded-3xl border border-[#222] px-[10px] text-center text-[10px] font-thin leading-6 md:mr-5 md:h-[29px] md:w-[72px] md:text-[11px] md:leading-7"
        href="/user/signup/"
      >
        会員登録
      </Link>
    </div>
  );
};

const LikeArea = (props: LikeAreaProps) => {
  const { count } = props;
  return (
    <div
      className={`absolute -top-2 right-1 flex h-5 w-auto min-w-[20px] items-center justify-center rounded-full border-0 bg-red-1 text-[8px] text-white shadow-md`}
    >
      <span className="w-full px-1">{count <= 99 ? count : '99+'}</span>
    </div>
  );
};

const MENU_HIDDEN_POSITION = '-800';
const MENU_VISIBLE_POSITION = '0';
const MENU_HIDDEN_OPACITY = '0';
const MENU_VISIBLE_OPACITY = '1';

const loginFeatures: HeaderAreaProps = {
  items: [
    { icon: HomeIcon, label: 'ホーム', count: 0 },
    { icon: HeartIcon, label: 'いいね', count: 98 },
    { icon: OfferIcon, label: 'オファー', count: 99 },
    { icon: MessageIcon, label: 'メッセージ', count: 100 },
  ],
};

const logoutFeatures: HeaderAreaProps = {
  items: [
    { icon: HomeIcon, label: 'ホーム', count: 0 },
    { icon: SearchIcon, label: '求人検索', count: 0 },
    { icon: HistoryIcon, label: '検索履歴', count: 0 },
    { icon: LoginIcon, label: 'ログイン', count: 0 },
  ],
};
