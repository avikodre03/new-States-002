import './Result.css'
import ReactMarkdown from 'react-markdown'

const Result = (props) => {
    return (

        <div className="Result">
            <ReactMarkdown>{props.markdownInput}</ReactMarkdown>
        </div>

    )
}

export default Result