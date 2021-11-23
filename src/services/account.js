export const loginService = ({ username = '', password = '' } = {}) => {
  return {
    url: '/login',
    method: 'post',
    data: {
      username,
      password,
    },
  }
}

export const accountInfoService = () => {
  return {
    url: '/account',
    method: 'get',
  }
}
