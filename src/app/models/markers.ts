export interface MarkerInterface {
    position: {
      lat: number,
      lng: number,
    };
    title: string;
    address: string;
    userUid: string;
    serviceId: string;
  }