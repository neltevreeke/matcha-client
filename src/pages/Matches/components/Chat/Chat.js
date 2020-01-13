import React from 'react'
import styles from './Chat.scss'
import FormInsertChatMessage from './FormInsertChatMessage/FormInsertChatMessage'
import ChatMessages from './ChatMessages/ChatMessages'
import { sendNewMessage } from '../../../../utils/sockets'

const Chat = ({
  messages,
  selectedMatch
}) => {
  const handleSubmit = ({ message }, { resetForm }) => {
    sendNewMessage({
      message,
      roomId: selectedMatch.room
    })

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
