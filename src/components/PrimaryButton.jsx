export function PrimaryButton({ text, type, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="dark:text-neutral-100 bg-amber-500 border border-amber-300 dark:border-amber-500 hover:bg-amber-400 dark:bg-gradient-to-r dark:from-amber-500 dark:via-amber-600 dark:to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
