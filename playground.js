const getCurrentlyinfectedN = (reportedCases) => reportedCases * 10;

const getCurrentlyinfectedS = (reportedCases) => reportedCases * 50;

const getInfections = (currentlyInfected, factor) => currentlyInfected * factor;

const getSevereCases = (infections) => Math.trunc(0.15 * infections);

const getIcuCare = (infections) => Math.trunc(0.05 * infections);

const getVentilators = (infections) => Math.trunc(0.02 * infections);

const getDolarflight = (curInfctd, avgDailyUSD, avDailInPop, time) => (
  Math.trunc((curInfctd * avgDailyUSD * avDailInPop) / time));

const gettimeInDays = (periodType, timeToElapse) => {
  switch (periodType) {
    case 'days':
      return timeToElapse;
    case 'weeks':
      return timeToElapse * 7;
    case 'months':
      return timeToElapse * 30;
    default:
      return timeToElapse;
  }
};

const getTimeFactor = (periodType, timeToElapse) => {
  switch (periodType) {
    case 'days':
      return 2 ** Math.trunc(timeToElapse / 3);
    case 'weeks':
      return 2 ** Math.trunc((timeToElapse * 7) / 3);
    case 'months':
      return 2 ** Math.trunc((timeToElapse * 30) / 3);
    default:
      return 2 ** Math.trunc(timeToElapse / 3);
  }
};

const getHospitalBeds = (totalHospitalBeds, severeCasesByRequestedTime) => {
  const availableBeds = 0.35 * totalHospitalBeds;
  return Math.trunc(availableBeds - severeCasesByRequestedTime);
};

const covid19ImpactEstimator = (data) => {
  const {
    reportedCases, totalHospitalBeds, region, timeToElapse, periodType
  } = data;
  const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = region;
  const currentlyInfectedNrml = getCurrentlyinfectedN(reportedCases);
  const currentlyInfectedSvr = getCurrentlyinfectedS(reportedCases);
  const days = gettimeInDays(periodType, timeToElapse);
  const factor = getTimeFactor(periodType, timeToElapse);
  const infctdByRqstdTmN = getInfections(currentlyInfectedNrml, factor);
  const infctdByRqstdTmS = getInfections(currentlyInfectedSvr, factor);
  const hospitalBedsNrml = getHospitalBeds(totalHospitalBeds, getSevereCases(infctdByRqstdTmN));
  const hospitalBedsSvr = getHospitalBeds(totalHospitalBeds, getSevereCases(infctdByRqstdTmS));

  return {
    data,
    impact: {
      currentlyInfected: currentlyInfectedNrml,
      infectionsByRequestedTime: infctdByRqstdTmN,
      severeCasesByRequestedTime: getSevereCases(infctdByRqstdTmN),
      hospitalBedsByRequestedTime: hospitalBedsNrml,
      casesForICUByRequestedTime: getIcuCare(infctdByRqstdTmN),
      casesForVentilatorsByRequestedTime: getVentilators(infctdByRqstdTmN),
      dollarsInFlight: getDolarflight(infctdByRqstdTmN,
        avgDailyIncomePopulation, avgDailyIncomeInUSD,
        days)
    },
    severeImpact: {
      currentlyInfected: currentlyInfectedSvr,
      infectionsByRequestedTime: infctdByRqstdTmS,
      severeCasesByRequestedTime: getSevereCases(infctdByRqstdTmS),
      hospitalBedsByRequestedTime: hospitalBedsSvr,
      casesForICUByRequestedTime: getIcuCare(infctdByRqstdTmS),
      casesForVentilatorsByRequestedTime: getVentilators(infctdByRqstdTmS),
      dollarsInFlight: getDolarflight(infctdByRqstdTmS,
        avgDailyIncomePopulation, avgDailyIncomeInUSD,
        days)
    }
  };
};

const data = {
  region: {
  name: "Africa",
  avgAge: 19.7,
  avgDailyIncomeInUSD: 5,
  avgDailyIncomePopulation: 0.71
  },
  periodType: "days",
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
  }

  console.log(covid19ImpactEstimator(data))

