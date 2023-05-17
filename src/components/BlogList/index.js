// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="blogs-list-container">
      {blogsList.map(eachList => (
        <BlogItem key={eachList.id} listItem={eachList} />
      ))}
    </div>
  )
}
export default BlogList
