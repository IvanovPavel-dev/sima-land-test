export type CategoryImageType = {
  height: number;
  id: string;
  url: string;
  width: number;
};

export type CategoryType = {
  id: string;
  name: string;
  description: string;
  image: CategoryImageType;
 
};
