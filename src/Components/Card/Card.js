import React, {useEffect, useState} from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'
import "./Card.css"

export const Card = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            isLoading(false)
        }, 1500);
    }, [])

  return <>
    {
        isLoading
        ?
            <div className='card'>
                <SkeletonTheme color="#202020" highlightColor='#444'>
                    <Skeleton height={300} duration={2}/>
                </SkeletonTheme>
            </div>
        :
            <Link to={`/movie/${movie.id}`} style={{textDecoration: "none", color:"white"}}>
                <div className='cards'>
                    <img className='cards__img' src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path: ""}`} />
                    <div className='cards__overlay'>
                        <div className='card__title'>{movie ? movie.original_title: ""}</div>
                        <div className='card__runtime'>
                            {movie ? movie.release_date: ""}
                            <span className='card__rating'>{movie ? movie.vote_avrage: ""}<i className='fas fa-star'/></span>
                        </div>
                        <div className=''>
                            {movie ? movie.overview.slice(0,118)+"...": ""}
                        </div>
                    </div>
                </div>
            </Link>
    }
  </>
}
