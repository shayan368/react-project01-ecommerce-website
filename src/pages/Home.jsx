import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Featured from "../components/home/Featured";
import FlashSale from "../components/home/FlashSale";
import MostViewed from "../components/home/MostViewed";
import Features from "../components/home/Features";

export default function Home() {
    return (
        <>
            <Hero />
            <Featured />
            <Categories />
            <FlashSale />
            <MostViewed />
            <Features />
        </>
    );
}