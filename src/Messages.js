import React from "react";
import Message from "./Message";

class Messages extends React.Component {
  render() {
    return this.props.msg_list.map(i_ob => (
      <Message
        join={i_ob.joining}
        me={i_ob.from_me}
        user={i_ob.username}
        text={i_ob.message}
      />
    ));
  }
}

export default Messages;
