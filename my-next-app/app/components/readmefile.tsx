// src/pages/user/[username]/edit.tsx
import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';

const EditReadmePage: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;
  const [readmeContent, setReadmeContent] = useState<string>('');

  const handleSave = async () => {
    // Add logic to save the README content using GitHub API
    // You'll need to authenticate the user and use GitHub's API to update the README
    console.log('Saving README content:', readmeContent);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2 bg-gray-900 text-white">
      <Head>
        <title>Edit {username}'s GitHub README</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-3xl font-bold">Edit {username}'s GitHub README</h1>
        
        <div className="flex flex-col items-start mt-6">
          <label className="mb-2 text-lg">Add a small introduction</label>
          <textarea
            value={readmeContent}
            onChange={(e) => setReadmeContent(e.target.value)}
            className="w-full h-64 mt-4 p-2 border rounded bg-gray-800 border-gray-600 text-white"
            placeholder="Enter your README content here..."
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Save README
        </button>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t border-gray-700">
        <p className="text-center">
          Powered by{' '}
          <a
            className="text-blue-600"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub API
          </a>
        </p>
      </footer>
    </div>
  );
};

export default EditReadmePage;
