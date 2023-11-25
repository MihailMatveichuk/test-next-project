import { useSession} from 'next-auth/react'
import React from 'react'
import { AuthConfig } from '../../../config/auth'
import { getServerSession } from 'next-auth'

export default async function page() {
    const session = await getServerSession(AuthConfig);
    

  return (
    <div>
       <h1 >Profile of {session?.user?.name}</h1>
       {session?.user?.image &&  <img src={session?.user?.image!} alt="Image" style={{
        borderRadius: '50%'
       }} />}
    </div>
  )
}
