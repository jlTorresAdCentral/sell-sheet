import { useEffect, useState } from 'react';
import { getDeviceBrands, getDeviceTypes } from './repository/device.repository';
import { DeviceBrand } from './model/DeviceBrand';

const DevicesComponent = () => {
    const [loading, setLoading] = useState(true)
    const [deviceTypes, setDeviceTypes] = useState<string[]>([])
    const [deviceBrands, setDeviceBrands] = useState<DeviceBrand[]>([])
    const [deviceTypeSelected, setDeviceTypeSelected] = useState<string | null>(null)
    const [title, setTitle] = useState<string>("")

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

    useEffect(() => {
        const searchDeviceBrands = async () => {
            const responseTypes = await getDeviceBrands(title);
            setDeviceBrands(responseTypes);
        };

        searchDeviceBrands();
    }, [title])

    const onSelectDeviceType = (async (deviceType: string) => {
        setDeviceTypeSelected(deviceType)
        const resultado = await getDeviceBrands(deviceType)
        setDeviceBrands(resultado)
    })

    return (
        <div>
            <h1>Pagina Dummy</h1>
            <h2>{title}</h2>

            <input
                className='input-test'
                placeholder='Busca...'
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
            />

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