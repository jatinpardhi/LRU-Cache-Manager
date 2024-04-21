// CreateCacheForm.js

import React, { useState } from 'react';
import { createCache } from '../api/api';

const CreateCacheForm = () => {
  const [value, setValue] = useState('');
  const [expiration, setExpiration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCache(value, expiration);
      setValue('');
      setExpiration('');
      alert('Cache created successfully!');
    } catch (error) {
      alert('Failed to create cache. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Create Cache</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Value:
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </label>
        <label>
          Expiration:
          <input type="text" value={expiration} onChange={(e) => setExpiration(e.target.value)} />
        </label>
        <button type="submit">Create Cache</button>
      </form>
    </div>
  );
};

export default CreateCacheForm;
