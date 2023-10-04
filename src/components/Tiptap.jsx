import BulletList from "@tiptap/extension-bullet-list";
import Document from "@tiptap/extension-document";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import React from "react";
import "../styles/Tiptap.css";

export default ({ handleUpdate }) => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      BulletList,
      OrderedList,
      ListItem,
      Placeholder.configure({ placeholder: "Write here." }),
    ],
    onUpdate: ({ editor }) => {
      handleUpdate(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const buttonBg = "dark:bg-zinc-900";
  const buttonGroupMiddleClass =
    "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-zinc-800 dark:text-white dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-500 dark:focus:text-white border-t border-b";
  const buttonGroupStartClass =
    buttonGroupMiddleClass + " border-l rounded-l-lg";
  const buttonGroupEndClass = buttonGroupMiddleClass + " border-r rounded-r-md";

  return (
    <>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          aria-label="Toggle Bullet List"
          className={
            buttonGroupStartClass +
            (editor.isActive("bulletList") ? " bg-gray-600" : ` ${buttonBg}`)
          }
        >
          <svg
            className="w-[16px] h-[16px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M6 1h10M6 5h10M6 9h10M1.49 1h.01m-.01 4h.01m-.01 4h.01"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          aria-label="Toggle Numbered List"
          className={
            buttonGroupMiddleClass +
            (editor.isActive("orderedList") ? " bg-gray-600" : ` ${buttonBg}`)
          }
        >
          <svg
            className="w-[16px] h-[16px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().splitListItem("listItem").run()}
          aria-label="Split List"
          className={buttonGroupMiddleClass + " " + buttonBg}
        >
          <svg
            className="w-[16px] h-[16px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1v12m0 0 4-4m-4 4L1 9"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().sinkListItem("listItem").run()}
          aria-label="Indent"
          className={buttonGroupMiddleClass + " " + buttonBg}
        >
          <svg
            className="w-[16px] h-[16px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h12M8 5h5M8 9h5M1 13h12M1 5v4l3-2-3-2Z"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().liftListItem("listItem").run()}
          aria-label="Indent"
          className={buttonGroupEndClass + " " + buttonBg}
        >
          <svg
            className="w-[16px] h-[16px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h12M8 5h5M8 9h5M1 13h12M4 5v4L1 7l3-2Z"
            />
          </svg>
        </button>
      </div>

      <EditorContent editor={editor} />
    </>
  );
};
