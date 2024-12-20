export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  role: "admin" | "player";
}

export interface AdminUser extends User {
  role: "admin";
  arcades: number[];
}

export const usersDatabase: (User | AdminUser)[] = [
  {
    id: 1,
    name: "Luis F Patrocinio",
    username: "patrocinio",
    email: "patrocinioluisf@gmail.com",
    password: "123456",
    role: "admin",
    arcades: [44],
  },
  {
    id: 2,
    name: "Joaquim",
    username: "joaquim",
    email: "joaquim@gmail.com",
    password: "123456",
    role: "player",
  },
];
