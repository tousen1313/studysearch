import { Pagination } from '@/components/pagination';
import type { BaseKeywordsType } from '@/types';
import { objectToCamel } from 'ts-case-convert';

import { BaseKeywords } from '@/app/components/base-keywords';

import json from '@/json/base-words.json';

// base-keywords api
const baseKeywords: BaseKeywordsType = objectToCamel(json);

export default function Index() {
  return (
    <div className="w-full max-w-5xl">
      <BaseKeywords {...baseKeywords} />
      <Pagination {...baseKeywords.pageInfo} />
    </div>
  );
}
