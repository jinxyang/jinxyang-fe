import React, { useRef, useState } from 'react'

import { Form } from '@jinxyang/components'
import { useFetch } from '@jinxyang/hooks'

import { movieListService } from 'services'

const filters = [
  {
    type: 'Input',
    key: 'name',
    label: 'name',
  },
]

const MovieList = () => {
  const filter = useRef(null)
  const [values, setValues] = useState({})
  const [{ loading, data }, fetchMovieList] = useFetch(movieListService)

  const handleSearch = () => {
    fetchMovieList(values)
  }

  if (loading) return 'loading'
  return (
    <div>
      <Form ref={filter} list={filters} values={values} onChange={setValues}>
        <button type="button" disabled={loading} onClick={handleSearch}>
          Search
        </button>
        <button
          type="button"
          disabled={loading}
          onClick={() => filter.current?.clear()}
        >
          clean
        </button>
      </Form>
      {[
        !data.list,
        !data?.list?.length && <p>暂无数据</p>,
        data?.list?.map(({ id, name }) => <p key={id}>{name}</p>),
      ].find(Boolean)}
    </div>
  )
}

export default MovieList
