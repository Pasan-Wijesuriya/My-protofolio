import { Link } from 'react-router-dom'
import './product.scss'

export default function Product ({ project }) {
  return (
    <div className='col-md-4'>
      <div className='item'>
        <div
          className='item-number'
          style={{ background: `${project.buttonColor}` }}
        >
          #{project.id}
        </div>
        <div className='imgContainer'>
          <img src={project.img} alt={project.title} className='img-fluid' />
        </div>
        <div className='item-buttons'>
          <Link
            to={`/projects/${project.title}`}
            style={{ background: `${project.buttonColor}` }}
          >
            {project.title}
          </Link>
        </div>
      </div>
    </div>
  )
}
