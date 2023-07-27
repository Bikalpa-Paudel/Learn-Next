export default async function getUsersData() {
 const res = await fetch('https://jsonplaceholder.typicode.com/users')
 if(!res.ok) throw new Error('Faild to fetch')
 return res.json()

}
