export function DeleteButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      aria-label="Delete Entry"
      className="inline-flex items-center px-4 py-2 text-sm font-medium focus:outline-none text-gray-900 border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-blue-700 dark:border-zinc-800 dark:text-white dark:hover:text-white hover:bg-red-500 dark:hover:bg-red-600 dark:focus:text-white border rounded-md float-right"
    >
      <svg
        className="w-[16px] h-[16px] text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 20"
      >
        <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
      </svg>
    </button>
  );
}

export default DeleteButton;
