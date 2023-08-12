import Image from 'next/image';

import type { WorkDataResource } from '@/types';

type Props = {
  entity: WorkDataResource;
};

type PanelItemProps = {
  iconClass: string;
  mainText: string;
  subText: string;
};

export const JobDetailArea = (props: Props) => {
  const { entity } = props;

  return (
    <div className="relative m-auto table h-[200px] w-11/12 border-y-2 border-solid border-solid">
      <PanelItem
        iconClass="icon-yen_job_panel"
        mainText={entity.salary_index}
        subText={entity.salary_text}
      />
      <PanelItem
        iconClass="icon-map_job_panel"
        mainText={entity.offece_list[0].area_main}
        subText={entity.offece_list[0].area_secondary}
      />
      <PanelItem
        iconClass="icon-time_job_panel"
        mainText={entity.time_main}
        subText={convertTimeFeatures(entity.time_features)}
      />
      {entity.panel_image && (
        <div className="absolute right-0 top-5 h-[120px] w-[160px]">
          <Image src={entity.panel_image} alt="" fill={true} />
        </div>
      )}
      <div className="icon-arrow_under_job_detail flex h-14 items-center justify-center text-xs font-bold">
        仕事内容・応募資格を見る
      </div>
    </div>
  );
};

const PanelItem = (props: PanelItemProps) => {
  const { iconClass, mainText, subText } = props;
  return (
    <dl className="flex w-[70%] items-center py-2.5">
      <dt className={`${iconClass} table-cell text-4xl text-base text-black`} />
      <dd className="table-cell px-2.5 align-baseline">
        <div className="text-base font-black">{mainText}</div>
        <div className="text-xs">{subText}</div>
      </dd>
    </dl>
  );
};

// 勤務時間の表示整形
const convertTimeFeatures = (timeFeatures: string[]) => {
  let convertTimeFeaturesValue = '';
  timeFeatures.forEach((value, index) => {
    convertTimeFeaturesValue += value;

    if (timeFeatures.length - 1 != index) {
      convertTimeFeaturesValue += ' / ';
    }
  });
  return convertTimeFeaturesValue;
};
