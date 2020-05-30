import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TourImages = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "1412821969.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <>
            <section>
                <article>
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />

                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </article>
            </section>

            <style jsx>{`
                article {
                    width: 1300px;
                    margin: 00 auto;
                }
            `}</style>
        </>
    )
}

export default TourImages
