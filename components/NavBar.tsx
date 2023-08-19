import Image from "next/image";
import React, { useRef } from "react";
import logo from "../public/logo.png";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillCloseCircle ,AiOutlineArrowRight,AiOutlineMinusCircle,AiOutlinePlusCircle} from "react-icons/ai";
type Props = {};

const NavBar = (props: Props) => {
	const ref = React.useRef<HTMLInputElement>(null);
	const toggleCart = () => {
		if (ref.current?.classList.contains("translate-x-full")) {
			ref.current.classList.remove("translate-x-full");
			ref.current.classList.add("translate-x-0");
		} else if (
			ref.current &&
			!ref.current?.classList.contains("translate-x-full")
		) {
			ref.current.classList.remove("translate-x-0");
			ref.current.classList.add("translate-x-full");
		}
	};
	return (
		<header className="flex justify-between space-y-3 flex-col items-center md:flex-row shadow-lg py-2 ">
			<div className="logo mx-5 pt-2 flex items-center w-screen sm:w-fit sm:p-3.5 justify-around ">
				<Link href={"/"}>
					{" "}
					<Image
						className="md:h-14 md:w-14 h-8 w-8   "
						src={logo}
						alt="logo"
						// height={10}
						// width={200}
					/>
				</Link>
				<div className="sm:hidden" onClick={toggleCart}>
					<FiShoppingCart className="text-xl" />
				</div>
			</div>
			<div className="nav">
				<ul className="flex space-x-9   ">
					<Link href={"/kurtis"}>
						<li>Kurtis</li>
					</Link>
					<Link href={"/jewelry"}>
						<li>Jewelry</li>
					</Link>
					<Link href={"/gowns"}>
						<li>Gowns</li>
					</Link>
					<Link href={"/palazzoSuits"}>
						<li>Palazzo Suits</li>
					</Link>
				</ul>
			</div>
			<div
				className="cart md:mx-7 hidden sm:block  "
				onClick={toggleCart}
			>
				<FiShoppingCart className="text-3xl" />
			</div>

			<div
				ref={ref}
				className="sidebar absolute top-0 right-0 bg-pink-100 py-10 px-10 transform translate-x-full transition-transform w-screen z-50  h-screen sm:w-[70%] "
			>
				<h2 className="font-bold text-center py-3  text-xl">
					Shopping Cart
				</h2>
				<span
					onClick={toggleCart}
					className="x text-2xl text-pink-500 top-5 right-3 absolute cursor-pointer "
				>
					{" "}
					<AiFillCloseCircle />{" "}
				</span>
				<ol className="list-decimal space-y-3 font-semibold ">
					<li>
						<div className="flex" >
              <div className="w-2/3 font-semibold " >
                  t shirt wear the code
              </div>
              <div className="flex font-semibold items-center justify-center w-1/3  " >  <AiOutlineMinusCircle className="mx-1 text-2xl" />1 <AiOutlinePlusCircle className="mx-1 text-2xl" />
              </div>
            </div>
					</li>
          <li>
						<div className="flex" >
              <div className="w-2/3 font-semibold " >
                  t shirt wear the code
              </div>
              <div className="flex font-semibold items-center justify-center w-1/3  " >1</div>
            </div>
					</li>
          <li>
						<div className="flex" >
              <div className="w-2/3 font-semibold " >
                  t shirt wear the code
              </div>
              <div className="flex font-semibold items-center justify-center w-1/3  " >1</div>
            </div>
					</li>
          <li>
						<div className="flex" >
              <div className="w-2/3 font-semibold " >
                  t shirt wear the code
              </div>
              <div className="flex font-semibold items-center justify-center w-1/3  " >1</div>
            </div>
					</li>
				</ol>
        <div className="flex justify-center mt-7 " >
        <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none flex hover:bg-pink-600 rounded text-lg w-[70%]  items-center text-center justify-center ">Check out{` `}<AiOutlineArrowRight className="mx-2 mt-1 " /></button>
        </div>
			</div>
		</header>
	);
};

export default NavBar;
