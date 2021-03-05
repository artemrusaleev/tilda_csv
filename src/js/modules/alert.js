const alert = (message,timeout,type) => {
  const id = '_' + Math.random().toString(36).substr(2, 9);
  const target = document.querySelector('.target')
  const template = `
    <div id=${id} class="alert alert-${type}" role="alert">
        ${message}
    </div>`
  target.insertAdjacentHTML('afterbegin',template)
  setTimeout(()=>{
    document.querySelector('#'+id).remove()
  },timeout)

}
export default alert