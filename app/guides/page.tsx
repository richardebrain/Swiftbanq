import { Metadata } from 'next';
import { DbSeeder } from '@/components/DbSeeder';
import { GuidesList } from '@/components/GuidesList';

export const metadata: Metadata = {
  title: 'Guides & Resources',
  description: 'Expert guides on securing SME financing, asset loans, and digital lending in Nigeria.',
};

export default function GuidesPage() {
  return (
    <div className="w-full bg-transparent pb-24 pt-16 md:pt-24">
      <DbSeeder />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-dark tracking-tight mb-6">Guides & Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about navigating the financial landscape and scaling your business.
          </p>
        </div>

        <GuidesList />

      </div>
    </div>
  );
}
