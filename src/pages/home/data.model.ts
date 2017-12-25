export class DataModel {
  categories: Array<DataItemModel>;
  banner_title: string;
  banner_image: string;
}

export class DataItemModel {
  id: number;
  title: string;
  icon: string;
  color: string;
}
