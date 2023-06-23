function GrayBackground(props) {
    let color = props.color || "bg-white"
    return (
        <div className={"fixed top-0 right-0 opacity-60 z-[1200] h-screen w-screen "+color }>
            
        </div>
    )
}

export default GrayBackground