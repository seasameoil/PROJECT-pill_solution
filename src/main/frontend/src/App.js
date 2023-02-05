import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { Card, Button, Navbar, Container, Nav, NavDropdown, CardGroup } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import { Routes, Route, Link, useNavigate, Outlet, Router } from 'react-router-dom'
import MapContainer from './MapContainer';
import LandingPage from './LandingPage';


function App() {



  return (


    <div className="App">





      <Routes>
        <Route path="/" element={<>
          <div className="imag">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h1>PS가 도와드리겠습니다.</h1> <br /><br />
            <Link to="/search0">
              <Button variant="outline-success" size="lg">내 상황 알아보기</Button>
            </Link>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>

          <div className="explanation">
            <br /><br />
            <h2> Pill Solution is</h2>
            <p>복통, 두통 등의 증상이 다양하기 때문에<br />증상별로 필요한 약이나 치료 방법을 알려드립니다. </p>
            <img src="/assets/hns.png" width="70%"></img> <br /><br />
          </div>



        </>} />





        <Route path="/search0" element={<>
          <Navbar1>
          </Navbar1>
          <h2><br />알고싶은 상황은 무엇인가요?<br /></h2>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Oard></Oard>

        </>} />






        <Route path="/search1" element={<>
          <Navbar1>
          </Navbar1>
          <h1>두통</h1>
          <b>약추천</b>
          <Card004></Card004>
          <br></br>
          <br></br>
          <br></br>

          <b>치료방법</b>

          <Kard0></Kard0>

          <br></br>
          <h1>어지럼증</h1>
          <b>약추천</b>
          <Card005></Card005>
          <br></br>
          <br></br>
          <br></br>

          <b>치료방법</b>
          <Key1 />
        </>} />



        <Route path="/search2" element={<>
          <Navbar1>
          </Navbar1>
          <h1>소화불량</h1>
          <b>약추천</b>
          <Kard04></Kard04>
          <br></br>
          <br></br>
          <br></br>

          <b>치료방법</b>
          <Kard01></Kard01>
          <br></br>
          <h1>장염</h1>
          <b>약추천</b>
          <Kard05></Kard05>
          <br></br>
          <br></br>
          <br></br>

          <b>치료방법</b>
          <Kard02></Kard02>
        </>} />


        <Route path="/map" element={<>
          <Navbar1>
          </Navbar1>
          <h1>근처약국은 어디에있을까요?</h1>
          <Map2 />
        </>} />
      </Routes>
    </div>
  );
}

function Navbar1() {
  return (
    <div className='Navbar1'>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="/">

            <img src="/assets/logo1.png" width="190" height="90">
            </img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/search0">Home</Nav.Link>


              <NavDropdown title="상황" id="basic-nav-dropdown">
                <NavDropdown.Item href="/search1">

                  두통</NavDropdown.Item>

                <NavDropdown.Item href="/search2">복통</NavDropdown.Item>

              </NavDropdown>
              <Nav.Link href="/map">지도</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

{/*Card00 어지럼증치료법 */ }
function Card00() {
  return (

    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="/assets/bg0.jpg" width="100" height="280" />
      <Card.Body>
        <Card.Title>어지럼증</Card.Title>
        <Card.Text>
          <b>치료법</b>  <br /> 이비인후과·신경과·정신건강의학과 등 여러 진료과의  <br />
          협진이 가능한 병원을찾아 원인을 찾고 정기적인 운동으로<br />
          체력을 보강하고  병원에서 상담하면서  심리적,신체적안정필요하다<br />



        </Card.Text>
        <a href="https://m.health.chosun.com/svc/news_view.html?contid=2014102102949">

          <Button variant="outline-success">더자세히 알아보기</Button>
        </a>
      </Card.Body>
    </Card>

  );
}

{/*Key1 어지럼증치료법 위치 */ }
function Key1() {
  return (
    <dic className="Key1">
      <Card00 />
    </dic>
  );
}







{/*Card0 두통치료법 */ }
function Card0() {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="/assets/headache.jpg" width="100" height="180" />
      <Card.Body>
        <Card.Title>두통</Card.Title>
        <Card.Text>
          <b>치료법</b><br /> 긴장성 두통은 약을 사용하거나 정신 치료, 바이오 피드백, 이완 요법 등을 이용하여 치료 <br />
          편두통은 어두운 방에서 안정된 분위기를 갖추고  <br />푹 자게 하면 증세가 좋아집니다.
        </Card.Text>
        <a href=" https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=31852">
          <Button variant="outline-success">더자세히 알아보기</Button>
        </a>
      </Card.Body>
    </Card>
  );
}
{/*Card0 두통치료법 위치 */ }
function Kard0() {
  return (
    <div className="Kard0">
      <Card0 />
    </div>
  );
}

{/* 소화불량 컴포 01 장염컨포02*/ }

function Card01() {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="/assets/stomachache.jpg" width="100" height="180" />
      <Card.Body>
        <Card.Title>소화불량</Card.Title>
        <Card.Text>
          <b>치료법</b> <br /> 대부분의 소화불량증은 대개 증상이 심하지 않으며  <br />
          간헐적으로 나타난다. <br />
          우선 증상을 유발하거나 악화시키는 음식, 정서적 사건,  <br />
          또는 환경적 요인들을 밝혀내고 이를 피하도록 한다.  <br />
          생활습관이나 식이를 조절하여도 증상이 좋아지지 않으면 약물요법을 시도한다.
        </Card.Text>
        <a href=" https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=32041">
          <Button variant="outline-success">더자세히 알아보기</Button>
        </a>
      </Card.Body>
    </Card>
  );
}
{/* 소화불량 컴포 01 위치2*/ }
function Kard01() {
  return (
    <div className="Kard01">
      <Card01 />
    </div>
  );
}


