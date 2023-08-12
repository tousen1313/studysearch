import type { Category } from '@/types';

import { LinkTitle } from '@/app/components/SideBar/Template/LinkTitle';
import { SideHead } from '@/app/components/SideBar/Template/SideHead';

type Props = {
  title: string;
  list: Array<Category>;
};

export const LinkTitleList = (props: Props) => {
  const { title, list } = props;
  return (
    <aside className="mb-5 rounded-2xl border-4 border-solid border-white bg-white shadow-md">
      <SideHead title={title} />
      <nav>
        <LinkTitle list={list} />
      </nav>
    </aside>
  );
};
