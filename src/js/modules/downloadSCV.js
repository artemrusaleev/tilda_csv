import exportCSV from './exportCSV'
import formateData from './formateData'

import 'babel-polyfill'


const downloadCSV = (items,categories)=>{
  const headers = {
    sku: 'SKU',
    category: 'Category',
    title: 'Title',
    description: 'Description',
    text: 'Text',
    photo: 'Photo',
    price: 'Price',
    quantity: 'Quantity',
    price_old: 'Price Old',
    editions: 'Editions',
    modifications: 'Modifications',
    externalId: 'External ID',
    parentUid: 'Parent UID'
  };
  const fileTitle = 'dishes';
  const itemsFormatted = formateData(items,categories)
  exportCSV(headers, itemsFormatted, fileTitle);
}

export default downloadCSV