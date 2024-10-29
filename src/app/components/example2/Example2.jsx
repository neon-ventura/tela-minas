import Nav from "../nav/Nav.jsx";
import styles from './Example2.module.css'

export default function Example2() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src = "/example/card3.jpeg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src = "/example/card2.jpeg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src = "/example/card1.jpeg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
