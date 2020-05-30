import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Reviews from "../components/reviews"
import Blogs from "../components/blogs"
import TourImages from "../components/tourImages"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />

        <TourImages />

        <Reviews />

        <Blogs />
    </Layout>
)

export default IndexPage
