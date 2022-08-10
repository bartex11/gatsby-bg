import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  
  return (
    <div>
      <div class="filters">
          <div class="button-group filter-button-group js-radio-button-group" data-filter-group="category">
            <h3 class="h5 mb-0">Категории:</h3>
            <button class="button-filter is-checked " data-filter="*">
              Покажи всички
            </button>
            <button class="button-filter " data-filter=".usa">
              <i class="fas fa-shopping-basket me-2"></i>usa
            </button>
            <button class="button-filter " data-filter=".spain">
              <i class="fas fa-utensils me-2"></i>spain
            </button>
            <button class="button-filter " data-filter=".germany">
              <i class="fas fa-language me-2"></i>germany
            </button>
        </div>
      </div>
    <Layout pageTitle="My Blog Posts">
      <div class="grid">
      {
        data.allMdx.nodes.map(node => (
       
          <article key={node.id} className={`element-item ${node.frontmatter.filter}`}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            
            <GatsbyImage
              image= {getImage(node.frontmatter.hero_image)}
              alt={node.frontmatter.hero_image_alt}
            />
            
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
      </div>
  
    </Layout>
  </div>
    
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          filter
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`

export default BlogPage