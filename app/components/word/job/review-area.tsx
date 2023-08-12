import { StarFillIcon, StarHalfIcon } from '@/components/icon';

export const ReviewArea = () => {
  return (
    <div className="rounded-b-2xl border-solid border-white bg-gray-1 shadow-md">
      <div className="icon-arrow_right_job_panel relative p-3.5">
        <div className="flex items-center">
          <StarFillIcon className="text-red-1" />
          <StarFillIcon className="text-red-1" />
          <StarFillIcon className="text-red-1" />
          <StarHalfIcon className="text-red-1" />
          <StarFillIcon className="text-silver-1" />
          <span className="mx-2.5 text-lg text-red-1">1.0</span>(
          <span className="icon-review_job_panel text-gray-2">1件の口コミ</span>)
        </div>
        <span className="text-sm text-gray-3">
          株式会社エン・ジャパン の評判スコア
          <span>(by en Lighthouse)</span>
        </span>
        <div></div>
      </div>
    </div>
  );
};
