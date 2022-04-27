import {useState, useEffect} from "react";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue)

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
    const parseContacts = JSON.parse(window.localStorage.getItem(key))
    setState(parseContacts)
  }, [key, state])

  return [state, setState]
}

export default useLocalStorage