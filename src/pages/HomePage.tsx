import AllPosts from "../components/home/AllPosts";
import { useAuthStore } from "../store/authStore";

export default function HomePage() {

  return (
    <div>
      <AllPosts /> 
    </div>
  )
}
