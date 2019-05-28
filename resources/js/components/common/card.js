import React from "react";

const Card = (props) =>{
  return(
    <div className={"container mb-3"}>
      <div className={"row"}>
        <div className={"card p-0"} style={styles.cardStyle}>
          {/*card image*/}
          <img className={"card-img-top"} style={styles.cardImage} src={`${props.imageUrl}`} alt={"landscape"} />
            {/*card body*/}
            <div className={"card-body pb-0"} style={styles.cardBody}>
              <p className={"text-dark"}>
                  {props.description}
              </p>
              <span className={"border-0"} style={{backgroundColor:"#F0EDE5"}}>
                  <span className={"text-dark text-align-left"}><i className={"far fa-heart"} style={{fontSize:16}} onClick={()=>alert("clicked")}></i> </span>
              </span>
            </div>
        </div>
        {/*end of bootstrap card*/}
      </div>
    </div>
  )
}

export { Card }

const styles ={
    cardStyle:{
        height:420,
        borderWidth:1,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5,
    },
    cardShadow:{

    },
    cardBody:{
      backgroundColor:"#F0EDE5"
    },
    cardImage:{
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        height:300
    }
}