import React, { useEffect, useState } from 'react';
import { getDeviceBrands, getDeviceTypes } from './repository/device.repository';

const DevicesComponent = () => {
    const [loading, setLoading] = useState(true)
    const [deviceTypes, setDeviceTypes] = useState<string[]>([])
    const [deviceBrands, setDeviceBrands] = useState<DeviceBrand[]>([])
    const [deviceTypeSelected, setDeviceTypeSelected] = useState<string | null>(null)

    useEffect(() => {
        setTimeout(() => {
            const fetchDeviceTypes = async () => {
                const responseTypes = await getDeviceTypes();
                setDeviceTypes(responseTypes);
            };

            fetchDeviceTypes()
            setLoading(false)
        }, 2000)
    }, [])

    const onSelectDeviceType = (async (deviceType: string) => {
        setDeviceTypeSelected(deviceType)
        const resultado = await getDeviceBrands(deviceType)
        setDeviceBrands(resultado)
    })

    return (
        <div>
            <h1>Dispositivos:</h1>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <ul>
                    {deviceTypes.map((deviceType) => (
                        <li
                            key={deviceType}
                            onClick={() => onSelectDeviceType(deviceType)}
                        >
                            {deviceType}
                        </li>
                    ))}
                </ul>
            )}

            {deviceBrands.length > 0 && (
                <ul>
                    {deviceTypeSelected ? (
                        <h2>Marcas para: {deviceTypeSelected}</h2>
                    ) : (
                        <h2>Marcas:</h2>
                    )}
                    {deviceBrands.map((brand) => (
                        <li key={brand.id}>
                            {brand.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DevicesComponent