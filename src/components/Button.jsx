function Button({ children, color, size = "12px" }) {
    return (
        <button style={{ backgroundColor: color, fontSize: size }}>{children}</button>
    )
}

export default Button