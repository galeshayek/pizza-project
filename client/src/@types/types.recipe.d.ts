export type ICreateRecipe = {
  title: string;
  description: string;
  info: {
    amount: number;
    time: string;
    level: string;
    portions: number;
    category: string;
  };
  ingredients: string[];
  method: string;
};

export type IRecipe = {
    _id: string;
    title: string;
    description: string;
    user: {
        image: string;
        firstName: string;
        lastName: string;
        _id: string;
    };
    info: {
        amount: number;
        time: string;
        level: string;
        portions: number;
        category: string;
        _id: string;
    };
    ingredients: string[];
    method: string;
    userId: string;
    createdAt: string;
    image: string;
    updatedAt: string;
    __v: number;
};
