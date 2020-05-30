exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allSanityTour(sort: {fields: title, order: ASC}, filter: {active: {eq: true}}) {
                nodes {
                    title
                    images {
                        asset {
                            fluid(maxWidth: 230) {
                                srcSet
                            }
                        }
                    }
                    _rawInformation
                    _rawDescription
                }
            }
        }
    `)

    if (result.errors) {
        throw result.errors
    }

    const projects = result.data.allSanityTour.nodes || []
    projects.forEach((node, index) => {
        const path = `/tours/${node.title.toLowerCase().split(" ").join("_")}`

        createPage({
            path,
            component: require.resolve("./src/templates/tour.js"),
            context: { tour: node },
        })
    })
}
