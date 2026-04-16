import { SearchForm } from '@/components/SearchForm';
import { FreelancerCard } from '@/components/FreelancerCard';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Freelancer Recommender</h1>
      <SearchForm />
      <div className="mt-8">Freelancers will appear here</div>
    </main>
  );
}