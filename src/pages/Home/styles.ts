import styled from 'styled-components'
import IntroBackground from '../../assets/intro-background.png'

export const Intro = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${IntroBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const IntroContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem; // 56px
  margin-top: 5.875rem; // 94px
  margin-bottom: 6.75rem; // 108px
  width: 100%;
  max-width: ${(props) => props.theme.container.maxWidth};
  padding: ${(props) => props.theme.container.padding};

  & > div {
    display: flex;
    flex-direction: column;

    @media (min-width: 992px) {
      &:first-child {
        flex: 0 0 55%;
      }

      &:last-child {
        flex: 1;
      }
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }

  h1 {
    margin-bottom: 1rem;
    font-size: ${(props) => props.theme.typography.title['title-xl'].size};
    font-family: ${(props) => props.theme.typography.fontFamily.baloo2};
    font-weight: 800;
    line-height: ${(props) =>
      props.theme.typography.title['title-xl'].lineHeight};
    color: ${(props) => props.theme.colors['base-title']};
  }

  h2 {
    margin-bottom: 4.125rem; // 66px
    font-size: ${(props) => props.theme.typography.text['text-l'].size};
    font-weight: 400;
    line-height: ${(props) => props.theme.typography.text['text-l'].lineHeight};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;

    @media (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: ${(props) => props.theme.typography.text['text-m'].size};
    color: ${(props) => props.theme.colors['base-text']};

    svg {
      padding: 0.5rem;
      border-radius: 100%;
    }
  }
`

export const CoffeeList = styled.section`
  margin: 3.4rem auto 0;
  width: 100%;
  max-width: ${(props) => props.theme.container.maxWidth};
  padding: ${(props) => props.theme.container.padding};

  h2 {
    font-size: ${(props) => props.theme.typography.title['title-l'].size};
    font-family: ${(props) => props.theme.typography.fontFamily.baloo2};
    font-weight: 800;
    line-height: ${(props) =>
      props.theme.typography.title['title-l'].lineHeight};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem 2rem; // 40px 32px
    margin-top: 3.4rem; // 54px
    margin-bottom: 6.75rem; // 108px

    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
