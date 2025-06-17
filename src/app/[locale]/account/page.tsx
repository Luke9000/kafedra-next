import AccountForm from './account-form'
import { createClient } from '@/utils/supabase/server'

export default async function Account() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return <AccountForm user={user} />
}


// import { redirect } from 'next/navigation'

// import { createClient } from '@/utils/supabase/server'

// export default async function PrivatePage() {
//   const supabase = await createClient()

//   const { data, error } = await supabase.auth.getUser()
//   if (error || !data?.user) {
//     redirect('/login')
//   }

//   return <p>Hello {data.user.email}</p>
// }