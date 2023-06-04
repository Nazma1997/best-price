import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });


const editorConfig = {
  // readonly: false,
  // toolbar: true,
  // spellcheck: true,
  // language: 'en',
  // toolbarButtonSize: 'medium',
  // toolbarAdaptive: false,
  // showCharsCounter: true,
  // showWordsCounter: true,
  // showXPathInStatusbar: false,
  askBeforePasteHTML: false,
  askBeforePasteFromWord: true,
  defaultActionOnPaste: "insert_clear_html",
  // buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true
  },
  // width: 800,
  height: 300
};
const Editor = ({description, setDescription}) => {
  // const [content, setContent] = useState('');

  // const handleContentChange = (newContent) => {
  //   setContent(newContent);
  // };

  
  
 
  return (
    <div>
      <JoditEditor value={description} onChange={value => setDescription(value)}   	config={editorConfig}/>
    </div>
  );
};

export default Editor;