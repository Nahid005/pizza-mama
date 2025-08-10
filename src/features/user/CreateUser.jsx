import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from './userSlice';
import { useNavigate } from 'react-router';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(createUser(username));
    setUsername("")

    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <p className='text-base font-semibold text-stone-700'>👋 Welcome! Please start by telling us your name:</p>
      <input
        className='input'
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && username.length > 3 && (
        <div className='text-center'>
          <button className='btn'>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
