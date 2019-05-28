"use strict";

import React,{ Component } from "react";
import ReactDOM from "react-dom";
import { Card, ProfileSection} from "./common"
import axios from "axios";

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: null,
            loading:false,
        }
    }
    componentDidMount(){
        this.setState({loading: true });
        //starting spinner

        axios.get("./api/photographer/1")
          .then((result)=>{
            console.log(result);
             this.setState({
                 data: result.data,
                 loading: false,
             })
          }).catch(error=>{
              this.setState({
                  loading: false,
              });
              console.log(error)})
    }

    renderImageCards(){
        let gallery = null;
        if(this.state.data){
            const { album } = this.state.data;
             gallery = album.map((element)=>{
                 return (
                     <span className={"col-10 col-sm-10 col-md-6 col-lg-5 mb-5"}
                           key={element.id} >
                       <Card imageUrl={element.img}
                           description={element.description}
                           date={element.date}
                       />
                      </span>
                 )
            });
        return gallery;
        }else{
                return <div><p style={{color:"white"}}>No data found !!</p></div>
             }
    }

    render(){
      //importing variables from state
      return(
        <div className={"container h-100"}>
          <section className={"row"}>
              {
                  this.state.data? <ProfileSection name={this.state.data.name}
                  bio={this.state.data.bio}
                  profilePic={this.state.data.profile_picture}
                  phone={this.state.data.phone}
                  email={this.state.data.email}
                  /> : null
              }
          </section>
          <section className={"row align-self-center text-center"}>
              {
                  this.renderImageCards()
              }
          </section>
        </div>
      )
    }

}

ReactDOM.render(<App />, document.getElementById("app"))