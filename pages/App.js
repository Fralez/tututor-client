import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

function App(){
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }
    return (
      <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={openModal}>Open Modal</button> */}
          <form class="w-7/12">
            <div class="md:w-full">
              <p class="mt-2 text-3xl leading-9 font-extrabold text-gray-900">Create a question</p>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-full">
                <input class= "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" id="inline-full-name" type="text" placeholder="Insert title with question" />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-full">
                <textarea class="resize-none appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" rows="10" placeholder="Description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="m-1">
                <button class="bg-pink-400 hover:bg-pink-500 text-white font-bold py-0.5 px-3 rounded-full">
                  Media
                </button>
              </div>
              <div class="m-1">
                <button class="bg-blue-300 hover:bg-blue-400 text-white font-bold py-0.5 px-3 rounded-full">
                  Filters
                </button>
              </div>
            </div>
            <div class="flex justify-end ">
              <div>
                <button class="m-3 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full">
                  Cancel
                </button>
                <button class="btn-purple bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                  Create
                </button>
              </div>
            </div>
          </form>
        {/* <Modal isOpen={modalIsOpen} onRequestClose={closeModal} class="modal">
        </Modal> */}
        <style jsx>{`
        `}
        </style>
      </div>
    );
}
export default App;