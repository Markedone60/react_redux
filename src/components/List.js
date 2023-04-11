import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { filterService, removeService, serviceEdit } from '../redux/actionCreators';

export default function List() {
    const items = useSelector(state => state.serviceList);
    const filter = useSelector(state=> state.serviceSearch.filterInput)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(filterService(filter))
    }, [filter])

    const handleRemove = id => {
        dispatch(removeService(id));
    }

    const handleEdit = id => {
        let targetService = items.filter(serv=>serv.id === id )
        targetService = targetService.length > 0 ? targetService[0] : null

        if(targetService !== null) {
            let {name, price, id} = targetService
            dispatch(serviceEdit(name, price, id))
        }
    }

    return (
        <ul>
            {items.map(o => (
                <li key={o.id}>
                    {o.name} {o.price}
                    <button onClick={()=>handleEdit(o.id)}>Edit</button>
                    <button onClick={() => handleRemove(o.id)}>✕</button>
                </li>
            ))}
        </ul>
    )
}
