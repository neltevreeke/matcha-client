import React from 'react'
import styles from './ChatMessages.scss'
import { useSelector } from 'react-redux'
import { getUser } from '../../../../../selectors/user'
import Avatar from '../../../../../components/Avatar/Avatar'
import { getOnlineUsers } from '../../../../../selectors/onlineUsers'

const ChatMessages = ({
  messages
}) => {
  const user = useSelector(getUser)
  const onlineUsers = useSelector(getOnlineUsers)

  return (
    <div className={styles.component}>
      {messages.map((message, index) => {
        const isOnline = onlineUsers.some(onlineUser => onlineUser._id === message.user._id)

        if (message.user._id !== user._id) {
          return (
            <div
              className={styles.matchMessage}
              key={index}
            >
              <div
                className={styles.matchAvatar}
              >
                <Avatar
                  user={message.user}
                  isOnline={isOnline}
                />
              </div>
              <p
                key={index}
              >
                {message.value}
              </p>
            </div>
          )
        }

        return (
          <div
            key={index}
            className={styles.userMessage}
          >
            <p>
              {message.value}
            </p>
            <div
              className={styles.userAvatar}
            >
              <Avatar
                user={user}
                isOnline
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ChatMessages
