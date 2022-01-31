import React from 'react';
import s from './Message.module.scss';
//



type propsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function AlternativeMessage(props:propsType) {
    return (
        <div>
            <div className={s.message__background}>
                <div className={s.__left}>
                    <img className={s.message__avatar} src={props.avatar} alt="" />
                </div>
                <div className={s.message__right}>
                    <div className={s.message__chat}>
                        <p className={s.message__name__alt}>{props.name}</p>
                        <p className={s.message__message}>{props.message}</p>
                    </div>
                    <div className={s.message__time__out}>
                        <p className={s.message__time}>{props.time}</p>
                    </div>

                </div >

            </div>

        </div>
    )
}

export default AlternativeMessage
