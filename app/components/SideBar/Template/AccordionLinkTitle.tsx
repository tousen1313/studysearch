'use client';

import { useState } from 'react';

import type { Category } from '@/types';

type Props = {
  entity: Category;
};

export const AccordionLinkTitle = (props: Props) => {
  const [showAreaDetail, setShowAreaDetail] = useState(false);

  const onToggleChildren = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setShowAreaDetail(!showAreaDetail);
  };

  // 親要素のイベントを発火させないようにする
  const onClickStopPropagation = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const { entity } = props;

  return (
    <div className="relative w-full" onClick={onToggleChildren}>
      <div
        className="icon-arrow_under_category absolute right-0"
        style={iconReverseStyle(showAreaDetail)}
      />
      {entity.categoryTitle}
      {entity.subTitle && <div className="text-[10px] text-gray-500">{entity.subTitle}</div>}
      <div style={areaDetailStyle(showAreaDetail, entity)}>
        <ul>
          {entity.subCategoryList &&
            entity.subCategoryList.map((entity, index: number) => (
              <div key={index}>
                <div
                  className="icon-indent_accordion icon-arrow_right_category_accordion relative w-full py-2.5 hover:text-hover-orange-1"
                  onClick={onClickStopPropagation}
                >
                  {entity.subCategoryTitle}
                </div>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

const areaDetailStyle = (showAreaDetail: boolean, entity: Category) => {
  return {
    height:
      showAreaDetail && entity.subCategoryList ? `${entity.subCategoryList.length * 38}px` : '0px',
    overflow: 'hidden',
    transition: '0.5s ease-out',
  };
};

const iconReverseStyle = (showAreaDetail: boolean) => {
  return {
    transition: '0.5s ease-out',
    transform: showAreaDetail ? 'rotate(180deg)' : 'rotate(0deg)',
  };
};
