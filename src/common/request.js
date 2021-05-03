import axios from 'axios'

const instance = axios.create({
  timeout: 30000 // 超时限制30秒
})

// 请求拦截
instance.interceptors.request.use(
  config => {
    // 配置通用参数
    console.log(config, '--------------1')
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截
instance.interceptors.response.use(
  response => {
    console.log(response, '--------------2')
    if (response) {
      // 响应处理
    }
    return response
  },
  error => {
    console.log(error, '--------------3')
    return Promise.reject(error.response.data)
  }
)

/**
 * get请求
 * @param url
 * @param params
 * @returns {Promise}
 */
export const get = (url, params = {}, config = {}) => {
  return instance.get(url, {
    params: params,
    ...config
  })
}

/**
 * post请求
 * @param url
 * @param params
 * @returns {Promise}
 */
export const post = (url, params = {}, config = {}) => {
  return instance.post(url, params, config)
}
