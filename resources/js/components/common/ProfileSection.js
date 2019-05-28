import React, {Component} from "react"
const image = require("./../../../images/profile.jpeg");

const ProfileSection = ()=>{
  return (
    <div className={"row w-100 jumbotron h-75 p-2"} style={{backgroundColor:"black"}}>
      <section className={"col-3 col-lg-2"}>
        <img src={`${image}`} className={"img-fluid rounded-circle"}/>
      </section>
      <section className={"col-5 text-white"}>name</section>
      <section className={"col-3 text-white"}>number</section>
    </div>
  )
}

export { ProfileSection };