export default function DemoProfileCard ({Name,Role,Place}){

    // const Name = ""
    // const Role = ""
    // const Place = ""

    return(
        <div>
            <h1 style={{fontSize:"32px",margin:"20px 0px 0px"}}>{Name}</h1>
            <p style={{color:"black",fontSize:"16px",padding:"15px 0px 0px"}}>{Role}</p>
            <p  style={{padding:"20px 10px",border:"none",borderRadius:"18px",backgroundColor:"blue",}}>{Place}</p>
        </div>
    )
}