import './dialog.scss'
import {forwardRef} from "react";

export default forwardRef(function Dialog(props, ref) {
    const {onClickClose, onClickSave, onClickCancel, children} = props;

    function handleClickSave(e){
        const ret = onClickSave?.(e);
        if(ret !== false) ref.current.close();
    }

    function handleClickCancel(e){
        const ret = onClickCancel?.(e);
        if(ret !== false) ref.current.close();
    }

    function handleClickClose(e){
        const ret = onClickClose?.(e);
        if(ret !== false) ref.current.close();
    }

    return (
        <dialog ref={ref}>
            <button onClick={handleClickClose}>
                <i className="la la-close" ></i>
            </button>
            <main>
                {children}
            </main>
            <toolbar>
                <button onClick={handleClickSave}>Save</button>
                <button onClick={handleClickCancel}>Cancel</button>
            </toolbar>

        </dialog>
    )
})