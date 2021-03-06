import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getShops } from '../../redux/shopsSlice';
import { getOrder, setOrder } from '../../redux/orderSlice';
import { fetchAllShops } from '../../redux/shopsOperations';
import { getActiveShop } from '../../redux/shopsSlice';
import { List, ListItem, CardPhoto, CardName, CardButton, CardPrice, CardInfo } from './ShopCard.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export default function ShopsCart() {
    const dispatch = useDispatch();
    const availableShops = useSelector(getShops);
    const activeShop = useSelector(getActiveShop);
    const order = useSelector(getOrder);

    useEffect(() => {
        dispatch(fetchAllShops())
    }, [dispatch])

    const findShop = availableShops.find(({ shop }) => shop === activeShop)

    const addProduct = useMemo(
        () => 
        (name, price, image) => {
        if (order.find(item => item.name === name)) {
            Notify.info(`You have already added ${name} to your order`)
            return
        }
        dispatch(setOrder({name, price, image}))
    },[dispatch, order])

    // const addProduct = (name, price, image) => {
    //     if (order.find(item => item.name === name)) {
    //         Notify.info(`You have already added ${name} to your order`)
    //         return
    //     }
    //     dispatch(setOrder({name, price, image}))
    // };

    return (
        <List>
            {findShop && findShop.products.map(({name, price, image}) => (
                <ListItem key={name}>
                    <CardPhoto src={image} alt={name} />
                    <CardInfo>
                        <CardName>{name}</CardName>
                        <CardPrice>$ {price}</CardPrice>
                        <CardButton onClick={() => addProduct(name, price, image)}>Add to cart</CardButton>
                    </CardInfo>
                </ListItem>
            ))}   
        </List>    
    )
};