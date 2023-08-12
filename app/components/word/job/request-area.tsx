import { HeartIcon, SendIcon } from '@/components/icon';

export const RequestArea = () => {
  return (
    <div className="my-2.5 w-full bg-white">
      <div className="m-auto flex w-5/6">
        <LikeButton />
        <a
          href="/"
          className="relative mx-2.5 flex w-full max-w-sm items-center justify-center rounded-full border-2 bg-red-1 py-2.5 text-xl font-bold text-white"
        >
          <SendIcon className={SendIconClassName} />
          応募する
        </a>
      </div>
    </div>
  );
};

const LikeButton = () => {
  return (
    <button className="mx-2.5 flex w-20 items-center justify-center rounded-full border-2 border-slate-200 bg-white py-1 text-2xl md:w-3/5">
      <div className="relative flex flex-col items-center md:hidden">
        <HeartIcon className={SpHeartIconClassName} />
        <span className="mt-6 text-xs">いいね</span>
      </div>
      <div className="hidden md:flex">
        <HeartIcon className={MdHeartIconClassName} />
        いいね！
      </div>
    </button>
  );
};

const SendIconClassName = 'mr-1';
const SpHeartIconClassName = 'text-red-1 block h-6 w-6 absolute right-[7px]';
const MdHeartIconClassName = 'text-red-1 m-auto mr-1';
