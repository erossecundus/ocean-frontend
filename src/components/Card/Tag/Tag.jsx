function Tag(props) {

    const tag = props.tag
    // console.log('aqui a tagTag ' + tag)

    return (
        <>
            <div className="tag">
                <h3>{ tag }</h3>
            </div>
        </>
    )
}

export default Tag