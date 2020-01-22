import React from 'react'
import styles from './Chat.scss'
import FormInsertChatMessage from './FormInsertChatMessage/FormInsertChatMessage'
import ChatMessages from './ChatMessages/ChatMessages'
import { sendEvent } from '../../../../utils/sockets'
import * as EventType from 'constants/EventType'
import { setNewRoomMessage } from '../../../../actions/roomMessage'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from 'selectors/user'

const Chat = ({
  messages,
  selectedMatch
}) => {
  const dispatch = useDispatch()
  const user = useSelector(getUser)

  const handleSubmit = ({ message }, { resetForm }) => {
    sendEvent({
      type: EventType.EVENT_TYPE_MESSAGE,
      data: {
        message,
        roomId: selectedMatch.room,
        receiver: selectedMatch.likedUserId._id
      }
    })

    dispatch(setNewRoomMessage({
      room: selectedMatch.room,
      createdBy: user,
      content: message
    }))

    resetForm()
  }

  return (
    <div className={styles.component}>
      <ChatMessages
        messages={messages}
        selectedMatch={selectedMatch}
      />
      <FormInsertChatMessage
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Chat
