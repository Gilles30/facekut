import styled from 'styled-components';
import * as S from './styles';
export function ProfileSummary(props) {
  function OrkutNostalgicIconSet(props) {
    return (
      <OrkutNostalgicIconSet.List>
        {[
          { name: 'Recados', slug: 'recados', icon: 'book' },
          { name: 'Fotos', slug: 'fotos', icon: 'camera' },
          { name: 'Videos', slug: 'videos', icon: 'video-camera' },
          { name: 'Fãs', slug: 'fas', icon: 'star' },
          { name: 'Mensagens', slug: 'mensagens', icon: 'email' },
        ].map(({ name, slug, icon }) => (
          <li key={`orkut__icon_set__${slug}`}>
            <span
              style={{ gridArea: 'title' }}
              className="OrkutNostalgicIconSet__title"
            >
              {name}
            </span>
            <span
              className="OrkutNostalgicIconSet__number"
              style={{ gridArea: 'number' }}
            >
              <img
                key={`orkut__icon_set__${slug}_img`}
                className="OrkutNostalgicIconSet__iconSample"
                src={`https://alurakut.vercel.app/icons/${icon}.svg`}
              />
              {props[slug] ? props[slug] : 0}
            </span>
          </li>
        ))}
        {[
          { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
          { name: 'Legal', slug: 'legal', icon: 'cool' },
          { name: 'Sexy', slug: 'sexy', icon: 'heart' },
        ].map(({ name, slug, icon }) => {
          const total = props[slug] ? props[slug] : 2;
          return (
            <li key={`orkut__icon_set__${slug}`}>
              <span className="OrkutNostalgicIconSet__title">{name}</span>
              <span
                className="OrkutNostalgicIconSet__iconComplex"
                // className="OrkutNostalgicIconSet__number"
                style={{ gridArea: 'number' }}
              >
                {[0, 1, 2].map((_, index) => {
                  const isHeartActive = index <= total - 1;
                  return (
                    <img
                      key={`orkut__icon_set__${slug}_img_${index}`}
                      src={`https://alurakut.vercel.app/icons/${icon}.svg`}
                      style={{
                        marginRight: '2px',
                        opacity: isHeartActive ? 1 : '0.5',
                      }}
                    />
                  );
                })}
              </span>
            </li>
          );
        })}
      </OrkutNostalgicIconSet.List>
    );
  }
  OrkutNostalgicIconSet.List = styled.ul`
    margin-top: 32px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      font-size: 12px;
      color: #5a5a5a;
      display: grid;
      grid-template-areas:
        'title title'
        'number number';

      &:not(:last-child) {
        margin-right: 5px;
      }
      .OrkutNostalgicIconSet__title {
        display: block;
        font-style: italic;
      }
      .OrkutNostalgicIconSet__number {
        min-width: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .OrkutNostalgicIconSet__iconSample {
          margin-right: 7px;
        }
      }
    }
  `;

  const items = [
    { name: 'Recados', slug: 'recados', icon: 'book' },
    { name: 'Fotos', slug: 'fotos', icon: 'camera' },
    { name: 'Videos', slug: 'videos', icon: 'video-camera' },
    { name: 'Fãs', slug: 'fas', icon: 'star' },
    { name: 'Mensagens', slug: 'mensagens', icon: 'email' },
  ];

  const characteristics = [
    { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
    { name: 'Legal', slug: 'legal', icon: 'cool' },
    { name: 'Sexy', slug: 'sexy', icon: 'heart' },
  ];

  return (
    <S.Container>
      {items.map(({ name, slug, icon }) => (
        <li key={`orkut__icon_set__${slug}`}>
          <span
            style={{ gridArea: 'title' }}
            className="OrkutNostalgicIconSet__title"
          >
            {name}
          </span>
          <span
            className="OrkutNostalgicIconSet__number"
            style={{ gridArea: 'number' }}
          >
            <img
              key={`orkut__icon_set__${slug}_img`}
              className="OrkutNostalgicIconSet__iconSample"
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/${icon}.svg`}
            />
            {props[slug] ? props[slug] : 0}
          </span>
        </li>
      ))}

      {characteristics.map(({ name, slug, icon }) => {
        const total = props[slug] ? props[slug] : 2;

        return (
          <li key={`orkut__icon_set__${slug}`}>
            <span className="OrkutNostalgicIconSet__title">{name}</span>
            <span
              className="OrkutNostalgicIconSet__iconComplex OrkutNostalgicIconSet__number"
              style={{ gridArea: 'number' }}
            >
              {[0, 1, 2].map((_, index) => {
                const isHeartActive = index <= total - 1;

                return (
                  <img
                    key={`orkut__icon_set__${slug}_img_${index}`}
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/${icon}.svg`}
                    style={{
                      marginRight: '2px',
                      opacity: isHeartActive ? 1 : '0.5',
                    }}
                  />
                );
              })}
            </span>
          </li>
        );
      })}
    </S.Container>
  );
}
