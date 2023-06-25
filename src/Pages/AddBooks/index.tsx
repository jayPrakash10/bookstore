import { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap'

const AddBooks = () => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [isbn, setISBN] = useState("");
    const [language, setLanguage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        console.log('Adding');
        resetForm();
    }

    const resetForm = () => {
        setTitle("");
        setSubtitle("");
        setISBN("");
        setLanguage("");
        setImageUrl("");
        setPrice("");
        setAuthor("");
        setPublisher("");
        setDescription("");
    }

    return (
        <Container className='py-3 py-sm-4 py-md-5'>
            <Form onSubmit={(ele) => { ele.preventDefault(); handleSubmit(); }} onReset={(ele) => { ele.preventDefault(); resetForm(); }}>
                <Row>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title of book" value={title} onChange={(ele) => setTitle(ele.target.value)}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="subtitle">
                        <Form.Label>Subtitle</Form.Label>
                        <Form.Control type="text" placeholder="Subtitle of book" value={subtitle} onChange={(ele) => setSubtitle(ele.target.value)}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="col-4 mb-3" controlId="isbn">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control type="text" placeholder="ISBN" value={isbn} onChange={(ele) => setISBN(ele.target.value)}/>
                    </Form.Group>
                    <Form.Group className="col-4 mb-3" controlId="language">
                        <Form.Label>Language</Form.Label>
                        <Form.Control type="text" placeholder="English" value={language} onChange={(ele) => setLanguage(ele.target.value)}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="col-6 mb-3" controlId="bookcover">
                        <Form.Label>Book Cover</Form.Label>
                        <Form.Control type="url" placeholder="Enter Image Url" value={imageUrl} onChange={(ele) => setImageUrl(ele.target.value)}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="col-2 mb-3" controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Price of Book" min={0} value={price} onChange={(ele) => setPrice(ele.target.value)}/>
                    </Form.Group>
                    <Form.Group className="col-4 mb-3" controlId="author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Author's Name" value={author} onChange={(ele) => setAuthor(ele.target.value)}/>
                    </Form.Group>
                    <Form.Group className="col-6 mb-3" controlId="publisher">
                        <Form.Label>Publisher</Form.Label>
                        <Form.Control type="text" placeholder="Publisher's Name" value={publisher} onChange={(ele) => setPublisher(ele.target.value)}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-4" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" as="textarea" rows={4} placeholder="Summary" maxLength={600} value={description} onChange={(ele) => setDescription(ele.target.value)}/>
                    </Form.Group>
                </Row>
                <Row className='justify-content-center gap-3'>
                    <Button className='col-1' type='reset' variant='outline-secondary'>Cancel</Button>
                    <Button className='col-1' type='submit'>Add</Button>
                </Row>
            </Form>
        </Container>
    )
}

export default AddBooks;