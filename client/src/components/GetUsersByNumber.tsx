import { useState } from "react"

interface listUsers {
  start: number,
  end: number
}

export default function GetUsersByNumber(props:any) {
  const [listUsers, setListUsers] = useState<listUsers>({ end: 100, start: 1 })
  const onChange = (e: any) => {
    e.preventDefault()
    setListUsers({ ...listUsers, [e.target.name]: parseInt(e.target.value) })
  }

  const onSubmit = (e: any) => {
    props.fetchUsers({
      variables: {
        input: {
          start: listUsers.start,
          end: listUsers.end,
        }
      }
    })
  }
  return (
    <>
    <div className="flex items-center border-b border-teal-500 py-2">
    <input onChange={onChange} type="number" name="start" className="appearance-none w-full bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="start"/>
      <input onChange={onChange} type="number" name="end" className="appearance-none w-full bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="end"/>
      <button onClick={onSubmit} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">Search</button>
    </div>
      
    </>
  )
}