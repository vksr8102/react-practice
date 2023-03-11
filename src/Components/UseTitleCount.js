import {useEffect} from 'react'

const UseTitleCount = (count) => {
    useEffect(()=>{
        console.log("hello I am useeffect 1");
        if (count <= 0) {
            document.title = `Chat`
        }
        else{
            document.title = `Chat(${count})`
        }
       },[count])
  return (
    <div>
     
    </div>
  )
}

export default UseTitleCount

