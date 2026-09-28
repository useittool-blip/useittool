export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6">About UseItTool</h1>
        
        <div className="space-y-6 text-zinc-700 leading-relaxed">
          <p>
            Welcome to <strong>UseItTool</strong>, your go-to destination for fast, free, and secure online utilities. 
            We believe that everyday digital tasks should be simple, accessible, and completely free for everyone.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Our Mission</h2>
          <p>
            Our mission is to provide a comprehensive suite of web-based tools that help you work smarter, not harder. 
            Whether you need to compress an image, convert a file format, calculate percentages, or generate a secure password, 
            UseItTool has you covered.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>100% Free:</strong> No hidden fees, no premium plans, and no signup required.</li>
            <li><strong>Privacy First:</strong> Most of our tools process your data directly in your browser. Your files never touch our servers.</li>
            <li><strong>Fast & Secure:</strong> Built with modern web technologies to ensure a lightning-fast experience.</li>
            <li><strong>No Installation:</strong> Access our tools from any device with a web browser.</li>
          </ul>

          <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Contact Us</h2>
          <p>
            We are constantly working on adding new tools and improving existing ones. If you have suggestions or feedback, 
            we would love to hear from you.
          </p>
          <p className="font-medium text-indigo-600">
             Email: <a href="mailto:support@useittool.com" className="underline">support@useittool.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}