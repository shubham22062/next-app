import axios from "axios"

async function getUserDetails(){
  const respone = await axios.get(" http://localhost:3000/api/user")
  return respone.data;
}

export default async function Home(){
  const userData = await getUserDetails();
   return(
    <div className="flex flex-col justify-center h-screen  border-8 rounded-r-2xl">
    <div className="flex justify-center">
      {userData.email};
      </div>
      <div className="flex justify-center">
      {userData.username};
    </div>
    </div>
   )
}