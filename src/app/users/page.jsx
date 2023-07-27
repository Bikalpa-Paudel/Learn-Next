import Link from "next/link"
import getUsersData from "@/lib/getUsersData"
   
  export default async function UsersPage() {
    const data = await getUsersData()
    const content = (data.map(item => {
        return(
        <>  
            <p key={item.id}>
                <Link href={`/users/${item.id}`}>{`${item.name}`}</Link>
            </p>
        </>
        )
    })
    )
    return (
    <main>
        <h1><Link href='/'>Back Home</Link></h1>
        <h1>Users</h1>
        <br />
        {content}
    </main>
    )
  }