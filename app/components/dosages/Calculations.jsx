export const calculateBodySurfaceArea = (height, weight) => {
    const m2 = 0.007184 * Math.pow(weight, 0.425) * Math.pow(height, 0.725);
    return m2;
  }
  
  export const calculateDosage = (bodySurfaceArea) => {
    const etoposideDosage = 100 * bodySurfaceArea;
    const cisplatinDosage = 20 * bodySurfaceArea;
    const ifosfamideDosage = 1500 * bodySurfaceArea;
    const uromitexanDosage = 1500 * bodySurfaceArea;
    return [etoposideDosage, cisplatinDosage, ifosfamideDosage, uromitexanDosage];
  }
  
  export const calculateOndansetron = (weight) => {
    return 0.15 * weight;
  }
  
  export const calculateMannitol = (weight) => {
    return 0.5 * weight;
  }

  export const calculateHydrationRate = (bodySurfaceArea) => {
    return (83 * bodySurfaceArea) * 24;
  }
  
  export const calculatePotassiumChloride = (bodySurfaceArea) => {
    return 60 * bodySurfaceArea;
  }
  
  export const calculateCalciumGluconate = (bodySurfaceArea) => {
    return 20 * bodySurfaceArea;
  }
  
  export const calculateMagnesiumSulfate = (bodySurfaceArea) => {
    return 8 * bodySurfaceArea;
  }
  
  