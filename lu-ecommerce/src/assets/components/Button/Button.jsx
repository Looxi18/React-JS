import { createContext, useState } from "react"



const Button = ({ text, color, fn}) => {



    const [count, setCount] = useState(0)

    console.log("se renderiza el componente")

    const click = () => {
        setCount(count + 1)
        fn(count)
        console.log(count)
    }







    return (
        <button style={{ backgroundColor: color }} onClick={() => click()} >
            { text }
        </button >
    )
}
export default Button