function Card02() {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="/assets/1011.jpg" width="100" height="180" />
      <Card.Body>
        <Card.Title>장염</Card.Title>
        <Card.Text>
          <b>치료법</b> <br /> 식중독의 치료 원칙은 구토나 설사로 인한 <br /> 체내 수분손실과 전해질을 보급하는데 있어  <br />
          수액공급 등의 대증요법이 주요 치료방향이 되며,  <br />
          극히 일부의 경우 항생제의 사용이 고려된다.  <br />
          혈변이나 점액성변, 혹은 발열이 동반되거나 고령, <br />
          면역저하 환자의 경우는 항생제의 투여를 고려한다. <br />
        </Card.Text>
        <a href=" https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=31725">
          <Button variant="outline-success">더자세히 알아보기</Button></a>
      </Card.Body>
    </Card>
  );
}
{/*  장염컨포02위치*/ }
function Kard02() {
  return (
    <div className="Kard02">
      <Card02 />
    </div>
  );
}

{/*복통약들 04 소화불량 05는 장염컴포넌트 */ }
function Card04() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/assets/g.png" width="100" height="180" />
        <Card.Body>
          <Card.Title>약이름:훼스탈</Card.Title>
          <Card.Text>
            <b>복용방법: </b>- 성인 : 1회 1-2정 / 식후 복용 < br />
            - 소아 - (만 8세 ~ 만15세 미만) 1회 1정 / 식후 복용<br />
            효과 - 소화불량, 식욕감퇴(식욕부진), 과식, 체함, 소화촉진, 소화불량으로 인한 위부팽만감

          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/c.png" width="100" height="180" />
        <Card.Body>
          <Card.Title>약이름:다제스</Card.Title>
          <Card.Text>
            <b>복용방법:</b> - 성인: 1회 1-2정 1일 3회 복용 / 식후 복용<br />
            효과 - 소화불량, 식욕감퇴, 과식, 체함, 소화촉진, 소화불량으로 인한 위부팽만감 <br />
            - 다음 질환의 보조 치료 : 담즘 분비 부진으로 오는 간질환, 담도. 담낭계 질환


          </Card.Text>
        </Card.Body>

      </Card>


    </CardGroup>
  );
}

function Kard04() {
  return (
    <div className="Kard04">
      <Card04 />
    </div>
  );
}

function Card05() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/assets/f.png" width="100" height="180" />
        <Card.Body>
          <Card.Title>약이름:포타겔</Card.Title>
          <Card.Text>
            복용방법: - 성인 1일 1포(3g) 1일 3회 <br />
            - 소아(24개월 이상) : 3일간 1일 6~9g 분할 복용, <br />
            이후 4일간은 하루 6g을 분할 복용<br />
            효과: -성인의 위장관 질환에 의한 통증 완화제 <br />
            -성인의 급성 및 만성 설사 치료제   <br />
            -24개월 이상 소아의 급성 설사 치료제  <br />


          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/d.png" width="100" height="180" />
        <Card.Body>
          <Card.Title>약이름:스타빅</Card.Title>
          <Card.Text>
            복용방법:  - 성인 : 1일 1포(3g) 1일 3회 / 공복에 복용 <br />
            - 소아(24개월 이상) : 3일간 1일 6~9g 분할 복용,<br />
            이후 4일간은 하루 6g을 분할 복용<br />
            효과: - 성인의 식도, 위,십이지장과 관련된 통증의 완화 <br />
            - 성인의 급,만성 설사 <br />
            - 24개월 이상 소아의 급성 설사 <br />
          </Card.Text>
        </Card.Body>

      </Card>

    </CardGroup>
  );
}

