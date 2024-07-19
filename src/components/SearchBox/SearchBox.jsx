import { useId } from "react";
import css from './searchBox.module.css'
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";


export default function SearchBox() {
    const value = useSelector(selectNameFilter);
    const dispatch = useDispatch();
    function handleFilter(evn) {
        dispatch(changeFilter(evn.target.value));
    }
    const idInput = useId();
    
    return (
        <div className={css.box}>
            <label className={css.labelInput} htmlFor={idInput}>Find contacts by name</label>
            <input value={value} onChange={handleFilter} type="text" id={idInput}/>
        </div>
    );
}