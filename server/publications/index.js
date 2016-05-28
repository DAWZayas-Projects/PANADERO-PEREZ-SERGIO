import posts from './posts';
import videos from './videos';
import roles from './roles';
import nominations from './nominations';
import presence from './presence';
import messages from './messages';
import likes from './likes';
import users from './users';

export default function () {
  posts();
  videos();
  roles();
  presence();
  nominations();
  messages();
  likes();
  users();
}
