import { format } from 'date-fns'
import { es } from 'date-fns/locale'




const formatDate = (isoString) => {
    const date = new Date(isoString)
    return format(date, "d 'de' MMMM 'de' yyyy", { locale: es })

}


export default formatDate