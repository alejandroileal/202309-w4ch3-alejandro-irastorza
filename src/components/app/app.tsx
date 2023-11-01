import { Card } from '../card/card';
import { List } from '../list/list';

export default function App() {
  const charData = [
    {
      isAlive: true,
      message: "You're all to die!",
      name: 'Joffrey',
      family: 'Baratheon',
      age: 18,
      reignYears: 1,
      category: 'king',
    },
    {
      isAlive: true,
      message: 'I hit first and ask later',
      name: 'Jamie',
      family: 'Lannister',
      age: 33,
      weapon: 'sword',
      skillLevel: 10,
      category: 'fighter',
    },
    {
      isAlive: true,
      message: 'I hit first and ask later',
      name: 'Daenerys',
      family: 'Targaryen',
      age: 18,
      weapon: 'dragons',
      skillLevel: 8,
      category: 'fighter',
    },
    {
      isAlive: true,
      message: 'I dunno know why, but I believe I am gonna die soon',
      name: 'Tyrion',
      family: 'Lannister',
      age: 40,
      adviseTo: {
        isAlive: true,
        message: 'I hit first and ask later',
        name: 'Daenerys',
        family: 'Targaryen',
        age: 18,
        weapon: 'dragons',
        skillLevel: 8,
      },
      category: 'adviser',
    },
    {
      isAlive: true,
      message: 'I am a real loser',
      name: 'Bronn',
      family: 'Nieve',
      age: 35,
      serveLevel: 5,
      servesTo: {
        isAlive: true,
        message: 'I hit first and ask later',
        name: 'Jamie',
        family: 'Lannister',
        age: 33,
        weapon: 'sword',
        skillLevel: 10,
      },
      category: 'squire',
    },
  ];

  const example = [
    {
      isAlive: true,
      message: 'I hit first and ask later',
      name: 'Jamie',
      family: 'Lannister',
      age: 33,
      weapon: 'sword',
      skillLevel: 10,
      category: 'fighter',
    },
    {
      isAlive: true,
      message: 'I hit first and ask later',
      name: 'Jamie',
      family: 'Lannister',
      age: 33,
      weapon: 'sword',
      skillLevel: 10,
      category: 'fighter',
    },
  ];

  return (
    <div>
      <p>loaded kitty 😺</p>
      <List children={example}></List>
    </div>
  );
}
