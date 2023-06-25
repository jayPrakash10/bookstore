import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap"
import BookCards from "../../Components/BookCards";
import BookCard from "../../Components/BookCard";

import { allBooks } from "../../SampleData/AllData/allBooks";

import "./style.scss";

const Search = () => {
    const [search, setSearch] = useState <string | any>("");
    const [searchResult, setSearchResult] = useState<Object[]>([]);
    const [selectedGenre, setSelectedGenre] = useState(["Fantasy", "Magic"]);

    useEffect(() => {
        
        const getData = setTimeout(() => {
            if(search.length >= 3) {
                setSearchResult(allBooks.filter((data) => {
                    return (
                        data.title.toLocaleLowerCase().includes(search) ||
                        data.author.toLocaleLowerCase().startsWith(search) ||
                        data.isbn?.isbn10?.toLocaleLowerCase().startsWith(search) ||
                        data.isbn?.isbn13?.toLocaleLowerCase().startsWith(search)
                    );
                }))
            } else {
                setSearchResult(allBooks.slice(0, 15));
            }
        }, 500);

        return () => clearTimeout(getData);
    }, [search])

    // useEffect(() => {
    //     if(selectedGenre.length) {
    //         const s_genre = selectedGenre.map((genre) => {
    //                 return allBooks.filter((book) => {
    //                     return book.genre?.includes(genre);
    //                 })
    //             });
    //     } else {
    //         setSearchResult(allBooks.slice(0, 15));
    //     }
    // }, [selectedGenre])

    return (
        <Container className="py-3 py-sm-4 py-md-5">
            <Row className="justify-content-end">
                <Col sm={8} md={6}>
                    <Form onSubmit={(ele) => ele.preventDefault()}>
                        <Form.Control
                            type="search"
                            placeholder="Search by name, author, ISBN"
                            className="me-2"
                            aria-label="Search"
                            value={search}
                            onChange={(ele) => setSearch(ele.target.value)}
                        />
                    </Form>
                </Col>
                {/* <Col xs={12} className="py-1">
                    <Row className="justify-content-end">
                        <div className="dropdown col-auto">
                            <button className="btn btn-sm dropdown-toggle border-0 fw-semibold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Genre
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end overflow-auto" style={{maxHeight: "400px"}}>
                                <li><a className="dropdown-item">Action</a></li>
                                <li><a className="dropdown-item">Adventure</a></li>
                                <li><a className="dropdown-item">Fiction</a></li>
                            </ul>
                        </div>
                    </Row>
                </Col> */}
            </Row>
            <Row className="py-4">
                <Col>
                    <BookCards cardContainerClass={"justify-content-start"}>
                        {searchResult.map((data: any) => 
                            <BookCard
                                key={data?.id}
                                id={data?.id}
                                title={data?.name}
                                imageUrl={data?.url}
                                href={`/search/${data.id}`}
                            />
                        )}
                    </BookCards>
                    {!searchResult.length ? 
                        <Container className="py-5">
                            <h5 className="text-center text-secondary">No Result</h5>
                        </Container>
                        : null
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Search;