'use client';

import { usePathname } from 'next/navigation';

import { BreadcrumbList } from './breadcrumb-list';

export const Breadcrumb = () => {
  const currentPath: string = usePathname();
  return <BreadcrumbList currentPath={currentPath} />;
};
