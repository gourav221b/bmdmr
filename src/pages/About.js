import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Landing/landing.css';
import '../components/about/about.css';
function About() {
  return (
    <>
        <div className="div_big landing secondarylanding row" id="top">
                <div className="landingdetails col-lg-6">
                <h1>About Us</h1>
                <p>Know who is in the business by your side</p>
                </div>
                
            </div>
            <div className="aboutdetails">
            <p>BMA Market Research is an India based research and consulting company. The company provides
syndicated research reports, customized research reports, and consulting services. We are focused to
exhume the excellent opportunities in the market and promote efficient information for your business
to thrive in the market. BMA provide accurate solutions to the complex business challenges and execute
an effortless decision-making process</p>

<h2>What we do</h2>
<p>We offer syndicate market research reports, competitive intelligence, market intelligence ensuring
relevant research across wide range of industries such as chemicals, materials, healthcare, food &
beverages, banking, insurance, financial services and technology. We have a team of adverse
forecasters, analysts and researchers who engaged in diligent research on different markets, trends and
emerging opportunities to cater your business needs. BMA research focus to make your organization
well familiarize with intense knowledge of the global and local markets.
</p>
      </div>   
        </>
  );
}

export default About;
