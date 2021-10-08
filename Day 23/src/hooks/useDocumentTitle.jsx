import {useEffect} from 'react'

function useDocumentTitle(count) {
    return (
        useEffect(()=> {
            document.title =`Count ${count}`
        },[count])
        
    )
}

export default useDocumentTitle
