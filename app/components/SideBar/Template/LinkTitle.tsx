import Link from 'next/link';

import type { Category } from '@/types';

type Props = {
  list: Array<Category>;
};

export const LinkTitle = (props: Props) => {
  const { list } = props;

  return (
    <ul>
      {list.map((entity, index) => (
        <li
          key={index}
          className="relative cursor-pointer border-t border-solid px-5 py-4 text-xs font-bold text-gray-600"
        >
          <Link
            className="icon-arrow_right_link_title block w-full hover:text-hover-orange-1"
            href="/"
          >
            {entity.categoryTitle}
          </Link>
          {entity.subTitle && <div className="text-[10px] text-gray-500">{entity.subTitle}</div>}
        </li>
      ))}
    </ul>
  );
};
