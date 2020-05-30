import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Reviews from "../components/reviews"
import Blogs from "../components/blogs"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />

        <div style={{height: "460px"}}>tours</div>

        <Reviews />

        <Blogs />
    </Layout>
)

export default IndexPage
