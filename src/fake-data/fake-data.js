import faker from 'faker';
faker.seed(41);
const enumElement = ['student', 'activist', 'mentor', 'admin', 'lector' ]
const MakedataFake = () => {
    return { 
        rank: 0,
        name: faker.name.findName(),
        email: faker.internet.email(),
        score: faker.random.number({min:500, max: 1300})* -1 ,
        role: enumElement[faker.random.number({min:0, max: 4})],
        isActive: faker.random.boolean(),
        date: faker.date.past().toLocaleString('ru', {year:'numeric', month: 'numeric', day: 'numeric'}),}
}
let fakeInitialState = [...new Array(1100)].map(() => MakedataFake());
function compare(a, b) {
      if (a.score < b.score) return -1;
      if (a.score > b.score) return 1;
      return 0;
    }

fakeInitialState = fakeInitialState.sort(compare);
fakeInitialState.forEach((elem, inx) => elem.rank = inx+1);

export default fakeInitialState;