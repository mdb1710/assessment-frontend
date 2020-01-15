import React from "react"
import { Link } from "gatsby"
import { useQueryParam } from "gatsby-query-params"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductInfo from '../components/product-components/product-info'

import EncodingLibrary from "../libraries/rfc4648";

const SecondPage = () => (
  <Layout>
    <SEO title="Parallel Dev Frontend Assessment" />
    <h1>Product Layout</h1>

    <div id="productLayout">
      {
        // replace this with the "real" products
        <ProductInfo product="waffle" />
      }
    </div>

    <div id="cta" style={{
      textAlign: 'center'
    }}>
      <h2>Thanks for your interest in working with us at {EncodingLibrary.decode(useQueryParam('company', 'VGhlIFdhZmZsZQ=='))}</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
