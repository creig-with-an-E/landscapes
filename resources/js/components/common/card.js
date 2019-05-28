import React from "react";

const Card = (props) =>{
  return(
    <div className={"container-fluid mt-4 h-100"}>
      <div className={"row"}>
        <div className={"card p-0 rounded "}>
          {/*card image*/}
          <img className={"card-img-top h-75 "} src={`${props.imageUrl}`} alt={"landscape"} />
            {/*card body*/}
            <div className={"card-body pb-0"} style={{borderWidth:1, borderColor:"black", backgroundColor:"#fafafa"}}>
              <p className={"card-text"}>
                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
          <footer className={"card-footer border-0 pt-2 mt-0"} style={{backgroundColor:"#fafafa"}}>
              <span className={"text-muted"}>This is the footer</span>
          </footer>
        </div>
        {/*end of bootstrap card*/}
      </div>
    </div>
  )
}

export { Card }

const styles ={
    cardShadow:{

    }

}