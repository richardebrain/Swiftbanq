const fs = require('fs');
const files = ['app/page.tsx', 'components/ApplyPageForm.tsx', 'components/ServiceBenefits.tsx', 'components/ServiceHowItWorks.tsx', 'components/ServiceTestimonials.tsx'];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const regex = /<div className="inline-flex items-center px-4 py-1\.5 rounded-full border border-black text-sm font-medium tracking-wide text-black uppercase[^>]*">\s*[^<]*\s*<\/div>/g;
  content = content.replace(regex, '');
  const wrapperRegex = /<div className="flex justify-center mb-6">\s*<\/div>/g;
  content = content.replace(wrapperRegex, '');
  fs.writeFileSync(file, content);
});
console.log('Done removing tags.');
