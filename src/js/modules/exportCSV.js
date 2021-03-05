import jsonToCsv from './jsonToCsv'
import alert from './alert'

const exportCSV = (headers, items, fileTitle) => {
  if (headers) {
      items.unshift(headers);
  }

  // Convert Object to JSON
  let jsonObject = JSON.stringify(items);

  let csv = jsonToCsv(jsonObject);

  let exportedFilenmae = fileTitle + '.csv' || 'export.csv';

  let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, exportedFilenmae);
  } else {
      let link = document.createElement("a");
      if (link.download !== undefined) { // feature detection
          // Browsers that support HTML5 download attribute
          let url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", exportedFilenmae);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          alert('Success :)',3000,'success')
          document.body.removeChild(link);
      }
  }
}

export default exportCSV