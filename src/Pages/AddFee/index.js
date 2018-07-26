import React , {Component} from "react";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import AddFeeForm from "./AddFeeForm";
import cookie from 'react-cookies';


class AddFee extends Component {
    constructor(props) {
        super(props);
        if(cookie.load('token')===undefined){
            this.props.history.push("/");
        }
        this.state =
            {
                loader: true,
                open:false
            };
    }
    componentDidMount = () =>{
        this.toggleLoader();
    }
    toggleLoader = () => {
    
        this.setState({
            loader: !this.state.loader
        });
    }
    render() {
        return (
            <div className="wrapper">
                <div className={this.state.loader === true ? 'loader': 'hide-loader'}>
                            </div>
                <Sidebar />
                <div className="main-panel">
                    <Navbar history={this.props.history} />
                    <div className="content">
                    <div className="container-fluid">
                        
                            <AddFeeForm/>
             
                    </div>
                </div>
                </div>
                
            </div>
        );
    }
}
export default AddFee;