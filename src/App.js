import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [genderData, setGenderData] = useState({});
  useEffect(() => {
    fetch(`https://api.genderize.io/?name=${name}`).then((resp) => resp.json()).then((resp) => setGenderData(resp))
  }, [name])
  return (
    <div className='flex justify-center h-screen items-center'>
      <div className='w-1/3 '>
        <div className='bg-yellow-600 p-3'>
          <h1 className='text-4xl m-3 font-semibold font-sans '>know your gender</h1>
          <div className='flex'>
            <input type='text' className="border w-full p-3 rounded text-2xl " value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <button type='button' className=" px-2 bg-red-500 text-white  text-2xl rounded-lg">GO</button>
          </div>
          <div className='bg-green-300 p-3 rounded shadow-lg mt-4'>
        <h2 className='text-2xl'>Your Gender is :<span className='text-green-900 text-2xl'>{genderData.gender}</span></h2>
      </div>
      </div>
        </div>
       

    </div>
  );
}
export default App;
