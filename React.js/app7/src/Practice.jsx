import { Component } from "react"
import { Childj } from "./Childj"

export default class Practice extends Component{
    constructor(){
        super()
        this.state={            
            address: 
            {
                geolocation: {
                            lat: "-37.3159",
                            long: "81.1496",
                            },
                  city: "kilcoole",
                  street: "new road",
                  number: 7682,
                  zipcode: "12926-3874"
             },
                id: 1,
                email: "john@gmail.com",
                username: "johnd",
                password: "m38rmF$",
                name:    {
                        firstname: "john",
                        lastname: "doe"
                         },
                phone: "1-570-236-7033",
                __v: 0
              }
        
    }

    render(){
        return <div>
           <Childj all={this.state}/>
        </div>
    }


}