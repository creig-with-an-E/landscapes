import React, {Component} from "react"
const image = require("./../../../images/profile.jpeg");

const ProfileSection = ()=>{
  return (
    <div className={"row w-100 jumbotron p-2"} style={{backgroundColor:"#fafafa"}}>
      <section className={"col-3 col-lg-2"}>
        <img src={`${image}`} className={"img-fluid rounded-circle"}/>
      </section>
      <section className={"col-5"}>name</section>
      <section className={"col-3"}>number</section>
    </div>
  )
}

export { ProfileSection };