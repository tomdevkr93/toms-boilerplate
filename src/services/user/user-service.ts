import { User } from '@/models/user'
import Service from '../Service'

class UserService extends Service {
  getUsers() {
    return this.http.get<User[]>(`/users`)
  }

  getUser(userId: number) {
    return this.http.get<User>(`/users/${userId}`)
  }
}

const userService = new UserService()
export default userService
