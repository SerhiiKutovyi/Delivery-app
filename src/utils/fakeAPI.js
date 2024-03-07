const db = {
  menu: [
    {
      id: '10001',
      dish: 'Big Big Mac',
      count: 1,
      total: 500,
      priceTotal: 500,
      alt: 'Big Big Mac',
      imgUrl:
        'https://delo.ua/static/content/thumbs/740x479/a/5c/m5qq6h---c17x11x50px50p-c17x11x50px50p--7c704ba4f902e8c8ed79af7f01fbc5ca.png',
    },
    {
      id: '10002',
      dish: 'Coca-Cola',
      count: 1,
      total: 200,
      priceTotal: 200,
      alt: 'Coca-Cola',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-V3oj__CX5iBSvAL1wFoeTVSAxEQ0BDTig&s',
    },
    {
      id: '10003',
      dish: 'Cheeseburger',
      count: 1,
      total: 400,
      priceTotal: 400,

      alt: 'Double Cheeseburger',
      imgUrl:
        'https://images.eatthismuch.com/img/172049_tabitharwheeler_e335efef-e359-422a-bd61-63fdee131fc7.jpg',
    },
    {
      id: '10004',
      dish: 'Cheeseburger',
      count: 1,
      total: 400,
      priceTotal: 400,
      alt: 'Double Cheeseburger',
      imgUrl:
        'https://images.eatthismuch.com/img/172049_tabitharwheeler_e335efef-e359-422a-bd61-63fdee131fc7.jpg',
    },
    {
      id: '10005',
      dish: 'Cheeseburger',
      count: 1,
      total: 400,
      priceTotal: 400,
      alt: 'Double Cheeseburger',
      imgUrl:
        'https://images.eatthismuch.com/img/172049_tabitharwheeler_e335efef-e359-422a-bd61-63fdee131fc7.jpg',
    },
    {
      id: '10006',
      dish: 'Cheeseburger',
      count: 1,
      total: 400,
      priceTotal: 400,
      alt: 'Double Cheeseburger',
      imgUrl:
        'https://images.eatthismuch.com/img/172049_tabitharwheeler_e335efef-e359-422a-bd61-63fdee131fc7.jpg',
    },
  ],
};

export const getMenu = () => {
  return Promise.resolve(db.menu);
};
