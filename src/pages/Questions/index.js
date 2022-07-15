import React from 'react'
import { useSubscription } from "@apollo/client";
import  { QUESTIONS_SUBSCRIPTION } from './queries';
import Loading from '../../components/Loading/Loading';
import { Link } from 'react-router-dom';

function Questions() {
  const { loading, data} = useSubscription(QUESTIONS_SUBSCRIPTION);

  if (loading) {
    return <Loading />
  }


  return (
    <div className='md:grid md:grid-cols-3 md:gap-6 md:justify-between md:px-28 grid grid-cols-1'>
      {
        data.questions.map((question) => (
          <div className="text-white py-2 my-4 mx-6 bg-[#292334] hover:bg-[#534d5e] flex items-center justify-center h-16 rounded-xl" key={question.id}>
              <Link className="text-xl flex font-normal h-14 w-[330px] items-center justify-center" to={`/question/${question.id}`}>{question.title}</Link>
          </div>
        ))
      }
    </div>
  );
}

export default Questions