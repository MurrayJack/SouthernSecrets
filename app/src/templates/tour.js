import React from "react"
import Layout from "../components/layout"
const BlockContent = require("@sanity/block-content-to-react")

const TourTemplate = ({ pageResources }) => {
    const {
        json: {
            pageContext: { tour },
        },
    } = pageResources

    const buildStyles = marks => {
        const style = {}

        if (marks.filter(e => e === "strong").length > 0) {
            style.fontWeight = "bold"
        }

        return style
    }

    const serializers = {
        types: {
            localeText: props => (
                <span>
                    {props.node.en.map(e => (
                        <p>
                            {e.children.map(t => (
                                <span style={buildStyles(t.marks)}>
                                    {t.text}
                                </span>
                            ))}
                        </p>
                    ))}
                </span>
            ),
        },
    }

    return (
        <>
            <Layout>
                <article>
                    <h2>{tour.title}</h2>

                    <section>
                        <aside>
                            <h3>Information</h3>
                            <BlockContent
                                blocks={tour._rawInformation}
                                serializers={serializers}
                            />
                        </aside>

                        <div>
                            <h3>Photos</h3>
                            {/* <pre>{JSON.stringify(tour, undefined, 2)}</pre> */}
                        </div>
                    </section>

                    <div>
                        <h3>Description</h3>
                        <BlockContent
                            blocks={tour._rawDescription}
                            serializers={serializers}
                        />
                    </div>
                </article>
            </Layout>

            <style jsx>{`
                article {
                    width: 920px;
                    margin: 0 auto;
                    padding-top: 40px;
                    display: grid;
                    grid-gap: 40px;
                }

                section {
                    display: grid;
                    grid-template-columns: 40% 60%;
                }
            `}</style>
        </>
    )
}

export default TourTemplate
