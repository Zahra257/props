import React from 'react'

import Profil from './profil/Profil'


class App extends React.Component {

   
    render(){
        const myVar = {
            fullName: 'Shanté Quinn', 
            profession:' Designer, Fashionista',
            bio:'Shanté is a visual learner social media enthusiast and designer out of Chicago. She likes a mix of styles and wants to be able to look at all of her shopping options in one place',
           
        }
        return (
            <div>
                <Profil data={myVar} style={{ display:'flex'}}>
                   <img src='https://image.flaticon.com/icons/png/512/1499/1499575.png' width='200px' height='200px'></img>
                    </Profil>
            </div>
    )
    }
  
}

export default App;
