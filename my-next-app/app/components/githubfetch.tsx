// src/components/FetchGitHubData.tsx
'use client'
import React, { useState } from 'react';
import axios from 'axios';

const FetchGitHubData: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string>('');

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setData(response.data);
    } catch (err) {
      setError('User not found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 border rounded text-black"
        />
        <div className='p-2 m-2'>
        <button
          onClick={fetchData}
          className="bg-blue-500 p-2 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Fetch GitHub Data
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
            setData(null)
        }}> clear</button>
        </div>
        
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-2xl font-bold">{data.name}</h2>
          <p><strong>Username:</strong> {data.login}</p>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Bio:</strong> {data.bio}</p>
          <p><strong>Location:</strong> {data.location}</p>
          <p><strong>Public Repos:</strong> {data.public_repos}</p>
          <p><strong>Followers:</strong> {data.followers}</p>
          <p><strong>Following:</strong> {data.following}</p>
          <img src={data.avatar_url} alt="Avatar" className="w-32 h-32 rounded-full mt-4" />
        </div>
      )}
    </div>
  );
};

export default FetchGitHubData;
