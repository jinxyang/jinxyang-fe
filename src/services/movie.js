export const movieListService = (params = {}) => {
  return {
    method: 'get',
    url: '/movies',
    params,
  }
}
