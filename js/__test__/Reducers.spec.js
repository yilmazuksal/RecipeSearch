// @flow

import reducers from '../reducers';

test('SET_SEARCH_TERM', () => {
  const state = reducers({searchTerm:'',apiData:{tt4270492:{rating:'7.3',title:'Billions',year:'2016–',description:'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',poster:'b.jpg',imdbID:'tt4270492',trailer:'_raEUMLL-ZI'},tt2085059:{rating:'5.3',title:'Black Mirror',year:'2011–',description:'A television anthology series that shows the dark side of life and technology.',poster:'bm.jpg',imdbID:'tt2085059',trailer:'jDiYGjp5iFg'}}}, {type:'SET_SEARCH_TERM',payload:'black'});
  expect(state).toEqual({searchTerm:'black',apiData:{tt4270492:{rating:'7.3',title:'Billions',year:'2016–',description:'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',poster:'b.jpg',imdbID:'tt4270492',trailer:'_raEUMLL-ZI'},tt2085059:{rating:'5.3',title:'Black Mirror',year:'2011–',description:'A television anthology series that shows the dark side of life and technology.',poster:'bm.jpg',imdbID:'tt2085059',trailer:'jDiYGjp5iFg'}}});
});

test('ADD_API_DATA', () => {
    const state = reducers({searchTerm:'',apiData:{}}, {type:'ADD_API_DATA',payload:{rating:'6.1',title:'Westworld',year:'2016–',description:'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',poster:'ww.jpg',imdbID:'tt0475784',trailer:'eX3u0IlBBO4'}});
    expect(state).toEqual({searchTerm:'',apiData:{tt0475784:{rating:'6.1',title:'Westworld',year:'2016–',description:'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',poster:'ww.jpg',imdbID:'tt0475784',trailer:'eX3u0IlBBO4'}}});
  });