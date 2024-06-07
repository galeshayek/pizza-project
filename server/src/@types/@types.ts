import { Role } from "./enums"

export type IJWTPayload = {
  _id: string,
  role: Role
}
