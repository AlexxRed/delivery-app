// import { NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import { List, ListItem, ShopAvatar, ShopBox, ShopName } from './ShopsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getShops, setShop } from '../../redux/shopsSlice';
import { fetchAllShops } from '../../redux/shopsOperations';


export default function ShopsList() {
    const dispatch = useDispatch();
    const availableShops = useSelector(getShops);
    
    useEffect(() => {
        dispatch(fetchAllShops())
    }, [dispatch])

    // const availableShops = ['Burger House','Saladder','JapanCO','Bakery Place','Pizza Party','Only Meat']

    return (
        <List>
            {/* {isLoading && <Loader/>} */}
            {availableShops.length === 0 && <h3>...oops something went wrong :(</h3>}  
            {availableShops.map((item) => (
                <ListItem key={item._id} onClick={() => dispatch(setShop(item.shop))}>
                    <ShopBox>
                        <ShopAvatar />
                        <ShopName>{item.shop}</ShopName>
                    </ShopBox>
                </ListItem>
            )
            )}
        </List>

    )
};





