export type Ilogin = {
    email: string,
    password: string,
}

export type Iregister = {
  name: {
    first: string;
    last: string;  
  };
  email: string;   
  phone: string;    
  password: string;
};