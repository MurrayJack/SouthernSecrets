import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Blogs = () => {
    // const data = useStaticQuery(graphql`
    //     query Reviews {
    //         allSanityReview {
    //             nodes {
    //                 name
    //                 tour
    //                 review
    //             }
    //         }
    //     }
    // `)

    return (
        <>
            <section>
                <article>
                    <ul>
                        <li>
                            <div>
                                image

                                text

                                button
                            </div>
                        </li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </article>
            </section>

            <style jsx>{`
                section {
                }

                article {
                    width: 920px;
                    margin: 0 auto;
                }

                ul {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    padding: 0;
                    margin: 0;
                    list-style: none;
                    grid-gap: 16px
                }

                li {
                    border: 1px solid #ddd;
                }
            `}</style>
        </>
    )
}

export default Blogs
