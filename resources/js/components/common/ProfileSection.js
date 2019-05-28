import React, {Component} from "react"

const ProfileSection = ({name, bio, profilePic, email, phone})=>{
  return (
    <div className={"row w-100 jumbotron h-75 p-2"}>
      <section className={"col-3 col-lg-2"}>
        <img src={`${profilePic}`} className={"img-fluid rounded-circle"}/>
      </section>
      <main className={"col"}>
        <h1 style={styles.headerStyle} className={"col-12"}>{name}</h1>
        <div className={"row"}>
          <section className={"col-8"}>
             <h5>Bio</h5>
              <p style={styles.bioStyle}>
                  {bio}
              </p>
          </section>
          <section>
            <h5>Phone</h5>
              {phone}
            <h5>Email</h5>
              {email}
          </section>
        </div>
      </main>
    </div>
  )
}

export { ProfileSection };

const styles ={
    headerStyle :{
      fontSize:24,
      textAlign:"center"
    },
    bioStyle:{
        fontSize:14
    }
}
