export type IUser = {
  name: {
    first: string;
    last: string;
    _id: string;
  };
  email: string;
  phone: string;
  image: string;
  role: number;
  favorites: string[];
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type IUpdateUser = {
  
  name: {
    first: string
    last: string
  },
  phone: string,
}

export type IUploadImg = {
  image: FileList
}

export type IRoleChange = {
    set: string
}