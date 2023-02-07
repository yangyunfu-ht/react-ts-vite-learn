interface User {
  name: string,
  age?: number,
  phone?: string,
}

export default function getUserName(user: User): string {
  return "我是谁" + `${user.name}`;
}