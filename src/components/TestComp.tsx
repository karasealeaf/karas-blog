// file with both use server and use client
'use client'

import { useState } from "react"
import { fetchDataFromServer } from "@/lib/test"


function ClientSideComponent() {
  
  const [data, setData] = useState('')
// useState returns an array.
console.log('This is running on the client')

async function handleClick() {
  const serverData = await fetchDataFromServer
  setData(serverData)
}


return (
  <div>
  <button onclick={handleClick}>Fetch data from server</button>
  </div>
<h2>Client server data</h2>
  <p>Data : {data}</p>

)
}

export default function TestComp() {
  return (
    <div>
      <h2>My test comp</h2>
      <ClientSideComponent/>
    </div>
  )
}