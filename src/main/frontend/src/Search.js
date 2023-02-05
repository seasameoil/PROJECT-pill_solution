function Search() {
  return (
    <div className="Card2">

      <Col>
        <Card>
          <Card.Img variant="top" src="/assets/headache.jpg" width="400" height="250" />
          <Card.Body>
            <Card.Title>두통</Card.Title>
            <Card.Text>
              - 어지럼증<br />
              - 두통
            </Card.Text>
            <Button variant="outline-success">자세히 알아보기</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>

    */  }
    </div>

  )
}

export default Search;