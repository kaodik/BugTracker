import React, { useEffect, useState, Fragment } from 'react';

export default function Projects() {
  const [projectName, setProjectName] = useState([]);
  const getProjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/project');
      const jsonData = await response.json();
      console.log(jsonData);
      setProjectName(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div className='w-96 text-blue-200 rounded-2xl bg-blue-500 p-2'>
      <div className='flex flex-row justify-between'>
        <h2 className='text-lx pb-2'>Projects</h2>
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </button>
      </div>
      <>
        <div className='border-2 rounded text-blue-600 border-blue-400 bg-blue-50 h-20 text-base p-2'>
          {projectName.map((pName) => (
            <div>{pName.name}</div>
          ))}
        </div>
      </>
    </div>
  );
}
