import PropTypes from "prop-types"
const style = {
    color :'red', 
    backgroundColor:'white',
     borderRadius:'15%', 
     border:'black',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    fontFamily: '"Times New Roman", Times, serif',

}
const container ={
    display:'flex',
}
const info ={
    marginLeft:'15px',
    marginTop:'10px'
}
const image ={
    marginLeft:'15px',
    marginTop:'10px'
}
const Profil = (props) => {

    const handleClick = () => {
        alert(props.data.fullName)
    

        
    }
    return (
        <>
        <div style={container}>
        <div style={image}>
        {props.children}
        </div>
        <div style= {info}>
        <h1>{props.data.fullName}</h1>
        <h3>{props.data.profession}</h3>
        
        <p>{props.data.bio}</p>
        <button onClick={handleClick} style={style}>Follow me</button>

        </div>
        </div>
</>
        
    )
}

Profil.propTypes = {
    profession: PropTypes.string,
    bio: PropTypes.string,
    fullName: PropTypes.string,
}


Profil.defaultProps = {data:{


    fullName: "Shanté Quinn", 
    profession:" Designer, Fashionista",
    bio:"Shanté is a visual learner social media enthusiast and designer out of Chicago. She likes a mix of styles and wants to be able to look at all of her shopping options in one place",
}}
export default Profil;