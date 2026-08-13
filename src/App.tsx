import { SideProfile } from './components/SideProfile';
import { SideSignIn } from './components/SideSignIn';
import { SideRecommendedUsers } from './components/SideRecommendedUsers';

export function App() {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center p-6">
      <div className="w-80 flex flex-col gap-6">
        <SideProfile />
        <SideSignIn />
        <SideRecommendedUsers />
      </div>
    </div>
  );
}

export default App;