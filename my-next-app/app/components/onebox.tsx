import React, { useRef, useState } from 'react';

const DynamicInputBox: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState('');

  const handleCommand = (command: string) => {
    document.execCommand(command, false, '');
    editorRef.current?.focus();
  };

  const handleContentChange = () => {
    setContent(editorRef.current?.innerHTML || '');
  };

  return (
    
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <div className="bg-gray-100 p-2 border-b border-gray-300 flex">
        <button className="p-1 mx-1 hover:bg-gray-200 rounded" onClick={() => handleCommand('bold')}>B</button>
        <button className="p-1 mx-1 hover:bg-gray-200 rounded" onClick={() => handleCommand('italic')}><i>I</i></button>
        <button className="p-1 mx-1 hover:bg-gray-200 rounded" onClick={() => handleCommand('underline')}><u>U</u></button>
        <button className="p-1 mx-1 hover:bg-gray-200 rounded" onClick={() => handleCommand('insertUnorderedList')}>•</button>
        <button className="p-1 mx-1 hover:bg-gray-200 rounded" onClick={() => handleCommand('createLink')}>🔗</button>
        <button className="p-1 mx-1 hover:bg-gray-200 rounded" onClick={() => handleCommand('formatBlock')}>H</button>
        <button className="p-1 mx-1 hover:bg-gray-200 rounded">≡</button>
        <button className="p-1 mx-1 hover:bg-gray-200 rounded">@</button>
      </div>
      <div >
      <textarea 
        className="w-full min-h-[100px] p-3 focus:outline-none resize-y"
        value={content}
        onChange={handleContentChange}
        placeholder="Enter your text here..."
      />
      </div>
        
       
    </div>
  );
};

export default DynamicInputBox;