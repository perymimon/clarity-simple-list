import './list.scss'
import {useAnimeManager} from '@perymimon/react-anime-manager'

export default function List(props) {
    const {children, data, component, sortedKeys, ...otherProps} = props;
    const dataState = useAnimeManager(data, {key: 'id'});

    return (
        <>
            <toolbar>

            </toolbar>
            <ul className="list">
                {dataState.map(({item: datum, phase, done, ref, meta_dx, meta_dy}, index) => {
                    const style = {
                        '--dx': meta_dx,
                        '--dy': meta_dy
                    }
                    return <li key={datum.id || index} phase={phase}
                               rer={ref}
                               style={style}
                               onAnimationEnd={done}
                               className="list-member">
                        {component({...otherProps, ...datum})}
                    </li>
                })}
            </ul>
        </>
    )

}