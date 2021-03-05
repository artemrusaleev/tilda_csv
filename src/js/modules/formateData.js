const formateData = (data,categories) => {
  let result = []
  let category = '';
  data.forEach((item) => {
    categories.forEach(el => {
      if(item.category_id === el.id){
        category = el.name;
      }
    });
    result.push({
        sku: item.id,
        category: category,
        title: item.name.replace(/,/g, ''), // remove commas to avoid errors,
        description: '',
        text: item.descrtiption === undefined ? '': item.descrtiption,
        photo: item.photo.large === null ? '': item.photo.original,
        price: item.price,
        quantity: '',
        price_old: item.old_price === null ? '': item.old_price,
        editions: null,
        modifications: null,
        externalId: item.id,
        parentUid: null
    });
  });
  return result
}
export default formateData
