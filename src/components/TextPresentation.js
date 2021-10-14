import './TextPresentation.css'; 

function TextPresentation(props){
    return (
        <div className="TextPresentation" >
            <h2 className="textPresentationTitle" >
                We're 
                <span className="textPresentationTitleStrong" >
                    coming soon
                </span>
            </h2>
            <p className="textPresentationParagraph" >
                Hello fellow shoppers! We're currently building our new fashion store. 
                Add your email below to stay up-to-date with announcements and our launch deals.
            </p>
        </div>
    )
}

export default TextPresentation; 


