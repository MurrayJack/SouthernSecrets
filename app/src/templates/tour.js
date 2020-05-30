import React from "react"
import Layout from "../components/layout"
import BlockContent from "@sanity/block-content-to-react"

const TourTemplate = ({ pageResources }) => {
    if (!pageResources) return <div></div>

    const {
        json: {
            pageContext: { tour },
        },
    } = pageResources

    const serializers = {
        types: {
            localeText: props =>
                props.node.en.map(e => (
                    <BlockContent blocks={e} serializers={serializers} />
                )),
        },
    }

    return (
        <>
            <Layout>
                <article className="tour">
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
                            <div className="photo-wrapper">
                                {tour.images.map(e => (
                                    <img
                                        alt=""
                                        height="100"
                                        width="200"
                                        srcSet={e.asset.fluid.srcSet}
                                    />
                                ))}
                            </div>
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
                h2 {
                }

                article {
                    width: 920px;
                    margin: 0 auto;
                    padding-top: 40px;
                    display: grid;
                    grid-gap: 40px;
                    margin-bottom: 80px;
                }

                section {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    grid-gap: 40px;
                }

                .photo-wrapper {
                    display: grid;
                    grid-gap: 16px;
                    grid-template-columns: 1fr 1fr;
                }

                img {
                    margin-bottom: 0;
                }
            `}</style>
        </>
    )
}

export default TourTemplate
