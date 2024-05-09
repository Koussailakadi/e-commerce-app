// Images Pixabay: https://pixabay.com/fr/users/jmexclusives-10518280/

const COURSES = [
  {
    id: '1',
    title: 'Fomation JavaScript Moderne',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png',
    price: 99.99,
    selected: false,
    instructorId: '1'
  }, 
  {
    id: '2',
    title: 'Coder facebook avec React JS',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_640.jpg',
    price: 49.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '3',
    title: 'Wordpress pour débutants',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://cdn.pixabay.com/photo/2015/01/09/02/45/laptop-593673_640.jpg',
    price: 29.49,
    selected: false,
    instructorId: '1'
  }, 
  {
    id: '4',
    title: 'Maîtiser le logiciel Confluence',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://cdn.pixabay.com/photo/2024/04/05/05/17/technology-8676540_640.jpg',
    price: 49.29,
    selected: false,
    instructorId: '1'
  },
  {
    id: '5',
    title: 'Python pour les débutants',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1283600346/fr/vectoriel/signe-de-langue-de-code-python-programmation-de-codage-et-d%C3%A9veloppement-de-concept.jpg?s=612x612&w=0&k=20&c=wn-KJIb5ySzXBCzMyB6Wzd-iNn1i0MUKh7UN-X-9wMQ=',
    price: 199.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '6',
    title: 'Apprendre CSS3 ',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png',
    price: 9.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '7',
    title: 'Formation PHP Orienté Objets',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/2095760070/fr/vectoriel/le-gars-est-en-train-de-coder-le-site-web.jpg?s=612x612&w=0&k=20&c=cXJCAPKc3WD1phd3RsUidNQ40icgiNzt47dJZlaQzn0=',
    price: 29.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '8',
    title: 'Formation SEO de 0 à PRO!',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1284226133/fr/vectoriel/pr%C3%A9sentation-dentreprise-avec-graphiques-et-graphiques-analyse-des-donn%C3%A9es-analyse-seo.jpg?s=612x612&w=0&k=20&c=TPhb40oXzokpQXsAYNIApqvDMm0elLhM8BjDmIUWkao=',
    price: 19.49,
    selected: false,
    instructorId: '1'
  },
  {
    id: '9',
    title: 'Formation Microsoft Clarity',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1155606457/fr/vectoriel/homme-daffaires-pratiquant-la-m%C3%A9ditation-de-pleine-conscience-avec-des-ic%C3%B4nes-de-bureau.jpg?s=612x612&w=0&k=20&c=_vahW8Pl3y3VQ4kRshpJY2v5NpBLsaxQsCupsKUuNBA=',
    price: 29.45,
    selected: false,
    instructorId: '1'
  }
];

export default COURSES;