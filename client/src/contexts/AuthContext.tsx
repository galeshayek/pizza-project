/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createContext, useEffect, useState } from "react";
import { AuthContextType, FCC, JwtDecodeType } from "../@types/types";
import { jwtDecode } from "jwt-decode";
import { userService } from "../service/users";
import { IUser } from "../@types/types.user";

const defaultUser: IUser = {
  name: {
    first: "",
    last: "",
    _id: "",
  },
  email: "",
  phone: "",
  image: "",
  role: 0,
  favorites: [],
  _id: "",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  __v: 0,
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  role: 0,
  user: {},
  // @ts-ignore
  login: (jwt: string) => {},
  logout: () => {},
});
export const AuthProvider: FCC = ({ children }) => {
  const token = localStorage.getItem("jwt");
  const [isLoggedIn, setLogin] = useState(false);
  const [role, setRole] = useState(0);
  const [user, setUser] = useState<IUser>(defaultUser);

  useEffect(() => {
    if (token) {
      setLogin(true);
      const decoded: JwtDecodeType = jwtDecode(token);
      localStorage.setItem("id", decoded._id);
      userService
        .getUserById(decoded._id, token)
        .then((user) => {
          setUser(user.data);
        })
        .catch((e) => console.log(e));
      setRole(decoded.role);
    }
  }, []);

  const login = (jwt: string) => {
    setLogin(true);
    const decoded: JwtDecodeType = jwtDecode(jwt);
    setRole(decoded.role);
    localStorage.setItem("id", decoded._id);
    userService
      .getUserById(decoded._id, jwt)
      .then((user) => {
        setUser(user.data);
      })
      .catch((e) => console.log(e));
    localStorage.setItem("jwt", jwt);
  };

  const logout = () => {
    setLogin(false);
    setRole(0);
    localStorage.removeItem("id");
    setUser(defaultUser);
    localStorage.removeItem("jwt");
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, role, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
