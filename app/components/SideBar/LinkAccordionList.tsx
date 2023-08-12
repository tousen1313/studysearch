import type { Category } from '@/types';

import { AccordionLinkTitle } from '@/app/components/SideBar/Template/AccordionLinkTitle';
import { SideHead } from '@/app/components/SideBar/Template/SideHead';

type Props = {
  title: string;
  list: Array<Category>;
};

export const LinkAccordionList = (props: Props) => {
  const { title, list } = props;
  return (
    <aside className="mb-5 rounded-2xl border-4 border-solid border-white bg-white shadow-md">
      <SideHead title={title} />
      <nav>
        <ul>
          {list.map((entity, index) => (
            <li
              key={index}
              className="relative flex cursor-pointer border-t border-solid px-5 py-4 text-xs font-bold text-gray-600"
            >
              <AccordionLinkTitle entity={entity} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
