export type CategoryType = {
  id: number;
  name: string;
  slug: string;
  details: string;
  image?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  subcategories?: {
    id: number;
    name: string;
    details: string;
    slug: string;
  }[];
};

export type Product = {
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  rating: number;
};

export type Brand = {
  image: string;
  alt: string;
};

// product details
export type ImageCollectionType = {
  default: string;
  colorImages: {
    [color: string]: string; // Dynamic keys for color names
  };
  thumbnailImages: string[];
};

export type ColorOptionType = {
  name: string;
  hex: string;
};

export type SpecificationType = {
  brand: string;
  name: string;
  model: string;
  chargingInterface: string;
  callingFeatures: string;
  batteryCapacity: string;
  material: string;
  chargingTime: string;
  chipset: string;
  memory: string;
  os: string;
  display: string;
  sweatAndWaterResistance: string;
  batteryLife: string;
  otherFeatures: string[];
};

export type WarrantyType = {
  support: string;
  policy: string;
};

export type DescriptionType = {
  productName: string;
  productModel: string;
  productDescription: string;
  features: string[];
  priceInBangladesh: string;
  whereToBuy: string;
};

export type ProductDetailsType = {
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  status: string;
  proBookAmount: number;
  productCode: string;
  images: ImageCollectionType;
  colors: ColorOptionType[];
  specification: SpecificationType;
  warranty: WarrantyType;
  description: DescriptionType;
};

export type OfferItem = {
  id: number;
  title: string;
  dateRange: string;
  description: string;
  image: string;
};
