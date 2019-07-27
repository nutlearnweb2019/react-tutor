import React from 'react';

class Carousel extends React.Component {
    render() {
        return (
            <div id="carousel" className="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1556726307-09a5d69f2cd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" class="d-block w-100" alt="11" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1562516685-488706077e1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80." class="d-block w-100" alt="22" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1562627952-f52a76c3c823?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80" class="d-block w-100" alt="33" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Carousel;
