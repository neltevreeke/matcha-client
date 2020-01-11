import React from 'react'
import styles from './Chat.scss'
import FormInsertChatMessage from './FormInsertChatMessage/FormInsertChatMessage'
import ChatMessages from './ChatMessages/ChatMessages'
import { useSelector } from 'react-redux'
import { getUser } from '../../../../selectors/user'

const Chat = ({
  selectedMatch
}) => {
  const user = useSelector(getUser)

  const messages = [{
    user: {
      _id: '5df2671a8b3ced19e93eea1d',
      loc: {
        type: 'Point',
        coordinates: [
          52.370215999999999212,
          4.8951679999999999637
        ]
      },
      email: 'test@test.nl',
      password: '$2a$10$EnDjaGqJqtZ2sHwLUtTpxuEzcObzjRerrHqrknVkpAOMNonA2jYau',
      firstName: 'Hetero',
      lastName: 'Woman',
      age: 27,
      gender: 'female',
      biography: 'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proefteksttttttttttttdadwawdawdaaaaaa',
      photos: [
        {
          cloudinaryPublicId: 'user-photos/zt2acs6aqjobmmmlivwk'
        },
        {
          cloudinaryPublicId: 'user-photos/q2rmpri95moli67u6rgn'
        }
      ],
      interests: [
        {
          label: 'Make-up'
        },
        {
          label: 'music'
        }
      ],
      fameRating: 76,
      genderPreference: 'MALE',
      __v: 0
    },
    value: 'poep in je broek'
  }, {
    user: {
      _id: '5df2671a8b3ced19e93eea1d',
      loc: {
        type: 'Point',
        coordinates: [
          52.370215999999999212,
          4.8951679999999999637
        ]
      },
      email: 'test@test.nl',
      password: '$2a$10$EnDjaGqJqtZ2sHwLUtTpxuEzcObzjRerrHqrknVkpAOMNonA2jYau',
      firstName: 'Hetero',
      lastName: 'Woman',
      age: 27,
      gender: 'female',
      biography: 'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proefteksttttttttttttdadwawdawdaaaaaa',
      photos: [
        {
          cloudinaryPublicId: 'user-photos/zt2acs6aqjobmmmlivwk'
        },
        {
          cloudinaryPublicId: 'user-photos/q2rmpri95moli67u6rgn'
        }
      ],
      interests: [
        {
          label: 'Make-up'
        },
        {
          label: 'music'
        }
      ],
      fameRating: 76,
      genderPreference: 'MALE',
      __v: 0
    },
    value: 'werkt dit?'
  }, {
    user,
    value: 'ik heb dit zelf verstuurd dikke anus ik heb dit zelf verstuurd dikke anus ik heb dit zelf verstuurd dikke anus ik heb dit zelf verstuurd dikke anus ik heb dit zelf verstuurd dikke anus ik heb dit zelf verstuurd dikke anus ik heb dit zelf verstuurd dikke anus '
  }]

  return (
    <div className={styles.component}>
      <ChatMessages
        messages={messages}
        selectedMatch={selectedMatch}
      />
      <FormInsertChatMessage />
    </div>
  )
}

export default Chat
