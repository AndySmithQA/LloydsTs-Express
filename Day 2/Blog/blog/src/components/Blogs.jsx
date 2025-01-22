const Blogs = ({blogs}) => {


    return (
        <div className="blog-list">
          {blogs.map(blog => (
            <div key={blog.id} className="blog">
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
            </div>
            
          ))}
          <hr />
        </div>
        
      );


}

export default Blogs;