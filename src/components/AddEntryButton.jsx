export function AddEntryButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-600 focus:outline-none bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full"
    >
      Add entry
    </button>
  );
}

export default AddEntryButton;
