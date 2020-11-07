import React from "react";

import Dataservice from "../service/dataservice";

interface Location {
    name: string;
    region: string;
}

interface Current {
    temp_c: number;
}

export interface WhetherData {
    location: Location;
    current: Current;
}

interface IWhetherState {
    wetherdata: WhetherData
}

interface IWhetherProps {
    city: string
}


export class WhetherItem extends React.Component<IWhetherProps, IWhetherState> {

    constructor(props: IWhetherProps) {
        super(props);
        this.state =
            {
                wetherdata: {
                    location: {
                        name: "",
                        region: ""
                    },
                    current: {
                        temp_c: 0
                    }
                }


            }

    }

    componentDidMount(): void {
        this.getWhetherData();
    }

    componentDidUpdate(prevProps: Readonly<IWhetherProps>, prevState: Readonly<IWhetherState>, snapshot?: any): void {
        if (prevProps.city != this.props.city) {

            this.getWhetherData();
        }
    }

    getWhetherData = () => {
        Dataservice.getdata(this.props.city).then((res) => {
            this.setState({wetherdata: res.data})
        })
    };

    render() {


        return         <>
            <div><h2>{this.state.wetherdata.location.region}</h2>

            </div>
            <div><h2>{this.state.wetherdata.location.name}</h2>

            </div>
        </>

    }

}