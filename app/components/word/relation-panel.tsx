import Link from 'next/link';

const List = ['hoge', 'fuga', 'piyo'];

export const RelationPanel = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <h2 className="flex items-center px-2.5 py-2 text-xl font-semibold">
          他の人はこんな検索をしています
        </h2>
      </div>
      <div className="my-8">
        {List.map((value) => (
          <Link
            className="icon-tag_mid_search mx-2.5 mb-2.5 cursor-pointer rounded-md border-2 border-slate-200 bg-white px-2 py-2 text-xs hover:relative hover:bottom-px hover:text-hover-orange-1 hover:shadow-md"
            key={value}
            href={`/${value}`}
          >
            {value}
          </Link>
        ))}
      </div>
    </>
  );
};