const calcCurrentlyInfected = (reportedCases) => reportedCases * 10;

const calcSevereCurrentlyInfected = (reportedCases) => reportedCases * 50;

const calcInfections = (currentlyInfected, factor) => currentlyInfected * factor;

const calcSevereCases = (infections) => Math.trunc(0.15 * infections);

const calcIcuCare = (infections) => Math.trunc(0.05 * infections);

const calcVentilators = (infections) => Math.trunc(0.02 * infections);

const calcDollarsInFlight = (infections, avgDailyUSD, avgIncomePop, period) => (
  Math.trunc((infections * avgDailyUSD * avgIncomePop) / period));

const calcDays = (periodType, timeToElapse) => {
  switch (periodType) {
    case 'days':
      return timeToElapse;
    case 'weeks':
      return timeToElapse * 7;
    case 'months':
      return timeToElapse * 30;
    default:
      return timeToElapse;
  }
};


const calcFactor = (periodType, timeToElapse) => {
  switch (periodType) {
    case 'days':
      return 2 ** Math.trunc(timeToElapse / 3);
    case 'weeks':
      return 2 ** Math.trunc((timeToElapse * 7) / 3);
    case 'months':
      return 2 ** Math.trunc((timeToElapse * 30) / 3);
    default:
      return 2 ** Math.trunc(timeToElapse / 3);
  }
};

const calcHospitalBeds = (totalHospitalBeds, severeCasesByRequestedTime) => {
  const availableBeds = 0.35 * totalHospitalBeds;
  if ((availableBeds - severeCasesByRequestedTime) >= 0) {
    return Math.trunc(availableBeds);
  }
  return Math.trunc(availableBeds - severeCasesByRequestedTime);
};

const covid19ImpactEstimator2 = (data) => {
  const currentlyInfected = calcCurrentlyInfected(data.reportedCases);
  const severeCurrentlyInfected = calcSevereCurrentlyInfected(data.reportedCases);
  const days = calcDays(data.periodType, data.timeToElapse);
  const factor = calcFactor(data.periodType, data.timeToElapse);
  const impactInfectionsByRequestedTime = calcInfections(currentlyInfected, factor);
  const impactSCaseRequest = calcSevereCases(impactInfectionsByRequestedTime);
  const severeImpactInfectionsByRequestedTime = calcInfections(severeCurrentlyInfected, factor);
  const severeSCaseRequest = calcSevereCases(severeImpactInfectionsByRequestedTime);

  return {
    data,
    impact: {
      currentlyInfected,
      infectionsByRequestedTime: impactInfectionsByRequestedTime,
      severeCasesByRequestedTime: impactSCaseRequest,
      hospitalBedsByRequestedTime: calcHospitalBeds(data.totalHospitalBeds,
        impactSCaseRequest),
      casesForICUByRequestedTime: calcIcuCare(impactInfectionsByRequestedTime),
      casesForVentilatorsByRequestedTime: calcVentilators(impactInfectionsByRequestedTime),
      dollarsInFlight: calcDollarsInFlight(impactInfectionsByRequestedTime,
        data.region.avgDailyIncomePopulation, data.region.avgDailyIncomeInUSD,
        days)

    },
    severeImpact: {
      currentlyInfected: severeCurrentlyInfected,
      infectionsByRequestedTime: severeImpactInfectionsByRequestedTime,
      severeCasesByRequestedTime: severeSCaseRequest,
      hospitalBedsByRequestedTime: calcHospitalBeds(data.totalHospitalBeds,
        severeSCaseRequest),
      casesForICUByRequestedTime: calcIcuCare(severeImpactInfectionsByRequestedTime),
      casesForVentilatorsByRequestedTime: calcVentilators(severeImpactInfectionsByRequestedTime),
      dollarsInFlight: calcDollarsInFlight(severeImpactInfectionsByRequestedTime,
        data.region.avgDailyIncomePopulation, data.region.avgDailyIncomeInUSD,
        days)


    }
  };
};

console.log(covid19ImpactEstimator2(data));