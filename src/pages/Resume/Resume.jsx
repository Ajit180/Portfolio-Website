import Navbar from "../../Components/Navbar";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
const Resume = () => {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <h1>Resume</h1>
          <p>
            Download my complete resume or view it directly in your browser.
            Updated with my latest experience and skills.
          </p>
          <button>View full Page</button>
          <button>Download page</button>
        </div>
        <div className="flex flex-row">
          {/* PDF viewer using object tag */}
          <embed
            className="m-auto h-100 border rounded-lg md:w-250 md:h-200"
            src="https://testbucketajit10045.s3.eu-north-1.amazonaws.com/Ajit_Yadav.pdf"
            type="application/pdf"
          />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Resume;
