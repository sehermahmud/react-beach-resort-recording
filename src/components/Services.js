import React, { Component } from 'react';
import  Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail />,
                title: "free Cocktail",
                info: 'hey hey hey hey hey hey hey hey hey hey hey hey hey hey!'
            },
            {
                icon: < FaHiking />,
                title: "Endless Hiking",
                info: 'hey hey hey hey hey hey hey hey hey hey hey hey hey hey!'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle",
                info: 'hey hey hey hey hey hey hey hey hey hey hey hey hey hey!'
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: 'hey hey hey hey hey hey hey hey hey hey hey hey hey hey!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title }</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
