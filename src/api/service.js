import request from './request'

function service(url, method) {
  return (data) =>
    request.request({
      url,
      method,
      data
    })
}

export const post = (url) => service(url, 'POST')
export const get = (url) => service(url, 'GET')
