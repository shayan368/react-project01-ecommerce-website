import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Featured from "../components/home/Featured";
import CustomPCBanner from "../components/home/CustomPCBanner";
import FlashSale from "../components/home/FlashSale";
import MacbookBanner from "../components/home/MacbookBanner";
import MostViewed from "../components/home/MostViewed";
import Features from "../components/home/Features";
import Footer from "../components/layout/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <Hero />
            <Featured />
            <Categories />
            <CustomPCBanner />
            <FlashSale />
            <MacbookBanner />
            <Features />
            <MostViewed />
            <Footer />
        </>
    );
}