import Link from 'next/link';

import { TagLeftIcon } from '@/components/icon';
import type { BaseKeywordsResource } from '@/types';

type Props = BaseKeywordsResource;

export const BaseKeywords = (props: Props) => {
  const { keywords } = props;
  return (
    <div>
      <div className="flex items-center">
        <TagLeftIcon className="mr-1 h-5 w-5 text-red-1" />
        <h2 className="flex items-center py-2 text-xl font-semibold">求人検索</h2>
      </div>
      <div className="my-6 text-center">
        {keywords.map((keyword: string, index: number) => (
          <Link key={index} href={`/${keyword}` + 'の求人'}>
            <div className="mx-2 mb-2 inline-flex cursor-pointer rounded-md border-2 border-slate-200 bg-white px-2 py-1 text-xs hover:text-hover-orange-1 ">
              <TagLeftIcon className="mr-1 text-red-1" />
              {keyword}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
