import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";//Link de react-router-dom pour créer des liens vers d'autres routes de l'application
import { toast } from "react-toastify";//toast de react-toastify pour afficher des messages de notification.
import { FetchUserList,Removeuser } from "../JS/Action";

const Userlisting = (props) => {
    useEffect(() => {
        props.loaduser();
    }, [])
    const handledelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
             props.removeuser(code);
             props.loaduser();
             toast.success('User removed successfully.')
        }
    }
    return (
        props.user.loading ? <div><h2>Loading...</h2></div> :
            props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :

                <div>
                    <div className="card">
                        <div className="card-header" >
                            <Link to={'/user/add'} className="btn btn-success">Add User [+]</Link>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>id</td>
                                        <td>firstName</td>
                                        <td>lastName</td>
                                        <td>age</td>
                                        {/* <td>Role</td> */}
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.user.userlist && props.user.userlist.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.firstName}</td>
                                                <td>{item.lastName}</td>
                                                <td>{item.age}</td>
                                                {/* <td>{item.role}</td> */}
                                                <td>
                                                    <Link to={'/user/edit/' + item.id} className="btn btn-primary">Edit</Link> |
                                                    <button onClick={() => { handledelete(item.id) }} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
        removeuser:(id)=>dispatch(Removeuser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);