import React from 'react'
import { gql } from '@apollo/client'

export const QUESTION_COUNTER = gql`
    subscription {
        questions_aggregate {
            aggregate {
                count
                }
        }
    }

`
