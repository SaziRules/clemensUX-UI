import React from 'react';

function Modal({ isOpen, onClose, children }) {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all w-full max-w-3xl">
          <div className="relative p-4">
            <button 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" 
              onClick={onClose}
            >
              ✖
            </button>
            {children}
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
