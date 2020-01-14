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

  const messageCta = [
    'Strike the conversation',
    'In the end, we only regret the chances we didn’t take',
    'You’ll never meet 100% of the matches you don’t message',
    'If you don’t ask, you will never know',
    'You miss 100% of the memories you never make',
    'Some things are better left unsaid, but most things aren’t',
    'The heart wants what the heart wants',
    'Life’s too short to not send a message'
  ]

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: 'auto'
    })
  }

  useEffect(
    scrollToBottom,
    [messages]
  )

  return (
    <>
      <div className={styles.component}>
        {messages.length > 0 ? (
          messages.map((message, index) => {
            const isOnline = onlineUsers.some(onlineUser => onlineUser._id === message.createdBy._id)

            if (message.createdBy._id !== user._id) {
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
          }))
          : (
            <div className={styles.noMessages}>
              {messageCta[
                Math.floor(
                  Math.random() * messageCta.length
                )]}
            </div>
          )}
        <div ref={messagesEndRef} />
      </div>
    </>
  )
}

export default ChatMessages
