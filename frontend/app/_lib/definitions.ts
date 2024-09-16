type Counter = {
  id: number,
  name: string,
  value: number,
  description: string,
  target: number,
  user_id: number,
  createdAt: string,
  updatedAt: string
}

type User = {
  id: number,
  firstname: string,
  lastname: string,
  email: string
}

interface InputFields {
  [key: string]: string;
}