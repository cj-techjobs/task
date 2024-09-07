import "./App.css";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import { ImageText } from "./components/ImageText";

// changes
import AboutUs from './footer/aboutUs';
import CustomerService from './footer/customerService';
import ContactUs from './footer/contactUs';
import SocialMediaLinks from './footer/socialMediaLinks';
import LegalLinks from './footer/legalLinks';
import Terms from './footer/terms';
import "./App.scss";
import HeadBanner from "./header/head-banner";
import Center from "./header/center";
import NavStrip from "./header/navStrip";
import FAQ from "./components/Accordian";
import BestDealsSection from "./components/bestDeals";

function Giftcard() {
  return (
    <div className="App">
      <header>
        <HeadBanner />
        <Center />
        <NavStrip />
      </header>
      {/* <Newheader /> */}
      <Banner />
      <Cards />
      <ImageText />
      {/* FOOTER */}
      <FAQ/>
      <img
      className="_1u24qsi1 _1u24qsi2"
      alt="Attention, Waybors! Don't miss exclusive deals and perks on the app. Download the App."
      src="https://assets.wfcdn.com/im/20043935/resize-h312-w2000%5Ecompr-r85/2762/276204445/attention%2C_waybors%21_don%27t_miss_exclusive_deals_and_perks_on_the_app._download_the_app.__276204445.jpg"
      srcSet="https://assets.wfcdn.com/im/20043935/resize-h312-w2000%5Ecompr-r85/2762/276204445/attention%2C_waybors%21_don%27t_miss_exclusive_deals_and_perks_on_the_app._download_the_app.__276204445.jpg 960w, https://assets.wfcdn.com/im/39685217/resize-h300-w825%5Ecompr-r85/2762/276204443/attention%2C_waybors%21_don%27t_miss_exclusive_deals_and_perks_on_the_app._download_the_app.__276204443.jpg 1w"
      sizes="" // If you have a specific size, include it here
    />
  <BestDealsSection/>
      <footer>
      <div className="content">
        <AboutUs />
        <CustomerService />
        <ContactUs />
      </div>
      <hr />
      <div className="bottom">
        <div className="legal">

        <LegalLinks />
        <SocialMediaLinks />
        <Terms/>

        </div>
        <p className="copyright">© 2002 - 2024 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA 02116</p>
      </div>
    </footer>
    </div>
  );
}

export default Giftcard;
