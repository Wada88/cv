import React from 'react'
import { Link } from 'gatsby'
import duomo from '../images/duomo.jpg'
import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>MInä</h1>
    <p>Welcome to page 2</p>
    <img src={duomo} alt="" className="duomo" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
