import React from "react";

const Message = () => {
    return(
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p> hello</p>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            </div>
        </div>
    )
}

export default Message;