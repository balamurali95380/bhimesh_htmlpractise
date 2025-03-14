import { Component } from "react";
import axios from "axios"

export default class Upm extends Component {
    constructor() {
        super()
        this.state = {
            person: {
 
                id:"",
                name: "",
                email:"",
                role:"",
                preferences:"",
            },
            Upm: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata=()=>{
        axios.get("http://localhost:3000/Upm").then((response)=>{
                this.setState({Upm:response.data})
            })
        } 


    
    add = () => {
        axios.post("http://localhost:3000/Upm",this.state.person).then(()=>{
                this.serverdata()
                this.clearUpm()
            })
    }
    update = () => {
        axios.put("http://localhost:3000/Upm/"+this.state.Upm[this.state.inx].id,this.state.person).then(()=>{
                this.serverdata()
                this.setState({inx:null})
                this.clearUpm()
            })
         }
    edit = (val, i) => { 
        this.setState({person:val,inx:i})
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/Upm/"+val.id).then(()=>{
            this.serverdata()
        })
        
     }
    clearUpm(){
        this.setState({ person: {
 
            id:"",
            name: "",
            email:"",
            role:"",
            preferences:"",
        },})
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">id</label>
                <input type="text" name="id" id="" value={this.state.person.id} onChange={this.event} />{""}
                <label htmlFor="">name</label>
                <input type="text" name="name" id="" value={this.state.person.name} onChange={this.event} />{""}
                <label htmlFor="">email</label>
                <input type="text" name="email" id="" value={this.state.person.email} onChange={this.event} />{""}
                <label htmlFor="">role</label>
                <input type="text" name="role" id="" value={this.state.person.role} onChange={this.event} />{""}
                <label htmlFor="">preferences</label>
                <input type="text" name="preferences" id="" value={this.state.person.preferences} onChange={this.event} />{""}
                {this.state.inx === null ? (<button type="button" onClick={this.add}>add</button>)
                    : (<button type="button" onClick={this.update}>update</button>)}
            </form>
            <hr />
            <table border={1}>
                <thead><tr><th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>role</th>
                    <th>preferences</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.state.Upm.map((val, i) => {
                        return <tr key={val.id}><td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.role}</td>
                            <td>{val.preferences}</td>
                            <td><button type="button" onClick={() => this.edit(val, i)}>edit</button></td>
                            <td><button type="button" onClick={() => this.delete(val, i)}>delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    }
    componentDidMount() {
        this.serverdata();
    }
}
