import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - UseItTool",
  description: "Read the disclaimer for UseItTool. Understand the limitations of our free online tools and important information about accuracy and liability.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            Disclaimer
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            Important information about using our tools and services.
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            Last updated: September 28, 2026
          </p>
        </section>

        {/* Important Notice */}
        <section className="mb-10">
          <div className="rounded-xl bg-yellow-50 border-2 border-yellow-200 p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">⚠️</div>
              <div>
                <h3 className="text-xl font-bold text-zinc-950 mb-2">
                  Important Notice
                </h3>
                <p className="text-zinc-700">
                  The information and tools provided on <strong>UseItTool</strong> are for general 
                  informational and utility purposes only. By using our website, you acknowledge and 
                  agree to the disclaimers outlined below.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 1. General Disclaimer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            1. General Disclaimer
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              All information and tools on UseItTool are provided in good faith, however, we make 
              no representation or warranty of any kind, express or implied, regarding the accuracy, 
              adequacy, validity, reliability, availability, or completeness of any information or 
              tool on the site.
            </p>
            <p className="mt-3">
              UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF 
              ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR THE RELIANCE ON ANY INFORMATION 
              PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE 
              SITE IS SOLELY AT YOUR OWN RISK.
            </p>
          </div>
        </section>

        {/* 2. Tools Accuracy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            2. Tools Accuracy and Limitations
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              Our online tools are designed to assist with common tasks, but they have limitations:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Image Tools:</strong> Compression and conversion results may vary depending 
                on the original file quality and format. We do not guarantee specific file sizes or 
                quality levels.
              </li>
              <li>
                <strong>Text Tools:</strong> Word counts and text transformations are based on 
                standard algorithms. Results may differ from other tools or manual counts.
              </li>
              <li>
                <strong>Developer Tools:</strong> JSON formatting, Base64 encoding, and other 
                developer utilities are provided for convenience. Always verify critical data.
              </li>
              <li>
                <strong>Calculators:</strong> All calculations are based on standard formulas. 
                Results should be verified for important decisions.
              </li>
              <li>
                <strong>QR Code Generator:</strong> Generated QR codes should be tested before 
                use in critical applications.
              </li>
            </ul>
          </div>
        </section>

        {/* 3. Health & Medical Disclaimer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            3. Health & Medical Disclaimer
          </h2>
          <div className="rounded-xl bg-red-50 border-2 border-red-200 p-6">
            <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
              <p className="font-bold text-red-700 mb-3">
                ⚕️ IMPORTANT: NOT MEDICAL ADVICE
              </p>
              <p>
                The <strong>BMI Calculator</strong> and any other health-related tools on UseItTool 
                are provided for <strong>general informational purposes only</strong> and are{' '}
                <strong>NOT</strong> intended as a substitute for professional medical advice, 
                diagnosis, or treatment.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>
                  BMI calculations are general indicators and do not account for muscle mass, bone 
                  density, overall body composition, or other health factors.
                </li>
                <li>
                  Always seek the advice of your physician or other qualified health provider with 
                  any questions you may have regarding a medical condition.
                </li>
                <li>
                  Never disregard professional medical advice or delay in seeking it because of 
                  something you have read or calculated on this website.
                </li>
                <li>
                  If you think you may have a medical emergency, call your doctor or emergency 
                  services immediately.
                </li>
              </ul>
              <p className="mt-3 font-bold text-red-700">
                UseItTool does not recommend or endorse any specific tests, physicians, products, 
                procedures, opinions, or other information that may be mentioned on the site.
              </p>
            </div>
          </div>
        </section>

        {/* 4. External Links Disclaimer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            4. External Links Disclaimer
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              The Site may contain (or you may be sent through the Site) links to other websites or 
              content belonging to or originating from third parties or links to websites and features 
              in banners or other advertising. Such external links are not investigated, monitored, 
              or checked for accuracy, adequacy, validity, reliability, availability, or completeness 
              by us.
            </p>
            <p className="mt-3">
              WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR 
              RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE 
              OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A 
              PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND 
              THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
            </p>
          </div>
        </section>

        {/* 5. Professional Disclaimer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            5. Professional Disclaimer
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              The Site cannot and does not contain professional advice. The information is provided 
              for general informational and educational purposes only and is not a substitute for 
              professional advice.
            </p>
            <p className="mt-3">
              Accordingly, before taking any actions based upon such information, we encourage you 
              to consult with the appropriate professionals. We do not provide any kind of professional 
              advice. The use or reliance of any information contained on the Site is solely at your 
              own risk.
            </p>
          </div>
        </section>

        {/* 6. Testimonials Disclaimer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            6. Testimonials Disclaimer
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              The Site may contain testimonials by users of our products and/or services. These 
              testimonials reflect the real-life experiences and opinions of such users. However, 
              the experiences are personal to those particular users, and may vary from person to person.
            </p>
            <p className="mt-3">
              WE DO NOT CLAIM, AND YOU SHOULD NOT ASSUME, THAT ALL USERS WILL HAVE THE SAME EXPERIENCES. 
              YOUR RESULTS MAY DIFFER.
            </p>
            <p className="mt-3">
              The testimonials on the Site are submitted in various forms such as text, audio and/or 
              video, and are reviewed by us before being posted. They appear on the Site verbatim as 
              given by the users, except for the correction of grammar or typing errors. Some testimonials 
              may have been shortened for the sake of brevity where the full testimonial contained 
              extraneous information not relevant to the general public.
            </p>
            <p className="mt-3">
              THE VIEWS AND OPINIONS CONTAINED IN THE TESTIMONIALS ARE THOSE OF THE USERS WHO SUBMITTED 
              THEM AND DO NOT NECESSARILY REFLECT THE VIEWS AND OPINIONS OF USEITTOOL.
            </p>
          </div>
        </section>

        {/* 7. Errors and Omissions Disclaimer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            7. Errors and Omissions Disclaimer
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              While we have made every reasonable effort to ensure that the information contained in 
              this site has been obtained from reliable sources, UseItTool is not responsible for any 
              errors or omissions, or for the results obtained from the use of this information. All 
              information in this site is provided "as is", with no guarantee of completeness, accuracy, 
              timeliness or of the results obtained from the use of this information, and without 
              warranty of any kind, express or implied, including, but not limited to warranties of 
              performance, merchantability and fitness for a particular purpose.
            </p>
            <p className="mt-3">
              In no event will UseItTool, its related partnerships or corporations, or the partners, 
              agents or employees thereof be liable to you or anyone else for any decision made or 
              action taken in reliance on the information in this Site or for any consequential, 
              special or similar damages, even if advised of the possibility of such damages.
            </p>
          </div>
        </section>

        {/* 8. Fair Use Disclaimer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            8. Fair Use Disclaimer
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              This site may contain copyrighted material the use of which may not have been specifically 
              authorized by the copyright owner. We believe this constitutes a "fair use" of any such 
              copyrighted material as provided for in section 107 of the US Copyright Law.
            </p>
            <p className="mt-3">
              If you wish to use copyrighted material from this site for purposes of your own that go 
              beyond "fair use", you must obtain permission from the copyright owner.
            </p>
          </div>
        </section>

        {/* 9. "Use at Your Own Risk" Disclaimer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            9. "Use at Your Own Risk" Disclaimer
          </h2>
          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
            <p>
              We do not assume any responsibility or risk for your use of the website. All information, 
              tools, and services provided on UseItTool are offered on an "as is" and "as available" 
              basis without any warranties or guarantees of any kind.
            </p>
            <p className="mt-3">
              Users are solely responsible for their use of our tools and services. We recommend that 
              you always verify important information and backup your data before using any online tools.
            </p>
          </div>
        </section>

        {/* 10. Contact Us */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            10. Contact Us
          </h2>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-zinc-700 mb-3">
              If you have any questions about this Disclaimer, please contact us:
            </p>
            <div className="space-y-2 text-zinc-700">
              <p>
                📧 Email: <a href="mailto:legal@useittool.com" className="text-indigo-600 hover:text-indigo-700 font-medium">legal@useittool.com</a>
              </p>
              <p>
                🌐 Website: <a href="/" className="text-indigo-600 hover:text-indigo-700 font-medium">useittool.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
            📄 Related Pages
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a
              href="/privacy"
              className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-bold text-zinc-950 mb-1">Privacy Policy</h3>
              <p className="text-xs text-zinc-600">
                Learn how we protect your data.
              </p>
            </a>
            <a
              href="/terms"
              className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="text-2xl mb-2">⚖️</div>
              <h3 className="font-bold text-zinc-950 mb-1">Terms of Service</h3>
              <p className="text-xs text-zinc-600">
                Read our terms and conditions.
              </p>
            </a>
            <a
              href="/cookies"
              className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="text-2xl mb-2">🍪</div>
              <h3 className="font-bold text-zinc-950 mb-1">Cookie Policy</h3>
              <p className="text-xs text-zinc-600">
                Understand our cookie practices.
              </p>
            </a>
          </div>
        </section>

        {/* Thank You */}
        <section className="text-center py-8 border-t border-zinc-200">
          <p className="text-lg text-zinc-700">
            Thank you for reading our Disclaimer! 🙏
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            We are committed to providing useful tools while maintaining transparency.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}