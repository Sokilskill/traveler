import { clientFetch } from '../clientFetch'
import { router } from '../../router'

export const TOKEN_KEY = 'token'

class AuthService {
  #token = null

  constructor() {
    this.#token = localStorage.getItem(TOKEN_KEY)
  }

  isLoggedIn() {
    return Boolean(this.#token)
  }

  getToken() {
    return this.#token
  }

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
    this.#token = token
  }

  clearToken() {
    this.#token = null
    localStorage.removeItem(TOKEN_KEY)
  }

  async login(body) {
    const { data } = await clientFetch.post('/user/login', body)
    const { accessToken } = data

    this.setToken(accessToken)
  }

  async registerUser(body) {
    const { data } = await clientFetch.post('/user/register', body)
    const { accessToken } = data

    this.setToken(accessToken)
  }

  async logout() {
    await clientFetch.get('/user/logout')

    this.clearToken()
  }

  async refresh() {
    try {
      const { data } = await clientFetch.get('/user/refresh')
      const { accessToken } = data
      this.setToken(accessToken)
      return accessToken
    } catch (e) {
      this.clearToken()
      throw e
    }
  }
}

export const authService = new AuthService()

clientFetch.interceptors.request.use((request) => {
  const token = authService.getToken()

  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`
    }
  }

  return request
})

clientFetch.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorCode = error.response.status
    console.log('errorCode', errorCode)
    if (errorCode === 401) {
      try {
        await authService.refresh()
        return clientFetch(error.config)
      } catch (e) {
        console.log('e', e)
        authService.clearToken()
        router.push('/auth/login')
        return Promise.reject(e)
      }
    }

    return Promise.reject(error)
  }
)
