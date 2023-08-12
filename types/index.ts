export type SideBarType = 'Employment' | 'Occupation' | 'Industry' | 'Area' | 'Feature' | 'Salary';

// TODO swaggerからinterfaceを吐き出して参照するように変更予定
export type SideArea = {
  list: Array<SideAreaCategory>;
};

export type SideAreaCategory = {
  type: SideBarType;
  title: string;
  categoryTitleLink: boolean;
  list: Array<Category>;
};

export type Category = {
  categoryTitle: string;
  subTitle?: string;
  subCategoryList?: Array<SubCategory>;
};

export type SubCategory = {
  subCategoryTitle: string;
  areas?: Array<Area>;
};

export type Area = {
  area_id: number;
  area_name: string;
  area_details: Array<AreaDetail>;
};

export type AreaDetail = {
  area_detail_id: number;
  area_detail_name: string;
};

export type WorkDataResource = {
  work_id: string;
  paid_flg: boolean;
  new_flg: boolean;
  past_days: string;
  int_past_days: number;
  update_date: string;
  title: string;
  employment_status: string;
  recruitment_features: string[];
  offece_list: [
    {
      area_main: string;
      area_secondary: string;
      area_remote: string;
    }
  ];
  time_main: string;
  time_features: string[];
  salary_index: string;
  salary_text: string;
  panel_image: string;
  url: string;
  work_es_site_review_flg: number;
  tsr_id: number;
  company_name: string;
  hyoban_score_total: string; //確認
  kuchikomi_count: string; //確認
  hyoban_url: string; //確認
};

export type BaseKeywordsType = {
  /**
   * 検索キーワード
   * @type {Array<string>}
   */
  keywords: Array<string>;
  /**
   *
   * @type {PageInfoType}
   */
  pageInfo: PageInfoType;
};

export type PageInfoType = {
  /**
   * 現在のページ
   * @type {number}
   */
  currentPage: number;
  /**
   * 前のページ
   * @type {number}
   */
  prevPage?: number | null;
  /**
   * 次のページ
   * @type {number}
   */
  nextPage?: number | null;
  /**
   * 最後のページ
   * @type {number}
   */
  lastPage: number;
};
