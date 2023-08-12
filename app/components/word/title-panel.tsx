import { TitleArea } from '@/app/components/word/title/title-area';

type Props = {
  keywordParams: Array<string>;
  areaParams: Array<string>;
};

export const TitlePanel = (props: Props) => {
  const { keywordParams, areaParams } = props;
  const keyword = keywordParams[0];
  let prefectures = '';
  let municipalities = '';

  // areaParams[('都道府県', '市', '区')];
  if (areaParams != undefined) {
    areaParams.forEach((areaParam, index) => {
      if (index == 0) {
        prefectures = areaParam;
      } else {
        municipalities = municipalities.concat(areaParam);
      }
    });
  }

  return (
    <div className="rounded-2xl border-solid bg-red-1">
      <div className="flex items-center justify-center py-3 font-semibold text-white">
        キーワードで探した求人
      </div>
      <TitleArea keyword={keyword} prefectures={prefectures} municipalities={municipalities} />
      <div className="h-[20px]" />
    </div>
  );
};
