import type { Component } from 'solid-js';
import { style } from '@macaron-css/core';

const main = style({});

const FileImporter = () => {
  return (
    <div class='file-importer'>
      <button onclick={fileAccessor}>Import File</button>
    </div>
  );
};

const fileAccessor = async () => {
  // we use File System Access API to access the file
  // https://web.dev/file-system-access/
  // https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
  // https://wicg.github.io/file-system-access/
  // https://developer.chrome.com/articles/file-system-access/

  // check if the API is available
  if (!('showOpenFilePicker' in window)) {
    alert('File System Access API is not available');
    return;
  } else {  
    // get the file
    const pickerOptions = {
      types: [
        {
          description: 'CSV Files',
          accept: {
            'text/csv': ['.csv'],
          },
        },
      ],
    };
    //@ts-ignore
    const [fileHandle] = await window.showOpenFilePicker(pickerOptions);
    const file = await fileHandle.getFile();
    console.log(file);
  }
  
};

const CsvImport: Component = () => {
  return (
    <div class={main}>
      CsvImport Component working...
      <div class='file-importer'>
        <FileImporter />
      </div>
    </div>
  );
};

export default CsvImport;