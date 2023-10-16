import ServiceItem from "./ServiceItem"
function Services() {
    return(
        <div className="section bg-dark text-light ">
            <div className="container">
            <h1>Services</h1>
            <div className="row">
                <ServiceItem 
                judul="Back End Developer"
                deskripsi="Back end merupakan bagian dari situs web yang tidak dilihat oleh pelanggan. Back end berurusan dengan data-data di balik layar, ia bertanggung jawab dalam menyimpan dan mengatur data, serta memastikan hal yang ada pada sisi klien berfungsi dan tidak bermasalah"
                />
                <ServiceItem 
                judul="Front End Developer"
                deskripsi="Front end developer bertanggung jawab mengimplementasikan desain dan konsep yang ada di web. Implementasi tersebut bisa dicapai menggunakan beberapa bahasa. Bahasa pemrograman yang digunakan untuk bagian front end developer adalah HTML, CSS, dan JavaScript"
                />
                </div>
            </div>
        </div>
    )
}

export default Services
