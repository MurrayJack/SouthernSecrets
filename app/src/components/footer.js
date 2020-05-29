import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
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
                <div>
                    <ul>
                        <li>Australia</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </section>

            <style jsx>{`
                section {
                    background: rgb(233, 234, 234);
                }

                div {
                    width: 920px;
                    margin: 0 auto;
                }
            `}</style>
        </>
    )
}

export default Footer
