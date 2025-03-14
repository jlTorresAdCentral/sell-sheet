import { Route, Routes } from "react-router-dom"
import { DEVICE_PATH, DEVICE_SELL_SHEET_PATH, HOME_PATH } from "./navigation-routes-names"
import DummyComponent from "../dummy/DummyComponent"
import DashboardComponent from "../dashboard/dashboard"
import DeviceSellSheetComponent from "../devices/DeviceSellSheet"

const NavigationRoutes = () => {
    return (
        <Routes>
            <Route
                path={HOME_PATH}
                element={<DashboardComponent />}
            />

            <Route
                path={DEVICE_PATH}
                element={<DummyComponent />}
            />

            <Route
                path={DEVICE_SELL_SHEET_PATH}
                element={<DeviceSellSheetComponent />}
            />
        </Routes>
    )
}

export default NavigationRoutes