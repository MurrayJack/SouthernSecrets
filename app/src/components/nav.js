import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Nav = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 162) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            allSanityTour(sort: { fields: title, order: ASC }) {
                nodes {
                    title
                }
            }
        }
    `)

    return (
        <>
            <section>
                <nav>
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />

                    <div>About</div>
                    <div>
                        
                        Our Tours
                        <ul>
                            {data.allSanityTour.nodes.map(e=> <li>{e.title}</li>)}
                        </ul>
                        
                        
                        </div>

                    <div>Quote Request</div>
                    <div>Contact</div>
                    <div>Blog</div>
                </nav>
            </section>

            <style jsx>{`
                section {
                    background: black;
                }

                nav {
                    display: grid;
                    grid-template-columns: 162px repeat(5, auto);
                    grid-gap: 40px;
                    height: 100px;
                    color: white;
                    align-items: center;
                    width: 920px;
                    margin: 0 auto;
                }

                div {
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: 14px;
                }

                ul {
                    position: absolute;
                    z-index: 1
                    
                }
            `}</style>
        </>
    )
}

export default Nav
