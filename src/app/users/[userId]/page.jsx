async function getUserParam(userId){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return res.json()

}
export default async function UserPage({params : {userId}}) {
    const data = await getUserParam(userId);
    
  return (
    <div>
        <div>Hello {data.name}</div>
    </div>
  )
}
