import React, { useState, createContext } from "react"

const initialState = { quizOpen: false }

export const StateContext = createContext()

const StateProvider = ({ children }) => {
    const [state, setState] = useState(initialState)

    return <StateContext.Provider value={{ state, setState }}>
        {children}
    </StateContext.Provider>
}

const useSiteContext = () => {
    const context = React.useContext(StateContext)
    if (context === undefined) {
        throw new Error(`useSiteContext must be used within a SiteProvider`)
    }
    return context
}

function useQuizOpen() {
    const { setState } = useSiteContext()

    function toggleQuizOpen(value) {
        setState(prevState => {
            return {
                ...prevState,
                quizOpen: value,
            }
        })
    }
    return toggleQuizOpen
}


export { StateProvider, useSiteContext, useQuizOpen }

