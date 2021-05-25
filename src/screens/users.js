import React, { useState, useEffect } from 'react';
import axios from '../axios';

function UsersScreen() {
    const [users, setUsers] = useState([]);
    const [config, setConfig] = useState({});
    const passPageNo = (page) => {
        getUsers(page);
    };
    useEffect(() => {
        getUsers(1);
    }, []);

    const getUsers = (page) => {
        axios.get(`users?page=${page}`).then((response) => {
            if (response.data && response.data.data) {
                setUsers(response.data.data);
                const {page, per_page, total, total_pages} = response.data;
                console.log(response.data);
                setConfig({page, per_page, total_pages, total});
                console.log(config);
            }

        }).catch((error) => {

        });
    }

    return (
        <div className="container">
            {users ? (
                <div>
                    {users.map(user => (
                    <div key={user.id} className="row text-left my-4 border border-success py-3">
                        <div className="col-sm-4 ">
                            <img src={user.avatar} alt="profile-pic" />
                        </div>
                        <div className="col-sm-8">
                            <h6>Id: {user.id}</h6>
                            <h6>Name: {user.first_name} {user.last_name}</h6>
                            <h6>Email: {user.email}</h6>
                        </div>
                    </div>
                )                    
                )}
                <nav>
                    <ul className="pagination">
                        <li className="page-item"><a class="page-link">Previous</a></li>
                        <li className="page-item"><a class="page-link" onClick={() => passPageNo(1)}>1</a></li>
                        <li className="page-item"><a class="page-link" onClick={() => passPageNo(2)}>2</a></li>
                        <li className="page-item"><a class="page-link">Next</a></li>
                    </ul>
                </nav>
                </div>
            ) :
                <div>
                    <h2>No users found</h2>
                </div>
            }
        </div>            
    )
}

export default UsersScreen;