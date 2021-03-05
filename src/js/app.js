import alert from "./modules/alert"
import getDishes from './modules/getDishes'
import 'babel-polyfill'

const btn = document.querySelector(".btn")
const orgId = document.querySelector("#orgId")

btn.addEventListener("click", (e) => {
  e.preventDefault()
  if (!orgId.value) {
    alert("Organization id required", 2000, "danger")
  } else {
    getDishes(orgId.value)
  }
})
