import type { Category } from '@/types';

type Props = {
  list: Array<Category>;
};

export const LinkTitleAndSubtitle = (props: Props) => {
  const { list } = props;

  return (
    <ul>
      {list.map((entity, index) => (
        <li
          key={index}
          className="relative cursor-pointer border-t border-solid px-5 py-4 text-xs font-bold text-gray-600"
        >
          <div className="icon-arrow_right_category relative">
            <div className="hover:hover-orange-1 relative w-11/12 font-bold">
              {entity.categoryTitle}
            </div>
            <div className="text-[10px] text-gray-500">{entity.subTitle}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};
