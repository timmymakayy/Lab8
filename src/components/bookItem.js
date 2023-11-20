
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// Importing necessary components from React Bootstrap and React Router



// Functional component for rendering a book item
function BookItem(props) {
    return (
        <div>
            {/* Card component from React Bootstrap */}
            <Card>
                {/* Displaying the book title in the Card Header */}
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        {/* Displaying the book cover image */}
                        <img src={props.myBook.cover} alt={props.myBook.title} />
                        <footer>
                            {/* Displaying the book author */}
                            {props.myBook.author}
                        </footer>
                    </blockquote>
                </Card.Body>
                {/* Link to the edit page with the book ID as a parameter */}
                <Link to={"/edit/" + props.myBook._id} className='btn btnprimary'>edit</Link>
            </Card>

            {/* 
                Commented out code below 
                <h3>{props.myBook.title}</h3>
                <img src={props.myBook.thumbnailUrl}></img>
                <p>{props.myBook.authors[0]}</p>
            */}
        </div>
    );
}

// Exporting the BookItem component
export default BookItem;
