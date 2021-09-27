import axios from 'axios'

class Request {
  constructor() {
    // this.baseURL = ''
    this.timeout = 30000
  }

  setInterceptor = (instance) => {
    // instance.interceptors.request.use()
    instance.interceptors.response.use((res) => {
      return res.data
    })
  }

  handlerHeader = () => {}
  request(config) {
    const instance = axios.create()
    config = {
      timeout: this.timeout,
      // headers: this.handlerHeader(),
      // baseURL: this.baseURL,
      ...config
    }
    this.setInterceptor(instance)
    return instance(config)
  }
}

export default new Request()
