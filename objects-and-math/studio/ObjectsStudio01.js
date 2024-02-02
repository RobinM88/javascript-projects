// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];
let selectedIds = [];
function selectRandomEntry(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
while (selectedIds.length < 3) {
  let selectedId = selectRandomEntry(idNumbers);
  if (!selectedIds.includes(selectedId)) {
      selectedIds.push(selectedId);
  }
}

console.log("Selected ID numbers:", selectedIds);


// Code your buildCrewArray function here:
function buildCrewArray(selectedIds, candidates) {
  let crew = [];

  for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (selectedIds.includes(candidate.astronautID)) {
      crew.push(candidate);
      }
  }
  const selectedNames = crew.map(animal => animal.name).join(', ');

    return crew;
}

// let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// let selectedCrew = []
// selectedCrew.push(selectRandomEntry(idNumbers));
// // console.log(selectedCrew);
// selectedCrew.push(selectRandomEntry(idNumbers));
// // console.log(selectedCrew);
// selectedCrew.push(selectRandomEntry(idNumbers));
// // console.log(selectedCrew);
// // Code your template literal and console.log statements:

// let Crew = buildCrewArray(selectedIds, candidates);
crew = buildCrewArray(selectedIds, animals);
console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`);