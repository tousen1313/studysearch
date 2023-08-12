'use client';

import ReactPaginate from 'react-paginate';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { ArrowLeftIcon, ArrowRightIcon } from '@/components/icon';
import type { PageInfoType } from '@/types';

type Props = PageInfoType;

export const Pagination = (props: Props) => {
  const { currentPage, lastPage } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // クエリパラメータにpage要素を追加します
  // page=1以下は表示しません
  const generateUrlForPage = (page: number) => {
    if (page <= 1) return pathname;
    const updatedParams = new URLSearchParams(Array.from(searchParams.entries()));
    updatedParams.set('page', String(page));
    return `${pathname}?${updatedParams.toString()}`;
  };

  const handlePageClick = (event: { selected: number }) => {
    // URL表示用に＋1
    const page = event.selected + 1;
    const url = generateUrlForPage(page);
    router.push(url);
  };

  return (
    <div className="flex w-full justify-center">
      <ReactPaginate
        pageCount={lastPage - 1}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        initialPage={currentPage - 1}
        breakLabel="..."
        previousLabel={<PrevButton />}
        nextLabel={<NextButton />}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
        containerClassName="flex"
        previousClassName="mr-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-1 md:w-40"
        previousLinkClassName="p-4"
        nextLinkClassName="p-4"
        nextClassName="mr-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-1 font-bold md:w-40"
        pageClassName="mr-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-1 font-bold"
        pageLinkClassName="p-4 w-full flex justify-center"
        activeClassName="mr-2 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-red-1 text-white"
        breakClassName="mr-2 mt-4 flex h-12"
        disabledClassName="bg-gray-3"
      />
    </div>
  );
};

const PrevButton = () => {
  return (
    <>
      <div className="relative hidden w-full font-bold md:flex">
        <ArrowLeftIcon className="absolute -left-4 top-2 text-[8px]" />
        <span className="text-base">前のページへ</span>
      </div>
      <div className="flex w-full justify-center font-bold md:hidden">
        <ArrowLeftIcon className="text-[8px]" />
      </div>
    </>
  );
};

const NextButton = () => {
  return (
    <>
      <div className="relative flex hidden w-full justify-center font-bold md:flex">
        <ArrowRightIcon className="absolute -right-4 top-2 text-[8px]" />
        <span className="text-base">次のページへ</span>
      </div>
      <div className="flex w-full justify-center font-bold md:hidden">
        <ArrowRightIcon className="text-[8px]" />
      </div>
    </>
  );
};
