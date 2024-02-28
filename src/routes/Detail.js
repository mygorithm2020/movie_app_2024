import React from "react";
import './Detail.css';
import { Navigate } from "react-router-dom";

class Detail extends React.Component {
    componentDidMount() {
        const {location, navigate} = this.props;
        console.log(navigate);        
    }

    render() {
        console.log(this.props);        
        const {location} = this.props;
        if (location.state === undefined || location.state === null) {
            return (
                <Navigate to='/' replace={true}/>
            );
            // this.props.navigate('/');
            
        }else{
            
            const { movieObj } = location.state
            console.log("sdsd" + JSON.stringify(movieObj));
            return (
                <div>
                    <span>등록날짜{movieObj.date_uploaded}</span>
                    <div className="movie_detail">
                    
                        <img src={movieObj.medium_cover_image} alt={movieObj.title} title={movieObj.title} />
                        <div className="movie_detail__data">
                            <h3 className="movie_detail__title" >제목 : {movieObj.title}</h3>
                            <p className="movie_detail__year">개봉연도 : {movieObj.year}</p>
                            <p className="movie_detail__rating">평점 : {movieObj.rating}</p>
                            <p className="movie_detail__language">언어 : {movieObj.language}</p>
                            <p className="movie_detail__runtime">영상시간 : {movieObj.runtime}</p>                            
                            <p >장르</p>
                            <ul className="movie_detail__genres">
                                {movieObj.genres.map((genre, index) => {
                                    return <li className="movie_detail_genre" key={index}>{genre}</li>;
                                })}
                            </ul>
                            <p >줄거리</p>
                            <p className="movie_detail__summary">{movieObj.summary}...</p>

                        </div>
                    
                    </div>
                </div>
                

            );

        }
        // if (location.state) {
            
        // }else {
            
        // }
        
    }

    
}

// function Detail(props) {
//     console.log(props);
//     return <span>hello</span>;
// }

export default Detail;