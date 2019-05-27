import React,{ Component } from "react";
import ReactDOM from "react-dom";
import {Card, ProfileSection} from "./common"

class App extends Component{
    render(){
      return(
        <div className={"container h-100 align-items-center"}>
          <section className={"row"}>
            <ProfileSection/>
          </section>
          <section className={"row"}>
            <span className={"col-lg-4 col-md-6 col-sm-6 col-10"}>
              <Card />
            </span>

            <span className={"col-lg-4 col-md-6 col-sm-6 col-10 "}>
              <Card />
            </span>

            <span className={"col-lg-4 col-md-6 col-sm-6 col-10 "}>
              <Card />
            </span>

            <span className={"col-lg-4 col-md-6 col-sm-6 col-10"}>
              <Card />
            </span>
          </section>
        </div>
      )
    }

}

ReactDOM.render(<App />, document.getElementById("app"))