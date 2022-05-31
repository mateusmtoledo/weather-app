import addDateStrings from './dateFunctions';

function convertPopToPercentage(obj) {
  obj.daily.forEach((d) => {
    const day = d;
    day.pop *= 100;
  });
  obj.hourly.forEach((h) => {
    const hour = h;
    hour.pop *= 100;
  });
}

function prepareDataObject(o) {
  const obj = o;
  addDateStrings(obj);
  convertPopToPercentage(obj);
}

export default prepareDataObject;
