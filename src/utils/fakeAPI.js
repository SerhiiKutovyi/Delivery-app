const db = {
  menu: [
    {
      id: '10001',
      dish: 'Big Big Mac',
      total: 500,
      imgUrl:
        'https://delo.ua/static/content/thumbs/740x479/a/5c/m5qq6h---c17x11x50px50p-c17x11x50px50p--7c704ba4f902e8c8ed79af7f01fbc5ca.png',
    },
    {
      id: '10002',
      dish: 'Coca-Cola',
      total: 200,
      imgUrl:
        'https://en.coca-colaarabia.com/content/dam/one/me/en/brand-header-mobile/coca-cola%20600x900%20.jpg',
    },
    {
      id: '10003',
      dish: 'Double Cheeseburger',
      total: 400,
      imgUrl:
        'https://images.eatthismuch.com/img/172049_tabitharwheeler_e335efef-e359-422a-bd61-63fdee131fc7.jpg',
    },
  ],
};

export const getMenu = () => {
    return Promise.resolve(db.menu)
}