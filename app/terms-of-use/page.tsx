import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Swiftbanq Credit Solutions Terms of Use — acceptable use of our website, intellectual property rights, disclaimers, limitations of liability, and governing law.',
  alternates: {
    canonical: 'https://swiftbanq.com/terms-of-use',
  },
  openGraph: {
    title: 'Terms of Use | Swiftbanq Credit Solutions',
    description: 'Acceptable use, intellectual property, disclaimers, and governing law for the Swiftbanq website.',
    url: 'https://swiftbanq.com/terms-of-use',
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium tracking-tight mb-8">Terms of Use</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
          <p>
            Please read these Terms of Use carefully before accessing or using the Swiftbanq Credit Solutions website. By visiting or using this website, you confirm that you have read, understood, and agree to be bound by these terms. If you do not agree, please discontinue use of this website immediately.
          </p>
          <p>
            These Terms of Use apply to all visitors, users, and others who access or browse this website. They govern your use of the website only and should be read alongside our Terms and Conditions, Privacy Policy, and Data Protection Policy, which govern the use of our financial products and services.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">1. About This Website</h2>
          <p>
            This website is operated by Swiftbanq Credit Solutions, a financial services company incorporated in Nigeria. The website is intended to provide information about our company, products, and services, and to facilitate enquiries and applications from prospective and existing clients.
          </p>
          <p>
            The content on this website is directed at individuals and businesses located in Nigeria. We make no representation that the information or services described are available or appropriate for use in other jurisdictions.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">2. Acceptable Use</h2>
          <p>
            You may use this website only for lawful purposes and in a manner consistent with these Terms of Use. You agree not to use this website:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>In any way that violates any applicable local, national, or international law or regulation.</li>
            <li>To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material (spam).</li>
            <li>To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.</li>
            <li>To attempt to gain unauthorised access to any part of the website, the server on which the website is stored, or any server, computer, or database connected to the website.</li>
            <li>To engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the website, or which may harm Swiftbanq Credit Solutions or users of the website.</li>
            <li>To impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
            <li>To collect or harvest any personally identifiable information from the website without authorisation.</li>
            <li>To use automated tools, bots, scrapers, or crawlers to access, index, or extract data from the website without our prior written consent.</li>
          </ul>
          <p>
            We reserve the right to restrict or terminate your access to the website at any time if we believe you are in breach of these terms.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">3. Intellectual Property</h2>
          <p>
            All content on this website — including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software — is the property of Swiftbanq Credit Solutions or its content suppliers and is protected by Nigerian and international intellectual property laws.
          </p>
          <p>
            You are granted a limited, non-exclusive, non-transferable licence to access and view the content on this website for your personal, non-commercial use only. This licence does not include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any resale or commercial use of the website or its content.</li>
            <li>Any collection and use of product listings, descriptions, or prices.</li>
            <li>Any derivative use of the website or its content.</li>
            <li>Any downloading or copying of account information for the benefit of another party.</li>
            <li>Any use of data mining, robots, or similar data gathering and extraction tools.</li>
          </ul>
          <p>
            The Swiftbanq Credit Solutions name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Swiftbanq Credit Solutions. You must not use such marks without our prior written permission.
          </p>
          <p>
            Any unauthorised use of the content on this website may violate copyright, trademark, and other applicable laws and could result in legal action.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">4. Website Availability</h2>
          <p>
            We aim to keep this website available at all times, but we do not guarantee uninterrupted or error-free access. We reserve the right to suspend, withdraw, or restrict access to all or any part of the website for business or operational reasons, including maintenance, upgrades, or security concerns.
          </p>
          <p>
            We will not be liable to you if, for any reason, the website is unavailable at any time or for any period.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">5. Accuracy of Information</h2>
          <p>
            We make reasonable efforts to ensure that the information on this website is accurate and up to date. However, we do not warrant or represent that the content is complete, current, or free from errors. Information on this website is subject to change without notice.
          </p>
          <p>
            Nothing on this website constitutes financial, legal, investment, or professional advice. You should seek independent professional advice before making any financial decisions based on information found on this website.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">6. Third-Party Links and Content</h2>
          <p>
            This website may contain links to third-party websites, resources, or services that are not owned or controlled by Swiftbanq Credit Solutions. These links are provided for your convenience and information only.
          </p>
          <p>
            We have no control over, and assume no responsibility for, the content, privacy policies, terms of use, or practices of any third-party websites. We do not endorse or make any representations about third-party websites or the information, products, or services available on them.
          </p>
          <p>
            We strongly advise you to read the terms and privacy policies of any third-party websites you visit. Your use of third-party websites is entirely at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">7. Disclaimers</h2>
          <p>
            This website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          <p>
            Swiftbanq Credit Solutions does not warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The website will be uninterrupted, timely, secure, or error-free.</li>
            <li>The results obtained from the use of the website will be accurate or reliable.</li>
            <li>Any errors in the website will be corrected.</li>
          </ul>
          <p>
            Any material downloaded or otherwise obtained through the use of the website is done at your own discretion and risk, and you will be solely responsible for any damage to your computer system or loss of data that results from the download of any such material.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Swiftbanq Credit Solutions, its directors, officers, employees, agents, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of, or inability to use, this website or its content.
          </p>
          <p>
            This includes, without limitation, damages for loss of profits, goodwill, data, or other intangible losses, even if Swiftbanq Credit Solutions has been advised of the possibility of such damages.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion or limitation of liability for certain types of damages. In such jurisdictions, our liability shall be limited to the maximum extent permitted by law.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">9. User-Generated Content</h2>
          <p>
            If you submit any content to us through this website — including enquiries, feedback, or comments — you grant Swiftbanq Credit Solutions a non-exclusive, royalty-free, perpetual licence to use, reproduce, and publish such content for the purposes of operating and improving our services.
          </p>
          <p>
            You represent and warrant that any content you submit does not infringe the rights of any third party and is not unlawful, defamatory, or otherwise objectionable.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">10. Privacy</h2>
          <p>
            Your use of this website is also governed by our Privacy Policy and Data Protection Policy, which are incorporated into these Terms of Use by reference. Please review those policies to understand our practices regarding the collection and use of your personal information.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">11. Changes to These Terms</h2>
          <p>
            We reserve the right to revise and update these Terms of Use at any time at our sole discretion. All changes are effective immediately upon posting to the website. Your continued use of the website following the posting of revised terms means that you accept and agree to the changes.
          </p>
          <p>
            We encourage you to review this page periodically so you are aware of any changes, as they are binding on you.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">12. Governing Law and Jurisdiction</h2>
          <p>
            These Terms of Use and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. You agree to submit to the exclusive jurisdiction of the courts of Lagos State, Nigeria, for the resolution of any disputes arising from these terms or your use of this website.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">13. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us:
          </p>
          <ul className="list-none pl-0 space-y-1">
            <li><strong>Email:</strong> info@swiftbanq.com</li>
            <li><strong>Address:</strong> Swiftbanq Credit Solutions, Lagos, Nigeria</li>
            <li><strong>Business Hours:</strong> Monday – Friday, 8:00am – 5:00pm WAT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
