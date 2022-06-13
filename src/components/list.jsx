import './list.scss'

export default function List(props) {
    const {children, data, component, sortedKeys,...otherProps} = props;

    return (
        <>
            <toolbar>

            </toolbar>
            <ul className="list">
                {data.map((datum, index) => {
                    return <li key={datum.id || index} className="list-member">
                        {component({...otherProps,...datum})}
                    </li>
                })}
            </ul>
        </>
    )

}