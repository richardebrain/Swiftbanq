import { notFound } from 'next/navigation';
import { services } from '@/lib/services';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceSubServices } from '@/components/ServiceSubServices';
import { ServiceBenefits } from '@/components/ServiceBenefits';
import { ServiceHowItWorks } from '@/components/ServiceHowItWorks';
import { ServiceTestimonials } from '@/components/ServiceTestimonials';
import { ServiceFAQ } from '@/components/ServiceFAQ';
import { ServiceBottomCTA } from '@/components/ServiceBottomCTA';

import { ApplyNowButton } from '@/components/ApplyNowButton';

// Generate static params for all services so they are built at build time
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.heroTitle} | Swiftbanq Services`,
    description: service.heroSubtitle,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="w-full bg-brand-cream">
      <ServiceHero 
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        image={service.heroImage}
      />
      
      {service.subServices && service.subServices.length > 0 && (
        <ServiceSubServices subServices={service.subServices} />
      )}

      <ServiceHowItWorks 
        image={service.heroImage}
        steps={service.howItWorks}
        title={service.title}
      />

      <ServiceBenefits 
        title={service.title}
        benefits={service.benefits}
      />

      <ServiceTestimonials 
        testimonials={service.testimonials}
      />

      <ServiceFAQ 
        faqs={service.faqs}
      />

      <ServiceBottomCTA />

    </main>
  );
}
