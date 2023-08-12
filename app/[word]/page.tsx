import { Suspense } from 'react';

import { Pagination } from '@/components/pagination';
import type { PageInfoType } from '@/types';

import { JobPanel } from '@/app/components/word/job-panel';
import { NotFound } from '@/app/components/word/not-found';
import { RelationPanel } from '@/app/components/word/relation-panel';
import { TitlePanel } from '@/app/components/word/title-panel';

type Props = {
  params: {
    word: string;
  };
};

// worksからpageInfoの情報が取れるまで仮実装
const pageDummy: PageInfoType = {
  currentPage: 5,
  prevPage: 4,
  nextPage: 6,
  lastPage: 10,
};

export default async function WorkPage(props: Props) {
  let { word } = props.params;
  word = decodeURI(word);
  const wordDataList = await getWorks(word);
  if (!wordDataList || wordDataList.works.length === 0) {
    return (
      <>
        <NotFound />
      </>
    );
  }
  return (
    <>
      <TitlePanel
        keywordParams={wordDataList.keyword_params}
        areaParams={wordDataList.area_params}
      />
      <JobPanel jobPanel={wordDataList.works} />
      <Suspense fallback={<div>🌀 Loading...</div>}>
        <Pagination {...pageDummy} />
      </Suspense>
      <RelationPanel />
    </>
  );
}

const getWorks = async (word: string) => {
  const tasks = await fetch(`${process.env.URL}/search2/api/get_work_data/${word}`).then((res) => {
    return res.json();
  });
  return tasks;
};
