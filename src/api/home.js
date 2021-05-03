import { post } from '@/common/request'
import { get } from '@/common/request'

export const home = (data, config) => {
  return post('aaa', data, config)
}

export const home1 = (data, config) => {
  return get('bbb', data, config)
}