function Kard05() {
  return (
    <div className="Kard05">
      <Card05 />
    </div>
  );
}







{/* 홈에들어가는페이지 컴포 Card1*/ }
function Card1() {
  return (
    <div className="Card1">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="/assets/headache.jpg" width="400" height="250" />
            <Card.Body>
              <Card.Title>두통</Card.Title>
              <Card.Text>
                - 어지럼증<br />
                - 두통
              </Card.Text>
              <Link to="/search1">
                <Button variant="outline-success">자세히 알아보기</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Card>
          <Card.Img variant="top" src="/assets/stomachache.jpg" width="400" height="250" />
          <Card.Body>
            <Card.Title>복통</Card.Title>

            <Card.Text>
              - 소화불량<br />
              - 장염
            </Card.Text>

            <Link to="/search2">
              <Button variant="outline-success">자세히 알아보기</Button>
            </Link>
          </Card.Body>
        </Card>
      </Row>
    </div>

  )
}

{/* 홈에들어가는페이지 컴포위치 Card1*/ }
function Oard() {
  return (
    <div className="Oard">
      <Card1 />
    </div>
  );
}








{/* Card5어지럼증약  Card4 두통약   Card00어지럼즈 Card01두통 */ }
function Card4() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/assets/b.png" width="100" height="180" />
        <Card.Body>
          <Card.Title>약이름:그날엔정</Card.Title>
          <Card.Text>
            복용방법: - 15세 이상 : 1일 2정 1일 3회 복용 / 식후 복용 <br />
            효과: - 두통, 치통, 발치 후 통증, 인후통, 귀의 통증, 관절통, 신경통,
            요(허리)통,근육통, 어깨통증, 타박통,  <br /> 골절통, 생리통, 외상통의 진통  <br />
            - 오한, 발열시의 해열
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/a.png" width="100" height="180" />
        <Card.Body>
          <Card.Title>약이름:게보린</Card.Title>
          <Card.Text>
            복용방법: - 15세 이상 : 1일 1정 1일 3회 복용 / <br />
            공복 시를 피하여 복용 / 복용간격은 4시간 이상으로 함 <br />
            - 15세 미만의 소아는 이 약을 복용하지 않는다.<br />
            효과: - 다음 질환의 진통 및 해열 시 단기 치료 : 두통, 치통,<br />
            발치 후 통증, 인후통, 귀의 통증, 관절통, 신경통, 요(허리)통, <br />
            근육통, 어깨통증, 타박통, 골절통, 생리통, 외상통의 진통 <br />
            - 오한, 발열시의 해열
          </Card.Text>
        </Card.Body>

      </Card>

    </CardGroup>
  );
}

{/* 두통약 위치*/ }

function Card004() {
  return (
    <div className="Card004">
      <Card4 />
    </div>
  );
}

{/*어지럼증약 위치 */ }
function Card005() {
  return (
    <div className="Card005">
      <Card5 />
    </div>
  );
}


function Card5() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/assets/e.png" width="100" height="180" />
        <Card.Body>
          <Card.Title>약이름:티나민</Card.Title>
          <Card.Text>
            복용방법: - 성인 : 1일 1정 1일 3회 복용<br />
            효과: - 말초동맥 순환장애(간헐성 파행증) 치료 <br />
            - 어지러움, 혈관성 및 퇴행성 이명  <br />
            - 이명, 두통, 기억력 감퇴, 집중력 장애, <br />
            우울감, 어지러움 등의 치매성 증상을  <br />
            수반하는 기질성 뇌기능장애의 치료
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/bg3.jpg" width="100" height="180" />
        <Card.Body>
          <Card.Title>약이름:징코메디</Card.Title>
          <Card.Text>
            복용방법: 아침-저녁 식후에 1캡슐식 복용<br />
            효과: -말초동맥 순환장애(간헐성 파행증(이따금 절뚝거림))의 치료<br />
            -어지러움, 혈관성 및 퇴행성 이명(귀울림) <br />
          </Card.Text>
        </Card.Body>
      </Card>



    </CardGroup>
  );
}



function Map() {
  return (

    <div className="Map">


      <MapContainer />


    </div>

  );

}

function Map1() {
  return (

    <div className="Map1">
      <LandingPage />
    </div>

  );

}

function Map2() {
  return (

    <div className="Map2">
      <Map />
      <Map1 />
    </div>

  );

}



export default App;