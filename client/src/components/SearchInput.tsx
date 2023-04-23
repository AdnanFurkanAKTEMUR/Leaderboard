import { useState } from 'react'
interface searchQuery {
  query: string
}

export default function SearchInput(props: any) {
  const [query, setQuery] = useState<searchQuery>({ query: '' })
  const onChange = (e: any) => {
    e.preventDefault()
    setQuery({ ...query, [e.target.name]: e.target.value })
  }
  const onSubmit = (e: any) => {
    props.fetchUsers({
      variables: {
        input: {
          start: 0,
          end: 0,
          query: query.query
        }
      }
    })
  }
  return (
    <>
      <form className="w-full">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input name="query" onChange={onChange} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="search name" aria-label="Full name" />
          <button onClick={onSubmit} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
            Search
          </button>
        </div>
      </form>
    </>
  )
}