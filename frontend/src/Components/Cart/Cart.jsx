import {
  Box,
  Flex,
  Heading,
  Button,

  Input,
  Image
} from "@chakra-ui/react";
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Cart = ({item,handleCartClear}) => {
    console.log("df",item)
    const [cartItems,setCartItems] = useState(item)
      const [amount, setAmount] = useState(0);
      const [total, setTotal] = useState(0);
      const [cgst, setcgst] = useState(0);
      const getTotal = () => {
        setAmount(0);
        {
          cartItems.map((el) => setAmount((prev) => prev + el.price));
        }
      };
      useEffect(() => {
        getTotal();
      }, [cartItems]);



      useEffect(() => {
        setcgst(amount * 0.09);
        setTotal(amount + 2 * cgst);
      }, [cartItems, amount]);
console.log(amount)
        const handleRemove = (el) => {
          cartItems.splice(el, 1);
          console.log(cartItems);
          
          setCartItems(cartItems);
        };




    const totalPrice = item.reduce(
        (price,item)=>price + item.price ,0
    )
  return (
    <div className="cart-items">
      <Box
        backgroundColor="rgb(248, 248, 248)"
        w="100%"
        h="auto"
        p="2rem"
        // border="1px solid red"
      >
        <Box
          w="70%"
          h="auto"
          m="auto"
          mt="2rem"
          bgColor="white"
          boxShadow="base"
          display="flex"
          mb="2rem"
        >
          <Box w="70%" h="100%">
            <Heading textAlign="left" p="1rem" size="md" fontWeight="medium">
              Cart
            </Heading>

            {item.map((el) => (
              <Box
                borderBottom="1px dashed gray"
                display="flex"
                padding="1.5rem"
              >
                <Box
                  onClick={() => handleRemove(el)}
                  w="80%"
                  h="100%"
                  display="flex"
                >
                  <Image
                    ml="1rem"
                    mt="auto"
                    mb="auto"
                    w="150px"
                    h="50px"
                    src={el.image}
                  />
                  <Heading ml="1rem" mt="auto" mb="auto" size="sm">
                    {el.heading}
                  </Heading>
                </Box>

                <Box
                  mt="2rem"
                  display="flex"
                  w="20%"
                  h="100%"
                  // border="1px solid blue"
                >
                  <p
                    style={{
                      color: "rgba(0, 0, 0, 0.54)",
                      textDecoration: "line-through",
                      fontSize: "0.75rem",
                      fontWeight: "400",
                      lineHeight: "1.6",
                      paddingTop: "8px",
                      // mr: "1rem",
                    }}
                  >
                    {el.price}
                  </p>
                  <span>
                    <p style={{ paddingLeft: "0.5rem" }}>
                      <b>{el.dis_price}</b>
                    </p>
                  </span>
                </Box>
              </Box>
            ))}
            <Flex padding="1rem" flexDir="row-reverse">
              <Button
                className="btn btn-awesome"
                boxShadow="0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);"
                colorScheme="red"
                size="sm"
                verticalAlign="middle"
                m="10px 0 10px 0px"
                onClick={() => handleCartClear()}
              >
                EMPTY CART
              </Button>
            </Flex>
          </Box>
          <Box w="30%" borderLeft="1px solid gray" padding="2rem" h="100%">
            <Flex borderBottom="1px solid grey" justifyContent="space-between">
              <Box>Amount</Box>
              <Box>₹{amount}</Box>
            </Flex>
            <Flex
              mt="1rem"
              borderBottom="1px solid grey"
              justifyContent="space-between"
            >
              <Box>CGST</Box>
              <Box>₹ {Math.round(cgst)}</Box>
            </Flex>
            <Flex
              mt="1rem"
              borderBottom="1px solid grey"
              justifyContent="space-between"
            >
              <Box>SGST</Box>
              <Box>₹ {Math.round(cgst)}</Box>
            </Flex>
            <Flex mt="2rem" justifyContent="space-between">
              <Box fontWeight="bold">Total </Box>
              <Box fontWeight="bold">₹ {Math.round(totalPrice)}</Box>
            </Flex>
            <Flex mt="2rem">
              <Input w="60%" placeholder="Coupon Code" variant="flushed" />
              <Button
                boxShadow="0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);"
                colorScheme="red"
                size="sm"
                verticalAlign="middle"
                m="10px 0 10px 0px"
                marginRight="-20px"
                w="30%"
              >
                G0
              </Button>
            </Flex>
            <Link to="/checkout">
              <Flex mt="0.5rem">Pay</Flex>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Cart