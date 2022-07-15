import { Routes, Route, Link } from "react-router-dom";
import Questions from "./pages/Questions";
import NewQuestion from "./pages/New";
import Detail from "./pages/Detail";
import QuestionCounter from "./pages/QuestionCounter";
import Footer from "./components/Loading/Footer";



function App() {
  return (
      <div className="App tracking-normal bg-[#0b0418] font-poppins h-full">
        <nav className="container font-semibold text-lg flex flex-row justify-center py-12 pb-12">
          <Link className="bg-violet-500 hover:bg-violet-400 rounded-2xl mx-6  pt-2 px-6 hover:no-underline text-white" to="/">Questions</Link>
          <Link className="hover:bg-[#292334] rounded-2xl px-6 mx-6 pt-2 hover:no-underline text-white" to="/new">New Question</Link>
        </nav>

        <div className=" h-3 bg-gradient-to-r from-green-400 to-blue-500 mb-12 my-5">

        </div>

        <div className="flex flex-row items-center justify-center">
          <h1 className='text-white mb-10 flex justify-center font-semibold text-3xl py-4'>Questions</h1>
          <div className="mb-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-400 w-6 flex items-center justify-center font-bold">
            <QuestionCounter />
          </div>
        </div>

        

        <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="new" element={<NewQuestion />} />
          <Route path="question/:id" element={<Detail />} />
        </Routes>

        <div className="mt-20 h-3 bg-gradient-to-r from-blue-500 to-green-400 mt-36">

        </div>

        <Footer />

      </div>
  );
}

export default App;
