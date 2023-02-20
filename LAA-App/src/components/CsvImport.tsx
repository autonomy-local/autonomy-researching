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

const Table = () => {
  return (
    <div class='table'>
      <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
    </tr>
    <tr>
      <td>Jane Doe</td>
      <td>jane@example.com</td>
    </tr>
  </tbody>
</table>

    </div>
  );
};

const fileAccessor = async () => {
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
    const fileText = await file.text();
    const lines: string[] = fileText.split(/\n/);
    const result:string[][] = lines.map((line) => line.split(','));
    console.log(result);
  }
  
};

const CsvImport: Component = () => {
  return (
    <div class={main}>
      CsvImport Component working...
        <FileImporter />
        <Table />
    </div>
  );
};

export default CsvImport;