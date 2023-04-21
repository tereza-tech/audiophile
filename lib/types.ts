import { Control, FieldErrors } from "react-hook-form";

export type Category = "projectors" | "subwoofers" | "speakers" | "invisibass" | "rti" | "designspeakers";

export type CategoryLink = {
  category: Category;
  href: string;
  image: {
    src: string;
    width: string;
    height: string;
  };
};

export type ProductImage = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type IncludedItem = {
  quantity: number;
  item: string;
};

export type OtherProduct = {
  slug: string;
  name: string;
  image: ProductImage;
};

export type Message = {
  text: string;
}

export type Product = {
  id: number;
  slug: string;
  name: string;
  image: ProductImage;
  category: Category | string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: {
    first: ProductImage;
    second: ProductImage;
    third: ProductImage;
  };
  others: OtherProduct[];
};

export type Checkout = {
  name: "";
  email: "";
  phone: "";
  address: "";
  zip: "";
  city: "";
  country: "";
  paymentMethod: {};
  eMoneyNumber: "";
  eMoneyPin: "";
};

export type CheckoutProps = {
  control: Control<Checkout>;
  errors: FieldErrors<Checkout>;
};
