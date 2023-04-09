import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { User } from '@/types/users/user'
interface UsersStore {
  users: Ref<User[]>
  fetchUsers: () => void
  selectedUser: Ref<User>
  loading: Ref<boolean>
  searchValue: Ref<string>
}
const baseUrl: string = 'https://jsonplaceholder.typicode.com'

export const useUsersStore = defineStore('users', (): UsersStore => {
  const loading = ref(false)
  const selectedUser: Ref<User> = ref({
    name: '',
    phone: '',
    email: '',
    id: null
  })
  const searchValue = ref('')
  const users: Ref<User[] | []> = ref([])
  const fetchUsers = async () => {
    loading.value = true
    const { data } = await axios(`${baseUrl}/users`)
    users.value = data
    loading.value = false
  }
  return { fetchUsers, selectedUser, users, loading, searchValue }
})
