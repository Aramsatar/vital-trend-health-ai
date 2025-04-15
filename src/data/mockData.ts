
import { subDays } from "date-fns";

export interface BloodPressureReading {
  date: Date;
  systolic: number;
  diastolic: number;
  status: "normal" | "elevated" | "high";
}

export interface GlucoseReading {
  date: Date;
  level: number;
  status: "normal" | "elevated" | "high";
}

export interface HeartRateReading {
  date: Date;
  rate: number;
  status: "normal" | "elevated" | "high";
}

export type MetricType = 'bloodPressure' | 'glucose' | 'heartRate';

// Generate the last 30 days of blood pressure data
export const bloodPressureData: BloodPressureReading[] = Array.from({ length: 30 }).map((_, i) => {
  const systolic = Math.floor(Math.random() * 30) + 110; // 110-140 range
  const diastolic = Math.floor(Math.random() * 20) + 70; // 70-90 range
  
  let status: "normal" | "elevated" | "high";
  if (systolic < 120 && diastolic < 80) {
    status = "normal";
  } else if (systolic < 130 && diastolic < 80) {
    status = "elevated";
  } else {
    status = "high";
  }
  
  return {
    date: subDays(new Date(), i),
    systolic,
    diastolic,
    status,
  };
});

// Generate the last 30 days of glucose data
export const glucoseData: GlucoseReading[] = Array.from({ length: 30 }).map((_, i) => {
  const level = Math.floor(Math.random() * 60) + 80; // 80-140 range
  
  let status: "normal" | "elevated" | "high";
  if (level < 100) {
    status = "normal";
  } else if (level < 125) {
    status = "elevated";
  } else {
    status = "high";
  }
  
  return {
    date: subDays(new Date(), i),
    level,
    status,
  };
});

// Generate the last 30 days of heart rate data
export const heartRateData: HeartRateReading[] = Array.from({ length: 30 }).map((_, i) => {
  const rate = Math.floor(Math.random() * 40) + 60; // 60-100 range
  
  let status: "normal" | "elevated" | "high";
  if (rate < 60) {
    status = "elevated";
  } else if (rate <= 100) {
    status = "normal";
  } else {
    status = "high";
  }
  
  return {
    date: subDays(new Date(), i),
    rate,
    status,
  };
});

export const getLatestReading = (metricType: MetricType) => {
  switch (metricType) {
    case 'bloodPressure':
      return bloodPressureData[0];
    case 'glucose':
      return glucoseData[0];
    case 'heartRate':
      return heartRateData[0];
    default:
      return null;
  }
};

export const getAverageReading = (metricType: MetricType) => {
  switch (metricType) {
    case 'bloodPressure': {
      const systolicSum = bloodPressureData.reduce((sum, reading) => sum + reading.systolic, 0);
      const diastolicSum = bloodPressureData.reduce((sum, reading) => sum + reading.diastolic, 0);
      return {
        systolic: Math.round(systolicSum / bloodPressureData.length),
        diastolic: Math.round(diastolicSum / bloodPressureData.length),
      };
    }
    case 'glucose': {
      const levelSum = glucoseData.reduce((sum, reading) => sum + reading.level, 0);
      return Math.round(levelSum / glucoseData.length);
    }
    case 'heartRate': {
      const rateSum = heartRateData.reduce((sum, reading) => sum + reading.rate, 0);
      return Math.round(rateSum / heartRateData.length);
    }
    default:
      return null;
  }
};
