import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Reviews = () => {
    const data = useStaticQuery(graphql`
        query Reviews {
            allSanityReview {
                nodes {
                    name
                    tour
                    review
                }
            }
        }
    `)

    return (
        <>
            <section>
                <article>
                    <h2>Reviews</h2>



                    {JSON.stringify(data)}
                </article>
            </section>

            <style jsx>{`
                section {
                }

                article {
                    width: 920px;
                    margin: 0 auto;
                }
            `}</style>
        </>
    )
}

export default Reviews
