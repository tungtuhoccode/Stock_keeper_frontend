function GrayBackground(props) {
    return (
        <div style={{
            backgroundColor: props.color || "white",
            opacity: props.opacity || "0.5"
            }} 
        className={"fixed top-0 right-0 z-[1200] h-screen w-screen"}>
            
        </div>
    )
}

export default GrayBackground