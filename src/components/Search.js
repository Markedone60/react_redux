import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { filterServiceList} from '../redux/actionCreators';

export default function Search () {
    const filter = useSelector(state=> state.serviceSearch.filterInput)
    const dispatch = useDispatch()

    const handleChange = evt => {
        dispatch(filterServiceList(evt.target.value));
    }

    return (
        <div>
            <input className='search' type="text" value={filter} onChange={handleChange}/>
        </div>
    )
}