function Tag(props) {

    const tag = props.tag

    return (
        <>
            <div className="tag">
                <h3>{tag.text}</h3>
            </div>
        </>
    )
}

export default Tag