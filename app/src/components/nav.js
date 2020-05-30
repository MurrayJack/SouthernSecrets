import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Nav = () => {
    const [visible, setVisible] = useState(false)

    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 162) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            allSanityTour(
                sort: { fields: title, order: ASC }
                filter: { active: { eq: true } }
            ) {
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
                    <a href="/">
                        <Img
                            fluid={data.placeholderImage.childImageSharp.fluid}
                        />
                    </a>

                    <div>About</div>
                    <div>
                        <button
                            onPointerOver={() => setVisible(true)}
                            // onPointerOut={() => setVisible(false)}
                        >
                            Our Tours
                        </button>
                        <ul>
                            {data.allSanityTour.nodes.map(
                                e =>
                                    visible && (
                                        <li>
                                            <a
                                                href={`/tours/${e.title
                                                    .toLowerCase()
                                                    .split(" ")
                                                    .join("_")}`}
                                            >
                                                {e.title}
                                            </a>
                                        </li>
                                    )
                            )}
                        </ul>
                    </div>

                    <div>Quote Request</div>
                    <div>Contact</div>
                    <div>Blog</div>
                </nav>
            </section>

            <style jsx>{`
                section {
                    background: #202020;
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
                    text-align: center;
                }

                ul {
                    position: absolute;
                    z-index: 1;
                    background-color: #202020;
                    padding: 0;
                    margin: 0;
                    list-style: none;
                }

                li {
                    display: grid;
                    align-items: center;
                    margin: 0;
                    text-align: left;
                }

                li > a {
                    text-transform: capitalize;
                }

                a {
                    padding: 8px 24px;
                    color: white;
                }
            `}</style>
        </>
    )
}

export default Nav
