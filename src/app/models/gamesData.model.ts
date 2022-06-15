export interface KeyImage {
  type: string;
  url: string;
}

export interface Seller {
  id: string;
  name: string;
}

export interface Item {
  id: string;
  namespace: string;
}

export interface CustomAttribute {
  key: string;
  value: string;
}

export interface Category {
  path: string;
}

export interface CatalogNs {
  mappings: any[];
}

export interface CurrencyInfo {
  decimals: number;
}

export interface FmtPrice {
  originalPrice: string;
  discountPrice: string;
  intermediatePrice: string;
}

export interface TotalPrice {
  discountPrice: number;
  originalPrice: number;
  voucherDiscount: number;
  discount: number;
  currencyCode: string;
  currencyInfo: CurrencyInfo;
  fmtPrice: FmtPrice;
}

export interface LineOffer {
  appliedRules: any[];
}

export interface Price {
  totalPrice: TotalPrice;
  lineOffers: LineOffer[];
}

export interface DiscountSetting {
  discountType: string;
  discountPercentage: number;
}

export interface PromotionalOffer2 {
  startDate: Date;
  endDate: Date;
  discountSetting: DiscountSetting;
}

export interface PromotionalOffer {
  promotionalOffers: PromotionalOffer2[];
}

export interface Promotions {
  promotionalOffers: PromotionalOffer[];
  upcomingPromotionalOffers: any[];
}

export interface Current {
  title: string;
  id: string;
  namespace: string;
  description: string;
  effectiveDate: Date;
  offerType: string;
  expiryDate?: any;
  status: string;
  isCodeRedemptionOnly: boolean;
  keyImages: KeyImage[];
  seller: Seller;
  productSlug: string;
  urlSlug: string;
  url?: any;
  items: Item[];
  customAttributes: CustomAttribute[];
  categories: Category[];
  tags: any[];
  catalogNs: CatalogNs;
  offerMappings: any[];
  price: Price;
  promotions: Promotions;
}

export interface KeyImage2 {
  type: string;
  url: string;
}

export interface Seller2 {
  id: string;
  name: string;
}

export interface Item2 {
  id: string;
  namespace: string;
}

export interface CustomAttribute2 {
  key: string;
  value: string;
}

export interface Category2 {
  path: string;
}

export interface Tag {
  id: string;
}

export interface Mapping {
  pageSlug: string;
  pageType: string;
}

export interface CatalogNs2 {
  mappings: Mapping[];
}

export interface CurrencyInfo2 {
  decimals: number;
}

export interface FmtPrice2 {
  originalPrice: string;
  discountPrice: string;
  intermediatePrice: string;
}

export interface TotalPrice2 {
  discountPrice: number;
  originalPrice: number;
  voucherDiscount: number;
  discount: number;
  currencyCode: string;
  currencyInfo: CurrencyInfo2;
  fmtPrice: FmtPrice2;
}

export interface LineOffer2 {
  appliedRules: any[];
}

export interface Price2 {
  totalPrice: TotalPrice2;
  lineOffers: LineOffer2[];
}

export interface DiscountSetting2 {
  discountType: string;
  discountPercentage: number;
}

export interface PromotionalOffer3 {
  startDate: Date;
  endDate: Date;
  discountSetting: DiscountSetting2;
}

export interface UpcomingPromotionalOffer {
  promotionalOffers: PromotionalOffer3[];
}

export interface Promotions2 {
  promotionalOffers: any[];
  upcomingPromotionalOffers: UpcomingPromotionalOffer[];
}

export interface Upcoming {
  title: string;
  id: string;
  namespace: string;
  description: string;
  effectiveDate: Date;
  offerType: string;
  expiryDate?: any;
  status: string;
  isCodeRedemptionOnly: boolean;
  keyImages: KeyImage2[];
  seller: Seller2;
  productSlug: string;
  urlSlug: string;
  url?: any;
  items: Item2[];
  customAttributes: CustomAttribute2[];
  categories: Category2[];
  tags: Tag[];
  catalogNs: CatalogNs2;
  offerMappings: any[];
  price: Price2;
  promotions: Promotions2;
}

export interface FreeGames {
  current: Current[];
  upcoming: Upcoming[];
}

export interface GamesData {
  freeGames: FreeGames;
}
