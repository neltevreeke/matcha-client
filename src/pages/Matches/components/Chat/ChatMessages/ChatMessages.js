import React, { useEffect, useRef } from 'react'
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
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  useEffect(
    scrollToBottom,
    [messages]
  )

  return (
    <>
      <div className={styles.component}>
        {messages.map((message, index) => {
          const isOnline = onlineUsers.some(onlineUser => onlineUser._id === message.createdBy)

          if (message.createdBy !== user._id) {
            return (
              <div
                className={styles.matchMessage}
                key={index}
              >
                <div
                  className={styles.matchAvatar}
                >
                  <Avatar
                    user={message.createdBy}
                    isOnline={isOnline}
                  />
                </div>
                <p
                  key={index}
                >
                  {message.content}
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
                {message.content}
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
        <div ref={messagesEndRef} />
      </div>
    </>
  )
}

export default ChatMessages
