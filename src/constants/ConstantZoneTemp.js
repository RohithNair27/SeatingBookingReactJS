export const ZoneData = [
  {
    zone: "A",
    desks: 10,
    availableSeats: 5,
  },
  {
    zone: "B",
    desks: Math.floor(Math.random() * 20) + 1, // Random value for desks in zone B
    availableSeats: Math.floor(Math.random() * 10) + 1, // Random value for available seats in zone B
  },
  {
    zone: "C",
    desks: Math.floor(Math.random() * 20) + 1, // Random value for desks in zone C
    availableSeats: Math.floor(Math.random() * 10) + 1, // Random value for available seats in zone C
  },
];
