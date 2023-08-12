'use client';

import type { FC } from 'react';

import {
  ArrowRightIcon,
  CircleIcon,
  CloseIcon,
  LogoutIcon,
  OfferIcon,
  PaperRightIcon,
  SearchIcon,
  UserIcon,
} from '@/components/icon';

type Props = {
  right: string;
  opacity: string;
  closeMyMenuDrawer(): void;
};

type MenuSectionProps = {
  title: string;
  items: MenuDetailsSectionProps[];
};

type MenuDetailsSectionProps = {
  icon?: FC<{ className: string }>;
  label: string;
};

type KeepSearchSectionProps = {
  searchWords: Array<string>;
};

export const MyMenuDrawer = (props: Props) => {
  const { opacity } = props;
  const display = opacity == '1' ? 'block' : 'none';

  return (
    <>
      <div
        className="fixed top-0 h-full w-full bg-[rgba(30,35,47,.8)]"
        style={{
          display: `${display}`,
        }}
        onClick={props.closeMyMenuDrawer}
        onTouchMove={props.closeMyMenuDrawer}
      ></div>
      <div
        className="fixed top-0 h-full w-[calc(100%_-_70px)] bg-white-1 font-sans md:w-96"
        style={{
          right: `${props.right}px`,
        }}
      >
        <KeepSearchSection searchWords={SEARCH_WORD_LIST} />
        <div className="flex h-10 items-center justify-center border-b border-solid bg-gray-1">
          <a className="flex" href="/">
            <span className="text-xs font-bold">保存条件の一覧へ</span>
            <ArrowRightIcon className="ml-[2px] mt-[3px] h-[10px]" />
          </a>
        </div>
        <MenuSection {...MEMBER_FEATURES} />
        <MenuSection {...OTHERS_FEATURES} />
        <div
          className="absolute left-[-60px] top-[calc(48%)] cursor-pointer"
          onClick={props.closeMyMenuDrawer}
        >
          <CloseIcon className="absolute left-[2px] top-[1px] h-8 w-8 text-white-1" />
          <CircleIcon className="absolute top-0 h-9 w-9 fill-none" />
        </div>
      </div>
    </>
  );
};

const KeepSearchSection = (props: KeepSearchSectionProps) => {
  const { searchWords } = props;
  return (
    <>
      <div className="relative">
        <span className="absolute left-2 top-3 h-4 w-1 bg-red-1" />
        <h2 className="flex h-10 items-center border-b border-solid pl-5 text-sm font-semibold">
          保存した検索条件
        </h2>
      </div>
      {searchWords.map((searchWord, index: number) => (
        <div key={index} className="relative mt-2 h-12 truncate border-b border-solid pl-2 pr-16">
          <a href="/" className="text-[15px]">
            <SearchIcon className="mb-4 mr-1 mt-3 inline text-red-1" />
            {searchWord}
            <ArrowRightIcon className="absolute right-2 top-4 text-[9px]" />
          </a>
        </div>
      ))}
    </>
  );
};

const MenuSection = (props: MenuSectionProps) => {
  const { title, items } = props;
  return (
    <>
      <div className="relative">
        <span className="absolute left-2 top-3 h-4 w-1 bg-red-1" />
        <h2 className="flex h-10 items-center border-b border-solid pl-5 text-sm font-semibold">
          {title}
        </h2>
      </div>
      {items.map((item: MenuDetailsSectionProps, index: number) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="relative flex h-12 w-full items-center border-b border-solid bg-white text-[15px]"
          >
            <a className="flex" href="/">
              {Icon !== undefined && <Icon className="ml-[10px] h-5 w-5 font-bold text-red-1" />}
              <span className="ml-[10px]">{item.label}</span>
              <ArrowRightIcon className="absolute right-2 ml-1 mt-2 text-[9px]" />
            </a>
          </div>
        );
      })}
    </>
  );
};

// apiから取得した内容を表示する（仮データ）
const MEMBER_FEATURES: MenuSectionProps = {
  title: '会員機能',
  items: [
    { icon: PaperRightIcon, label: 'エンゲージ履歴書' },
    { icon: OfferIcon, label: 'メール・オファー受信設定' },
    { icon: UserIcon, label: 'アカウント設定' },
    { icon: LogoutIcon, label: 'ログアウト' },
  ],
};

// apiから取得した内容を表示する（仮データ）
const OTHERS_FEATURES: MenuSectionProps = {
  title: 'その他',
  items: [
    { icon: undefined, label: 'ヘルプ・お問い合わせ' },
    { icon: undefined, label: '規約・ポリシー' },
    { icon: undefined, label: 'サイトマップ' },
  ],
};

// apiから取得した内容を表示する（仮データ）
const SEARCH_WORD_LIST: Array<string> = [
  '新潟県 新潟市 北区 / 10km以内 / 正社員 / 契約社員 / 新卒 / アルバイト・パート /インターンシップ',
  '東京都 / Web系 / 正社員',
];
