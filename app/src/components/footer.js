import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query Footer {
            allSanityFooter {
                nodes {
                  title
                  active
                  image {
                    asset {
                      fixed(width: 230) {
                        srcSet
                      }
                    }
                  }
                }
              }
        }
    `)

    return (
        <>
            <section>
                <div>
                    <ul>
                        {data.allSanityFooter.nodes.map(e => <li>
                            <img srcSet={e.image.asset.fixed.srcSet} aria-label={e.title}   />
                            
                        </li>)}
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

                ul {
                    padding: 0;
                    margin: 0;
                    list-style: none;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }

                img {
                    width: 230px;
                }
            `}</style>
        </>
    )
}

export default Footer
