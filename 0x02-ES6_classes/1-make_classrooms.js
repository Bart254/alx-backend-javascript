import ClassRoom from './0-classroom';

/* eslint-disable no-underscore-dangle */
export default function initializeRooms() {
  const classA = new ClassRoom(19);
  const classB = new ClassRoom(20);
  const classC = new ClassRoom(34);
  const classes = [classA, classB, classC];

  return classes;
}
