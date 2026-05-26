import DemoProfileCard from "./DemoProfileCard"

export default function ProfileCard() {

    // const Name = ["Alagendra"]
    // const Role = "Frontend Developer"
    // const Place = "srivilliputtur"

    return (
        <section>
        <div className="container" style={{ border: "1px solid black", width: "350px", height: "auto",backgroundColor:"skyblue",color:"white",borderRadius:"15px",lineHeight:"0px" }}>
            {/* <form action="" className="form-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <img src="https://imgs.search.brave.com/UsfYBuO03co8ce3iMX16iBDa9JvwE9fxfhRc5uU2ORc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzQzLzM4LzAy/LzM2MF9GXzExNDMz/ODAyNjNfa21ZVmJq/VDdFUmVoWG9qM0Np/aGdhSE9KMmVteXR5/WmouanBn" alt="img" 
                className="img-container" style={{ borderRadius: "70%", border: "none", width:"200px",height:"200px", padding:"10px 0px", }} />
                <h1 className="heading" style={{fontSize:"32px",margin:"20px 0px 0px"}}>{Name}</h1>
                <p className="role-container" style={{color:"black",fontSize:"16px",padding:"15px 0px 0px"}}>{Role}</p>
                <p className="places" style={{padding:"20px 10px",border:"none",borderRadius:"18px",backgroundColor:"blue",}}>{Place}</p>
            </form> */}
            <DemoProfileCard Name="Alagendra" Role="Developer" Place="Srivilliputtur" /> <br />
        </div>
        <div style={{ border: "1px solid black", width: "350px", height: "auto",backgroundColor:"skyblue",color:"white",borderRadius:"15px",lineHeight:"0px" }}>
            <DemoProfileCard Name="Rolex" Role="Backend Developer" Place="Chennai" />
        </div>


        </section>
    )
}


// export default function ProductCard(){
//     return(
//         <div>
            
//         </div>
//     )
// }