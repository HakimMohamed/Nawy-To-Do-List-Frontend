const MessageBox = () => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center p-2.5 bg-gray-800 shadow-md rounded-2xl z-50 text-gray-300 w-120 h-12">
      <div className="flex items-center mr-2.5">
        <label htmlFor="file" className="flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 337 337"
            className="w-6 h-6"
          >
            <circle
              strokeWidth="20"
              stroke="#ccc"
              fill="none"
              r="158.5"
              cy="168.5"
              cx="168.5"
            ></circle>
            <path
              strokeLinecap="round"
              strokeWidth="25"
              stroke="#ccc"
              d="M167.759 79V259"
            ></path>
            <path
              strokeLinecap="round"
              strokeWidth="25"
              stroke="#ccc"
              d="M79 167.138H259"
            ></path>
          </svg>
        </label>
        <input type="file" id="file" name="file" className="hidden" />
      </div>
      <input
        required
        placeholder="Add a task"
        type="text"
        id="messageInput"
        className="flex-grow p-2.5 bg-transparent border-none text-gray-300 outline-none"
      />
      <button
        id="sendButton"
        className="flex items-center justify-center bg-transparent border-none cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 664 663"
          className="w-6 h-6 stroke-gray-300"
        >
          <path
            fill="none"
            d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="33.67"
            stroke="#ccc"
            d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default MessageBox;
