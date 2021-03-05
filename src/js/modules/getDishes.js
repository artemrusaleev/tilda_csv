import alert from "./alert"
import downloadCSV from './downloadSCV'
import 'babel-polyfill'

const getDishes =  (orgId) => {
  try {
     fetch(`https://${orgId}.smartomato.ru/basket/payload.json`)
      .then((response) => {
        if (!response.ok) {
          alert(`Error: ${response.status}`, 3000, "danger")
        }
        return response.json()
      })
      .then((data) => {
       return downloadCSV(data.organization_payload.dishes,data.organization_payload.categories)
      })
      .catch((error)=>{
        alert(`Error: Something went wrong`, 2500, "danger")
      })
  } catch (error) {
    alert(`Error: ${error}`, 3000, "danger")
  }
}
export default getDishes
