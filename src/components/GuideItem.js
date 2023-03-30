const GuideItem = ({title, description, path }) => {
   return (
    <div className="col-md-6 mb-4">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={path} className="btn btn-outline-secondary">Browse</a>
        </div>
        </div>
    </div>  
   ) 
}
export default GuideItem;