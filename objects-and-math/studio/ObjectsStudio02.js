// Code your orbitCircumference function here:
function orbitCircumference(radius){
  let circumference = 2 * Math.PI * radius;
  return Math.round(circumference)
}

// Code your missionDuration function here:
function missionDuration(numberOfOrbits, orbitRadius, orbitalSpeed){
  let duration = Math.round(numberOfOrbits * orbitCircumference(orbitRadius) / orbitalSpeed * 100) /100;
  return duration
}

// console.log(missionDuration(5, 2000, 28000))
// console.log(`The mission will travel ${orbitCircumference(2000)} km around the planet, and it will take ${missionDuration(5, 2000, 28000)} hours to complete.`)
// Copy/paste your selectRandomEntry function here:
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

// console.log("Selected ID numbers:", selectedIds);

// Code your oxygenExpended function here:
function oxygenExpended(candidate){
 let spacewalk = missionDuration(3, 2000, 28000);
 let totalOxygenExpended = candidate.o2Used(spacewalk);
 totalOxygenExpended = Math.round(totalOxygenExpended * 1000) / 1000;
//  return totalOxygenExpended;
 return `${candidate.name} will perform the spacewalk, which will last ${spacewalk} hours and require ${totalOxygenExpended} kg of oxygen.'`
//  console.log(resultstr);
}

// Candidate data & crew array.
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
 console.log(oxygenExpended(candidateA));
 let crew = [candidateA,candidateC,candidateE];
 