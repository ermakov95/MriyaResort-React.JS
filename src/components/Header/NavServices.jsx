import React, { useEffect, useState } from 'react';

function NavServices({ isDesktop, menuIsOpen }) {
  const [ idServices, setIdServices ] = useState(null)

  function setId(id, event) {
    return () => {
      if (event === 'over' && isDesktop) {
        setIdServices(id)
      } else if (event === 'click') {
        if (idServices === id) {
          setIdServices(null)
        } else {
          setIdServices(id)
        }
      }
    }
  }

  useEffect( () => {
    setIdServices(null)
  }, [menuIsOpen])

  const services = [
    {
      id: 0,
      className: 'rooms',
      title: 'Размещение',
      content: [
        <li>Одноместный стандарт</li>,
        <li>Двуместный стандарт</li>,
        <li>Семейный стандарт</li>,
        <li>Одноместный полулюкс</li>,
        <li>Двуместный полулюкс</li>,
        <li>Семейный полулюкс</li>,
        <li>Одноместный люкс</li>,
        <li>Двуместный люкс</li>,
        <li>Семейный люкс</li>,
      ]
    },
    {
      id: 1,
      className: 'medicine',
      title: 'Медицина',
      content: [
        <li>Клиника персонализированной медицины</li>,
        <li>Медицинский центр</li>,
        <div className="nav-services-desc">Международные стандарты лечения и современные методики в сочетании с высококлассным сервисом и проживанием в одном из лучших семейных курортов мира Mriya Resort & SPA 5*</div>,
      ]
    },
    {
      id: 2,
      className: '',
      title: 'Мероприятия',
      content: [],
    },
    {
      id: 3,
      className: '',
      title: 'Красота и восстановление',
      content: [],
    },
    {
      id: 4,
      className: '',
      title: 'Бары и рестораны',
      content: [],
    },
    {
      id: 5,
      className: '',
      title: 'Развлечения',
      content: [],
    },
    {
      id: 6,
      className: '',
      title: 'Спорт',
      content: [],
    },
    {
      id: 7,
      className: '',
      title: 'Детям',
      content: [],
    },
    {
      id: 8,
      className: '',
      title: 'Транспорт',
      content: [],
    }
  ]

  return (
    <div className="nav-services">
      <ul className="nav-services-main">
        {services.map(({ id, className, title, content }) => { return (
          <li className={`nav-services-item ${className ? `nav-services-${className}` : ''}  ${idServices === id ? 'nav-services-shown' : ''}`}
            onClick={setId(id, 'click')} 
            onMouseOver={setId(id, 'over')} 
            key={id}>
            <button>
              <span>{title}</span>
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.72816 6.6375L2.4466 11.7375C2.26537 11.9125 2.04531 12 1.78641 12C1.52751 12 1.30744 11.9125 1.12621 11.7375L0.271845 10.875C0.0906148 10.7 -6.61135e-08 10.4875 -7.70413e-08 10.2375C-8.79692e-08 9.9875 0.0906148 9.775 0.271845 9.6L4 6L0.271844 2.4C0.0906145 2.225 -4.36567e-07 2.0125 -4.47495e-07 1.7625C-4.58423e-07 1.5125 0.0906144 1.3 0.271844 1.125L1.12621 0.2625C1.30744 0.0875002 1.52751 2.01451e-07 1.78641 1.90135e-07C2.04531 1.78818e-07 2.26537 0.0875002 2.4466 0.2625L7.72816 5.3625C7.90939 5.5375 8 5.75 8 6C8 6.25 7.90939 6.4625 7.72816 6.6375Z" fill="white" fillOpacity="0.24" />
              </svg>
            </button>
            {content.length === 0 ? <></> : 
              <ul className={`nav-services-second nav-${className}-second`}>
                {content}
              </ul>
            }
            <div className="nav-services-item_sep"/>
          </li>
        )})}
      </ul>
      <div className="nav-services-sep"></div>
    </div>
  )
}

export default NavServices;
