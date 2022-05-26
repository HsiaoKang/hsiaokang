import { useCallback, useState } from "react"

const useDOM = () => {
    const [container, setContainer] = useState()

    const getDOM = useCallback((elm) => {
        setContainer(elm)
    }, [])
    
    return [container, getDOM]
}
export default useDOM
