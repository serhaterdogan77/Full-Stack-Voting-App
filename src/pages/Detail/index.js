import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSubscription, useMutation } from '@apollo/client'
import { QUESTION_DETAIL_SUBSCRIPTION, NEW_VOTE_MUTATION } from './queries'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Loading/Error'

function Detail() {
  const { id } = useParams()

  const [isVoted, setIsVoted] = useState(false)

  const [selectedOptionId, setSelectedOptionId] = useState()

  const {loading, error, data} = useSubscription(QUESTION_DETAIL_SUBSCRIPTION, {
    variables: { id },
  });

  const [newVote, {loading: loadingVote}] = useMutation(NEW_VOTE_MUTATION, {
    onCompleted:() => {
        setIsVoted(true)
    }
  })

  const handeClickVote = () => {
    newVote({
        variables: {
            input: {
                option_id: selectedOptionId,
            },
        },
    });
  };
  

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error.message} />
  }

  const { 
    questions_by_pk: { options, title },
  } = data;

const total = options.reduce((t, value) => t + value.votes_aggregate.aggregate.count, 0);

  return (
    <div className='text-white px-6 py-6 grid ml-44'>
        <h2 className='text-3xl font-semibold mb-10'>{title}</h2>
    

    {options.map((option, i) => (
            <div key={i} className='text-lg'>
                <label htmlFor={i}>
                    <input 
                        className='my-4 cursor-pointer h-4 w-4'
                        type="radio" 
                        name="selected" 
                        id={i}
                        value={option.id} 
                        onChange={({ target }) => setSelectedOptionId(target.value)} 
                    />
                    <span className='mx-4 cursor-pointer'>{option.title}</span>
                    {
                        isVoted && <span className='vote_count'>% ({((option.votes_aggregate.aggregate.count * 100) / (total === 0 ? 1 : total)).toFixed(2)})</span>
                    }
                </label>

                {
                    isVoted && (
                        <div className='mx-4'>
                            <progress className='border-2 white rounded-md' value={option.votes_aggregate.aggregate.count} max={total}
                            />
                        </div>
                        )}

            </div>
        ))}

        {
            !isVoted && (
                <button className='bg-white text-black w-24 my-4 hover:bg-gray-200 font-bold' disabled={loadingVote} onClick={handeClickVote}>
                    Vote
                </button>
        )
        }
 
    </div>
  )
}

export default Detail