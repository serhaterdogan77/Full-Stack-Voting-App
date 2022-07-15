import React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { NEW_QUESTION_MUTATION } from './queries'
import { useNavigate } from "react-router-dom";



const initialOptions = [{title: '' }, { title: ''}];

function NewQuestion() {
  const [addQuestion, { loading, data}] = useMutation(NEW_QUESTION_MUTATION)


  const [title, setTitle] = useState('');
  const [options, setOptions] = useState(initialOptions);

  const handleChangeOption = ({ target }) => {
    const newArray = options;
    newArray[target.id].title = target.value;

    setOptions([...newArray]);
  }


  const navigate = useNavigate();


  const handleSave = () => {
    const filledOptions = options.filter((option) => option.title !== '')

    if (title === '' || filledOptions.lenght < 2) return false;


    addQuestion({
      variables: {
        input: {
          title,
          options: {
            data: filledOptions,
          },
        },
      },
    })

    setTitle('')
    setOptions(initialOptions)
  }

  return (
    <div className='mx-32 text-white'>

      <h2 className='text-xl font-semibold py-4'>Question</h2>
      <input className='mb-8 hover:bg-gray-200 text-black rounded-md h-12' placeholder="type your question..." value={title} onChange={({target}) => setTitle(target.value)} 
      disabled={loading}
      />

      <h2 className='text-xl font-bold py-4'>Options</h2>
      {
        options.map((option, index) => (
          <div key={index}>
            <input className='my-4 h-12 hover:bg-gray-200 text-black rounded-md' 
              placeholder="Type your option..." 
              value={option.title}
              id={index}
              onChange={handleChangeOption}
              disabled={loading}
            />
          </div>
        ))
      }

      <button className='bg-white w-28 text-black mr-10 font-bold hover:bg-gray-200' disabled={loading} onClick={() => setOptions([...options, {title: ''}])}>
        New Option
      </button>

      <button className='bg-white text-black w-20 font-bold hover:bg-gray-200' disabled={loading} onClick={() => [handleSave(), navigate("/")]}>
        Save
      </button>


    </div>
    
  )
}

export default NewQuestion