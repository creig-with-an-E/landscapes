import React,{ Component } from "react";
import ReactDOM from "react-dom";
import {Card, ProfileSection} from "./common"

class App extends Component{
    render(){
      return(
        <div className={"container h-100"} style={{backgroundColor:"black"}}>
          <section className={"row"}>
            <ProfileSection/>
          </section>
          <section className={"row align-self-center text-center"}>
            <span className={"col-lg-5 col-md-6 col-sm-8 col-10"}>
              <Card imageUrl={"./img/landscape1.jpeg"}/>
            </span>

            <span className={"col-lg-5 col-md-6 col-sm-8 col-10 "}>
              <Card imageUrl={"./img/landscape2.jpeg"}/>
            </span>

            <span className={"col-lg-5 col-md-6 col-sm-8 col-10 "}>
              <Card imageUrl={"./img/landscape3.jpeg"}/>
            </span>

            <span className={"col-lg-5 col-md-6 col-sm-8 col-10"}>
              <Card imageUrl={"./img/landscape5.jpeg"}/>
            </span>
          </section>
        </div>
      )
    }

}

ReactDOM.render(<App />, document.getElementById("app"))