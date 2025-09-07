import styled from 'styled-components'
import IntroBackground from '../../assets/intro-background.png'

interface IconContainerProps {
  bgColor: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${IntroBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const IntroContainer = styled.section`
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
`

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: ${(props) => props.theme.typography.title['title-xl'].size};
  font-family: ${(props) => props.theme.typography.fontFamily.baloo2};
  font-weight: 800;
  line-height: ${(props) =>
    props.theme.typography.title['title-xl'].lineHeight};
  color: ${(props) => props.theme.colors['base-title']};
`

export const Subtitle = styled.h2`
  margin-bottom: 4.125rem; // 66px
  font-size: ${(props) => props.theme.typography.text['text-l'].size};
  font-weight: 400;
  line-height: ${(props) => props.theme.typography.text['text-l'].lineHeight};
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const IconList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const IconListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${(props) => props.theme.typography.text['text-m'].size};
  color: ${(props) => props.theme.colors['base-text']};
`

export const IconContainer = styled.span<IconContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors[props.bgColor]};

  svg {
    color: ${(props) => props.theme.colors['white']};
  }
`
