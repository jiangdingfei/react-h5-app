import API from 'utils/request'

export function getCity(params) {
  return API({
    url: '/area/city',
    method: 'get',
    params
  })
}