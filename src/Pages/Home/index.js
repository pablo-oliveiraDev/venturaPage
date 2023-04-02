import React from 'react';
import Layout from '../../Components/Layout';
import * as S from '../../Components/assets/Styles/Pages/home';
import ImgHome1 from '../../Components/assets/img/imgHome/ar1.jpg';
import ImgHome2 from '../../Components/assets/img/imgHome/manutAr.jpg';



export default function Home() {

  return (
    <Layout>
      
      <S.MyContainer>
        <h1 className='titulo'>É uma Honra atende-los com honestidade e dignidade! </h1>
        <S.MyCarousel>
          <S.MyCarousel.Item className='imgItem'>
            <img
              className="d-block w-100"
              src={ImgHome1}
              alt="Instalação de ar"
            />
            <S.MyCarousel.Caption className='caption'>
              <h3>Instalação de ar</h3>
              <p>Instalação de qualidade para seu ar esta sempre gelando!</p>
            </S.MyCarousel.Caption>
          </S.MyCarousel.Item>
          <S.MyCarousel.Item className='imgItem'>
            <img
              className="d-block w-100"
              src={ImgHome2}
              alt="Manutenção"
            />

            <S.MyCarousel.Caption className='caption'>
              <h3>Manutenção</h3>
              <p>Manutenção de qualidade com ótimos preços</p>
            </S.MyCarousel.Caption>
          </S.MyCarousel.Item>
          <S.MyCarousel.Item className='imgItem'>
            <img
              className="d-block w-100"
              src=""
              alt="Third slide"
            />

            <S.MyCarousel.Caption className='caption'>
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