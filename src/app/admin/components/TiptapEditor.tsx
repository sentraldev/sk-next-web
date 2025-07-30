"use client";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Image from "@tiptap/extension-image";
import { useRef } from "react";
import dynamic from "next/dynamic";

const EditorContent = dynamic(
  () => import("@tiptap/react").then((mod) => mod.EditorContent),
  { ssr: false }
);

const Editor = ({ placeholder = "Start typing" }: { placeholder?: string }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc ml-4",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal ml-4",
        },
      }),
      ListItem,
      Image.configure({
        inline: false,
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-md my-2",
        },
      }),
    ],
    immediatelyRender: false,
    content: "<p>" + placeholder + "</p>",
    editorProps: {
      attributes: {
        class:
          "border border-gray-300 rounded-md p-4 px-4 min-h-[200px] focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      console.log("Editor content updated:", html);
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.size > MAX_FILE_SIZE) {
        alert("File size exceeds 1 MB limit.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const target = e.target as FileReader | null;
        if (target && target.result) {
          const src = target.result as string;
          if (editor) {
            editor.chain().focus().setImage({ src }).run();
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (!editor) return null;

  return (
    <div className="max-w-2xl mx-auto p-5">
      <div className="mb-4 flex gap-2 flex-wrap">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-2 border rounded-md ${
            editor.isActive("bold")
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          } ${
            !editor.can().toggleBold() ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!editor.can().toggleBold()}>
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-2 border rounded-md ${
            editor.isActive("italic")
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          } ${
            !editor.can().toggleItalic() ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!editor.can().toggleItalic()}>
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-2 border rounded-md ${
            editor.isActive("bulletList")
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          } ${
            !editor.can().toggleBulletList()
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={!editor.can().toggleBulletList()}>
          Bullet List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-2 border rounded-md ${
            editor.isActive("orderedList")
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          } ${
            !editor.can().toggleOrderedList()
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={!editor.can().toggleOrderedList()}>
          Numbered List
        </button>
        {/* <button
          onClick={addImage}
          className="px-3 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100">
          Add Image (URL)
        </button> */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileUpload}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
          className="px-3 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100">
          Upload Image
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
