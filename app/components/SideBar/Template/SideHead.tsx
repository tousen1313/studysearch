type Props = {
  title: string;
};

export const SideHead = (props: Props) => {
  const { title } = props;

  return <h2 className={'flex items-center p-1.5 pl-4 font-semibold'}>{title}</h2>;
};
