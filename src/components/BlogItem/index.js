// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {listItem} = props
  const {title, description, publishedDate} = listItem

  return (
    <li className="list-items">
      <div className="date-time">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="des">{description}</p>
    </li>
  )
}
export default BlogItem
