import React from 'react';
import './Users.css'
function Users(props) {
    const getFirstLetters = (str) => {
        const firstLetters = str
            .split(' ')
            .map(word => word.charAt(0))
            .join('');

        return firstLetters;
    }
    return (
        <div className="mainUserComponent">
            <div className="userCards">
                {props?.cardData?.users?.map((user, index) => {
                    return (
                        <div style={{ width: "20%", margin: "5px" }}>
                            <div style={{ display: "flex" }}>
                                <div className="profileName">
                                    {getFirstLetters(user.name)}

                                </div>
                                <div style={{ marginLeft: "4px", }}>
                                    {user.name}
                                </div>
                            </div>
                            <div >
                                {props?.cardData?.tickets?.map((tickets) => {
                                    return (
                                        <>
                                            {
                                                tickets.userId === user.id &&
                                                <div className="userCardStyle">
                                                    <div style={{
                                                        color: "gray",
                                                        fontSize: "13px",
                                                        marginBottom: "5px"
                                                    }}>
                                                        {tickets.id}
                                                    </div>
                                                    <div style={{ display: "flex" }} >
                                                        <div>
                                                            <input type="radio" />
                                                        </div>
                                                        <div>

                                                            {tickets.title}
                                                        </div>
                                                    </div>
                                                    <div className="requestTag">{tickets.tag[0]}</div>
                                                </div>
                                            }
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

        </div >
    )
}
export default Users;