import pdfImage from "../sources/pdf/Oscar Marino Beltran Dukmak.pdf";

export default function Pdf() {
    const pdfUrl = `${pdfImage}#toolbar=0`;
    
    return (
        <div className="pdf-container absolute mt-14 w-[90%] md:w-screen h-screen mx-auto">
            <button className="absolute md:bg-black bg-red-800 font-bold w-36 h-12 rounded-full
            border-solid border-4 border-white border-opacity-53 hover:scale-125 z-20 md:mt-[36%] md:ml-[86%]
            ml-[62%] mt-[200%] ">
                <a href={pdfImage} download="Resume_Oscar_Beltran.pdf">
                    PDF download
                </a>
            </button>
            <object 
            data={pdfUrl} 
            type="application/pdf"
            width="100%"
            height="100%"
            >
            </object>
        </div>
    )
}
