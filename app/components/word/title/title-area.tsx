type Props = {
  keyword: string;
  prefectures: string;
  municipalities: string;
};

export const TitleArea = (props: Props) => {
  const { keyword, prefectures, municipalities } = props;

  return (
    <div className="m-auto flex w-11/12 flex-col items-center justify-center rounded-2xl bg-white py-2">
      <TitleMainArea keyword={keyword} prefectures={prefectures} municipalities={municipalities} />
      <div className="w-11/12 border-t-2 border-solid pt-2">
        <TitleDetailArea
          keyword={keyword}
          prefectures={prefectures}
          municipalities={municipalities}
        />
        <a
          href="/"
          className="icon-search_titlePanel m-auto mt-3.5 flex w-3/4 max-w-sm justify-center rounded-3xl border-2 border-red-1 bg-white py-2.5"
        >
          条件を変更して探す
        </a>
      </div>
    </div>
  );
};

const TitleMainArea = (props: Props) => {
  const { keyword, prefectures, municipalities } = props;
  let mainArea;
  if (prefectures == '') {
    mainArea = (
      <>
        <h1 className="text-3xl font-bold">{keyword}</h1>
        <span className="mb-2 font-bold">の求人情報</span>
      </>
    );
  } else if (municipalities == '') {
    mainArea = (
      <>
        <h1 className="text-3xl font-bold">{keyword}</h1>
        <span className="text-3xl font-bold">×</span>
        <h1 className="text-3xl font-bold">{prefectures}</h1>
        <span className="mb-2 font-bold ">の求人情報</span>
      </>
    );
  } else {
    mainArea = (
      <>
        <h1 className="text-3xl font-bold">{keyword}</h1>
        <span className="text-3xl font-bold">×</span>
        <h1 className="text-3xl font-bold">{municipalities}</h1>
        <span className="mb-2 font-bold ">の求人情報({prefectures})</span>
      </>
    );
  }
  return mainArea;
};

const TitleDetailArea = (props: Props) => {
  const { keyword, prefectures, municipalities } = props;
  let areaDetail;
  if (prefectures == '') {
    areaDetail = <>エンゲージに掲載されている「{keyword}」の求人一覧です。</>;
  } else if (municipalities == '') {
    areaDetail = (
      <>
        エンゲージに掲載されている「{keyword}」× 「{prefectures}」の求人一覧です。
      </>
    );
  } else {
    areaDetail = (
      <>
        エンゲージに掲載されている「{keyword}」× 「{municipalities}」の求人一覧です。
      </>
    );
  }
  return areaDetail;
};
