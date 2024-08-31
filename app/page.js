import {SubmitAction} from "@/action/formii.jsx"

export default function Home() {
    // const handleClick = async () => {
    //   let data= {
    //     name:"test",
    //     th: "test"
    //   }
    //     let a = await fetch("/api/app", {
    //       method:"POST",
    //       headers:{
    //         "Content-Type":"application/json"
    //       },
    //       body:JSON.stringify(data)
    //     })
    //     let res = await a.json()
    //     console.log(res);
        
    // };

    
  return (
    <div className="w-2/3 mx-auto my-12">
    <form action={SubmitAction}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="text-black"/>
      </div>
      <div>
        <label htmlFor="add">Address</label>
        <input type="text" name="add" id="add" className="text-black"/>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}
