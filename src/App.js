import Section from './Components/Section/Section';
import Profile from './Components/Profile/Profile';
import StatisticsList from './Components/Statistics/StatisticsList';
import FriendsList from './Components/FriendsList/FriendsList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import stats from './data/statistical-data';
import friends from './data/friends.json';
import items from './data/transactions';

export default function App() {
  return (
    <>
      <Section>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Upload stats">
        <StatisticsList stats={stats} />
      </Section>
      <Section>
        <FriendsList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={items} />
      </Section>
    </>
  );
}
