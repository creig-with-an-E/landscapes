import React, {useState} from "react";

const Card = (props) =>{
  const [likeStatus, setLikeStatus] = useState(false);

  const likeButtonClicked = () =>{
      setLikeStatus(!likeStatus)
  };

  //icon is either solid or outline based on state
  const icon = likeStatus? "fas fa-heart" : "far fa-heart";

  return(
    <div className={"container mb-3"}>
      <div className={"row"}>
        <div className={"card p-0"} style={styles.cardStyle} onDoubleClick={likeButtonClicked}>
          {/*card image*/}
          <img className={"card-img-top"} style={styles.cardImage} src={`${props.imageUrl}`} alt={"landscape"} />
            {/*card body*/}
            <div className={"card-body pb-0"} style={styles.cardBody}>
              <p className={"text-dark"}>
                  {props.description}
              </p>
              <span className={"border-0 text-align-left"} style={{backgroundColor:"#eceff1"}}>
                  <span className={"text-dark float-left"}><i className={`${icon}`} style={{fontSize:22, color:"red"}} onClick={likeButtonClicked} /> </span>
                  <span className={"float-right"}>{props.date}</span>
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
      backgroundColor:"#eceff1"
    },
    cardImage:{
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        height:300
    }
}