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
                    <hr />

                    <div>
                        <button></button>
                        <ul>
                            {data.allSanityReview.nodes.map(e => <li>{e.name}</li>)}
                        </ul>
                        <button></button>
                    </div>
                    

                    <hr />
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
                    padding: 0;
                    margin: 0;
                    list-style: none;
                    display: flex;
                    flex-wrap:  nowrap;
                }

                div {
                    display: grid;
                    grid-template-columns: 30px auto 30px;
                }
            `}</style>
        </>
    )
}

export default Reviews
