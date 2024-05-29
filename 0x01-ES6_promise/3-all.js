import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  Promise.all([photo, user]).then((response) => {
    console.log(`${response[0].body} ${response[1].firstName} ${response[1].lastName}`);
  });
}
