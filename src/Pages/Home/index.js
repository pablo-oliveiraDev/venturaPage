import React from 'react';
import Layout from '../../Components/Layout';
import * as S from '../../Components/assets/Styles/Pages/home'



export default function Home() {
  return (
    <Layout>
      <h1>home </h1>
      <S.MyContainer>
        <S.MyCarousel>
          <S.MyCarousel.Item>
            <img
              className="d-block w-100"
              src=""
              alt="First slide"
            />
            <S.MyCarousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </S.MyCarousel.Caption>
          </S.MyCarousel.Item>
          <S.MyCarousel.Item>
            <img
              className="d-block w-100"
              src=""
              alt="Second slide"
            />

            <S.MyCarousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </S.MyCarousel.Caption>
          </S.MyCarousel.Item>
          <S.MyCarousel.Item>
            <img
              className="d-block w-100"
              src=""
              alt="Third slide"
            />

            <S.MyCarousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </S.MyCarousel.Caption>
          </S.MyCarousel.Item>
        </S.MyCarousel>

      </S.MyContainer>
    </Layout>


  );
}