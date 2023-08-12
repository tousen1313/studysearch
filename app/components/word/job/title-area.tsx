import type { WorkDataResource } from '@/types';

type Props = {
  entity: WorkDataResource;
};

type PastDaysProps = {
  past_days: string;
};

export const TitleArea = (props: Props) => {
  const { entity } = props;

  return (
    <div className="relative ml-5 overflow-hidden">
      <div className="mt-1 text-lg">
        <span className="icon-icon_people1_job_panel mr-2.5 mt-2 inline-block whitespace-pre rounded-md border-2 border-slate-200 bg-white p-1.5 text-xs font-bold text-black">
          {entity.employment_status}
        </span>
        {entity.recruitment_features.map((recruitmentTitle, recruitment_index) => (
          <span
            key={recruitment_index}
            className="mr-2.5 mt-2 inline-block whitespace-pre rounded-md border-2 border-slate-200 bg-white p-1.5 text-xs font-bold text-black"
          >
            {recruitmentTitle}
          </span>
        ))}
      </div>
      {entity.new_flg ? <NewBadge /> : <PastDays past_days={entity.past_days} />}
      <div className="mb-5 mt-2 text-xl font-bold">{entity.title}</div>
    </div>
  );
};

const NewBadge = () => {
  return (
    <div className="absolute -right-6 top-3 flex w-24 rotate-45 justify-center bg-red-1 text-sm text-white">
      NEW
    </div>
  );
};

const PastDays = (props: PastDaysProps) => {
  const { past_days } = props;
  return <div className="absolute right-4 top-4 w-16 text-center text-sm">{past_days}</div>;
};
