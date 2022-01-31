import React from 'react'
import Message from './Message';
import AlternativeMessage from "./AlternativeMessage";




const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}
const AlternativeMessageData = {
    avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
    name: 'Pavel',
    message: 'тут текст',
    time: '23:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

             <hr/>
            для личного творчества, могу проверить


            <AlternativeMessage
                avatar={AlternativeMessageData.avatar}
                name={AlternativeMessageData.name}
                message={AlternativeMessageData.message}
                time={AlternativeMessageData.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
