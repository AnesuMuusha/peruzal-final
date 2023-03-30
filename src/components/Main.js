import { data as guides } from './Data'
import GuideItem from './GuideItem';
import '../style.css';

const Main = () => {
    return (    
    <div className="container-fluid">  
    <div className="jumbotron jumbotron-fluid" style={{backgroundColor: 'f5f5f5'}}>
    
    <div className="container">
        <h1 className="display-4">Peruzal Docs</h1>
        <p className="lead">This is the home of the various documentation and books used to support our instructor led courses. Browse the guides for programming, mobile app development, web application development, security, and game development.</p>
    </div>
    </div> 
        <div className="row">
            {
                guides.map(guide => {
                    const { description, title, path} = guide
                    return <GuideItem 
                                description={description} 
                                title={title} 
                                path={path} />
                    }
                )
            }
        </div>  
    </div>
    )
}

export default Main;