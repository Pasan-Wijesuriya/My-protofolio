import './productList.scss'
import { dataProjectsPage } from '../../data'
import Product from '../product/Product'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'

function ProductList () {
  return (
    <div className='pl'>
      <Fade top>
        <div className='pl-texts'>
          <h1 className='pl-title'>Create & inspire. It's Omar</h1>
          <p className='pl-desc'>
            It's My Projects What I Make It In Along Days
          </p>
        </div>
      </Fade>
      <Fade bottom>
        <div className='container'>
          <div className='row'>
            {dataProjectsPage.map(project => (
              <>
                {project.id <= 6 ? (
                  <Product project={project} key={project.id} />
                ) : null}
              </>
            ))}
          </div>
        </div>
      </Fade>
      <Link to='/projects' className='projectsLink'>
        Show More
      </Link>
    </div>
  )
}

export default ProductList
