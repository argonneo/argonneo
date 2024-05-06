'use client'
import useDetectScroll from "@smakss/react-scroll-direction";
import './style.scss'
import Link from "next/link";
import { HiArrowSmallUp } from "react-icons/hi2";


const ScrollUpBtn = () => {
    const { scrollDir, scrollPosition } = useDetectScroll();
    return (
        <Link className="scroll-up-btn" href={'#'}>
            <HiArrowSmallUp className="fs-4" />
        </Link>
    );
}

export default ScrollUpBtn;