function Info(props) {

    const tag = props.tag

    return (
        <>
            <div className="info">
                <h3>{tag.tag}</h3>
            </div>
        </>
    )
}

export default Info