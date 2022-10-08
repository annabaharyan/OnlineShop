import React from 'react';
import {Button,Card} from 'react-bootstrap'
import { useThemeHook } from '../GloabalComponents/ThemeProvider';
import { useCart } from 'react-use-cart'
import {BsCartPlus} from 'react-icons/bs'
const ProductCard = (props) => {
    let { image, price,title } = props.data;
    const [theme] = useThemeHook()
    const { addItem }= useCart()

    const addtoCard =()=>{
        
       addItem(props.data)

    }
  
    return (
    
        <Card 
            style={{ width: '18rem',height:'auto'}} 
            className={`${theme?'bg-light-black ':'bg-light text-black'}
                        text-center p-0 overflow-hidden shadow mx-auto mb-4`}
        >
            <div style={{background:'white',height:'15rem',
                         overflow:'hidden',display:'flex',
                         justifyContent:'center',alignItems:'center',
                         marginBottom:'inherit'}}>
                 <div style={{width:'9rem'}}>
                   <Card.Img variant="top" src={image} className='img-fluid' />
                 </div>

            </div>
            
        
        <Card.Body>
          <Card.Title 
            className={`${theme?'bg-light-black text-light':'bg-light text-black'}`}
            style={{textOverflow:'ellipsis',overflow:'hidden', whiteSpace:'nowrap'}}
            >{title}
          </Card.Title>
          <Card.Title className={`${theme?'bg-light-black text-light':'bg-light text-black'}`}>
            Rs. <span className='h3'>{price}</span>
          </Card.Title>
          <Button onClick={()=>addtoCard()}
            className={`${theme?'bg-dark-primary text-black':'bg-light-primary text-light'} d-flex align-items-center m-auto border-0`}
          >
            <BsCartPlus size='1.8rem'/>  
            Add to Card
          </Button>
        </Card.Body>
      </Card>
    );
}

export default ProductCard;
