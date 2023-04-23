import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { GET_ALL_EXAMPLES } from '@/apollo/resolvers/exampleResolvers/exampleResolvers'
import { GEL_ALL_USERS, PASS_WEEK } from '@/apollo/resolvers/userResolvers/userResolvers'
import { useEffect, useState } from 'react'
import UsersTable from '@/components/UsersTable'
import SearchInput from '@/components/SearchInput'
import { useRouter } from 'next/router'
import GetUsersByNumber from '@/components/GetUsersByNumber'

const inter = Inter({ subsets: ['latin'] })




export default function Home() {
  const router = useRouter()
  

  const [passWeek, { data: passData, error: passError, loading: passLoading }] = useMutation(PASS_WEEK)

  const { data: examplesData, error: examplesError, loading: examplesLoading } = useQuery(GET_ALL_EXAMPLES)
  const [fetchUsers, { data: allUsersData, error: allUsersError, loading: allUsersLoading }] = useLazyQuery(GEL_ALL_USERS)
  useEffect(() => {
    fetchUsers({
      variables: {
        input: {
          start: 1,
          end:100
        }
      }
    })
  }, [])
  const orderByCountry = ()=>{
    fetchUsers({
      variables: {
        input: {
          start: 1,
          end:100,
          country: true
        }
      }
    })
  }

  if (allUsersLoading || examplesLoading) return <div>Bekleyiniz</div>
  if (allUsersError || examplesError) return <div>Hata</div>
  return (
    <main className='w-full mt-5'>
      <div className='w-1/2 m-auto'>
      <Image src={"/panteon-logo.png"} className='my-4' width={1000} height={200} alt={''} />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full' onClick={async () => {
          await passWeek();
          router.reload()
        }}>Pass a week</button>
        <SearchInput fetchUsers={fetchUsers} />
        <GetUsersByNumber fetchUsers={fetchUsers}/>
        <div className='my-3'>
          <button onClick={orderByCountry} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full'>Order By Country</button>
        </div>
        {allUsersData?.getAllUsers ? <UsersTable users={allUsersData.getAllUsers} /> : ""}
        
      </div>
    </main>
  )
}
