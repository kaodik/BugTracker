interface ProductName {
  id: number;
  name: string;
}

type ProductNameState = {
  ProductNames: ProductName[];
};

type ProductNameAction = {
  type: string;
  ProductName: ProductName;
};

type DispatchType = (args: ProductNameAction) => ProductNameAction;
