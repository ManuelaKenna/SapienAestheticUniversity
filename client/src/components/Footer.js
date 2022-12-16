import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

//added position-right to test footer
const styles = {
  footer: {
    textDecoration: 'none',
    background: 'dark',
    color: 'white',
    position: 'fixed',
    left: '0',
    bottom: '0',
    right: '0',
  }
}

function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark' position='fixed' top='50px'>
      <MDBContainer className='p-4'>
        {/* <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section> */}

        {/* <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>
              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>
              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section> */}

        <section className='mb-4'>
         
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>About Us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Who Are We?

                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Careers

                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>

                    Careers
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>

                    Blog
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Concierge</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Contact us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Subscribe
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
