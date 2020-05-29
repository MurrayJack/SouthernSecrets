import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Socials = () => {
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
                        <li>SOUTHERN SECRETS © 2020 | PRIVACY POLICY</li>
                        <li>F</li>
                        <li>T</li>
                    </ul>
                </div>
            </section>

            <style jsx>{`
                section {
                    background: black;
                    color: white;
                }

                div {
                    width: 920px;
                    margin: 0 auto;
                }
            `}</style>
        </>
    )
}

export default Socials
