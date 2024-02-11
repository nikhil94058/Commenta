import React from 'react';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md text-center">
        <h1 className="text-4xl text-red-500 font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300">Sorry, the page you are looking for might be in another castle.</p>
        {/* Additional dynamic content or customization */}
        <div className="mt-4">
          <img src="/path/to/your/image.png" alt="Castle Image" className="max-w-full h-auto" />
        </div>
        {/* You can add more details or customize the content based on your requirements */}
      </div>
    </div>
  );
};

export default Error;
