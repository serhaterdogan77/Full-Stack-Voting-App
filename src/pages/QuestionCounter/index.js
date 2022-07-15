import React from 'react'
import { useSubscription } from '@apollo/client'
import { QUESTION_COUNTER } from './queries'

function QuestionCounter() {
  const {loading, data } = useSubscription(QUESTION_COUNTER)
  
  const questionCount = data?.questions_aggregate?.aggregate?.count;


  return (
    <div className='text-white'>
        {loading ? '': questionCount}
    </div>
  )
}

export default QuestionCounter