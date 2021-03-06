const getIcuCases = (infections) => Math.trunc(0.05 * infections);
const getVentCases = (infections) => Math.trunc(0.02 * infections);
const covid19ImpactEstimator = (data) => {
  const {
    reportedCases, totalHospitalBeds, region, timeToElapse, periodType
  } = data;
  const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = region;

  let timeInDays;

  switch (periodType) {
    case 'days':
      timeInDays = timeToElapse;
      break;
    case 'weeks':
      timeInDays = timeToElapse * 7;
      break;
    case 'months':
      timeInDays = timeToElapse * 30;
      break;
    default:
      break;
  }

  const timeFactor = Math.trunc(timeInDays / 3);

  const crntlyInfctdNrml = reportedCases * 10;
  const crntlyInfctdSvr = reportedCases * 50;

  const infcByRqstdTmNrml = crntlyInfctdNrml * (2 ** timeFactor);
  const infcByRqstdTmSvr = crntlyInfctdSvr * (2 ** timeFactor);


  const svrCsByRqsdTmNrml = Math.trunc(infcByRqstdTmNrml * 0.15);
  const svrCsByRqsdTmSvr = Math.trunc(infcByRqstdTmSvr * 0.15);

  const THB = totalHospitalBeds;

  const bdByRqstdTmNrml = Math.trunc((THB * 0.35) - svrCsByRqsdTmNrml);
  const bdByRqstdTmSvr = Math.trunc((THB * 0.35) - svrCsByRqsdTmSvr);


  const AVDIU = avgDailyIncomeInUSD;
  const AVDIP = avgDailyIncomePopulation;

  const dlrFlghtN = Math.trunc(((infcByRqstdTmNrml * AVDIU) * AVDIP) * 30);
  const dlrFlghtS = Math.trunc((infcByRqstdTmSvr * AVDIU * AVDIP) * 30);

  return {
    data,
    impact: {
      currentlyInfected: crntlyInfctdNrml,
      infectionsByRequestedTime: infcByRqstdTmNrml,
      severeCasesByRequestedTime: svrCsByRqsdTmNrml,
      hospitalBedsByRequestedTime: bdByRqstdTmNrml,
      casesForICUByRequestedTime: getIcuCases(infcByRqstdTmNrml),
      casesForVentilatorsByRequestedTime: getVentCases(infcByRqstdTmNrml),
      dollarsInFlight: dlrFlghtN
    }, // best case estimation
    severeImpact: {
      currentlyInfected: crntlyInfctdSvr,
      infectionsByRequestedTime: infcByRqstdTmSvr,
      severeCasesByRequestedTime: svrCsByRqsdTmSvr,
      hospitalBedsByRequestedTime: bdByRqstdTmSvr,
      casesForICUByRequestedTime: getIcuCases(infcByRqstdTmSvr),
      casesForVentilatorsByRequestedTime: getVentCases(infcByRqstdTmSvr),
      dollarsInFlight: dlrFlghtS
    } // severe case estimation
  };
};

export default covid19ImpactEstimator;
