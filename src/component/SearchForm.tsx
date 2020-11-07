import React from "react"
import {WhetherItem} from "./WhetherItem";
import Dataservice from "../service/dataservice";


export class SearchForm extends React.Component <any, any> {

    constructor(props: any) {
        super(props);
        this.state={
            textvalue:'',
            city:''
        };

    }

    setCityData=(e:any)=>{this.setState({textvalue:e.target.value})};

    searchData=()=>{this.setState({city:this.state.textvalue})};



    render() {
        return <div>
            <input type="text" onChange={e=> this.setCityData(e) }/>
            <button onClick={this.searchData}>Search</button>

            <WhetherItem city={this.state.city}/>
        </div>

    }


}

