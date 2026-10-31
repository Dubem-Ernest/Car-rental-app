import React from 'react'
import CarDescription from './CarDescription'

const CarDescriptionModal = () => {
    const [show, setshow] = useState(false)

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 transition-all duration-500 items-center justify-center">
            <CarDescription/>
    </div>
  )
}

export default CarDescriptionModal