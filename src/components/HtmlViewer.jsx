import BulletList from "@tiptap/extension-bullet-list";
import Document from "@tiptap/extension-document";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, Editor } from "@tiptap/react";
import React from "react";
import "../styles/Tiptap.css";

export default ({ content }) => {
  const editor = new Editor({
    extensions: [Document, Paragraph, Text, BulletList, OrderedList, ListItem],
    content,
    editable: false,
  });

  if (!editor) {
    return null;
  }

  return <EditorContent editor={editor} />;
};
