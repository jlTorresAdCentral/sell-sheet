import { useNavigate } from "react-router-dom"
import { DEVICE_PATH, DEVICE_SELL_SHEET_PATH } from "../navigation/navigation-routes-names"

const DashboardComponent = () => {
    const navigate = useNavigate()

    return (
        <div>
            DASHBOARD
            <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    ¡Hola, responsividad!
                </h1>
            </div>

            <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"

                onClick={() => {
                    navigate(DEVICE_PATH)
                }}
            >
                Ir a Devices
            </button>

            <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"

                onClick={() => {
                    navigate(DEVICE_SELL_SHEET_PATH)
                }}
            >
                Ir a Devices Sell Sheet
            </button>
        </div>
    )
}

export default DashboardComponent