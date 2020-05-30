/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allSanityTour(sort: { fields: title, order: ASC }) {
                nodes {
                    title
                    images {
                        asset {
                            fixed(width: 230) {
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
