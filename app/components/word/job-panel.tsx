import type { WorkDataResource } from '@/types';

import { JobDetailArea } from '@/app/components/word/job/job-detail-area';
import { RequestArea } from '@/app/components/word/job/request-area';
import { ReviewArea } from '@/app/components/word/job/review-area';
import { TitleArea } from '@/app/components/word/job/title-area';

type Props = {
  jobPanel: WorkDataResource[];
};

export const JobPanel = (props: Props) => {
  const { jobPanel } = props;

  return (
    <div className="rounded-2xl border-transparent">
      <div className="ml-2 mt-4 flex　items-baseline">
        <span className="mr-1 text-xl font-bold text-red-1">9999</span>
        <span className="text-xs">件中</span>
        <span className="ml-2 mr-1 text-xl font-bold">10〜20</span>
        <span className="text-xs">件を表示</span>
      </div>
      {jobPanel.map((entity) => (
        <div
          key={entity.work_id}
          className="shadow-panel mb-6 rounded-2xl border-2 border-slate-200 bg-white"
        >
          <TitleArea entity={entity} />
          <JobDetailArea entity={entity} />
          <RequestArea />
          <ReviewArea entity={entity} />
        </div>
      ))}
    </div>
  );
};
