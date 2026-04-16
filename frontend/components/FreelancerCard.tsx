import { Freelancer } from '@/types';

export function FreelancerCard({ freelancer }: { freelancer: Freelancer }) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-bold">{freelancer.name}</h3>
      <p className="text-sm text-gray-600">{freelancer.title}</p>
    </div>
  );
}