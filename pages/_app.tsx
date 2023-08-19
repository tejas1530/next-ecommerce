import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { useEffect, useState } from "react";

interface ProductCart {
	itemCode: number;
	qty: number;
	price: number;
	name: string;
	size: string;
	variant: string;
}

export default function App({ Component, pageProps }: AppProps) {
	const [cart, setCart] = useState<{ [itemCode: number]: ProductCart }>({});
	const [subTotal, setSubTotal] = useState(0);

	useEffect(() => {
		// console.log("hey")
		try {
			const savedCart = localStorage.getItem("cart");
			if (savedCart !== null) {
				setCart(JSON.parse(savedCart));
			} else {
			}
		} catch (error) {
			console.error(error);
			localStorage.clear();
		}
	}, []);

	const saveCart = (myCart: any) => {
		localStorage.setItem("cart", JSON.stringify(myCart));
		let subT = 0;
		let keys = Object.keys(myCart);
		for (let i = 0; i<keys.length; i++) {
			subT += myCart[keys[i]].price * myCart[keys[i]].qty;
		}
    setSubTotal(subT)
	};

	const addToCart = (
		itemCode: number,
		qty: number,
		price: number,
		name: string,
		size: string,
		variant: string
	): void => {
		let newCart = cart;
		if (itemCode in cart) {
			newCart[itemCode].qty = cart[itemCode].qty + qty;
		} else {
			newCart[itemCode] = {
				qty: 1,
				price,
				name,
				size,
				variant,
				itemCode,
			};
		}
		setCart(newCart);
		saveCart(newCart);
	};

	const clearCart = () => {
		setCart({});
		saveCart({});
	};

	const removeFromCart = (
		itemCode: number,
		qty: number,
		price: number,
		name: string,
		size: string,
		variant: string
	): void => {
		let newCart = cart;
		if (itemCode in cart) {
			newCart[itemCode].qty = cart[itemCode].qty - qty;
		}
		if (newCart[itemCode]["qty"] <= 0) {
			delete newCart[itemCode];
		}
		setCart(newCart);
		saveCart(newCart);
	};

	return (
		<>
			<Head>
				<title>Next-ECommerce</title>
				<meta property="og:title" content="My page title" key="title" />
			</Head>
			<NavBar
				cart={cart}
				removeFromCart={removeFromCart}
				addToCart={addToCart}
				subTotal={subTotal}
				clearCart={clearCart}
			/>

			<Component
				cart={cart}
				removeFromCart={removeFromCart}
				addToCart={addToCart}
				subTotal={subTotal}
				clearCart={clearCart}
				{...pageProps}
			/>
			<Footer />
		</>
	);
}
