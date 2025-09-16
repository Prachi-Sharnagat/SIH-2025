export default function About() {
  return (
    <div className="flex items-center mt-20 font-GS justify-center text-justify min-h-screen p-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-4 font-JB">Introduction</h1>
        <p className="text-gray-700 mb-6">
          <span className="font-JB font-bold text-[rgb(58,153,145)]">AI-driven LCA Tool</span> is a sustainability platform designed for metallurgy and mining. It helps engineers, researchers, and decision-makers assess the environmental and circularity impacts of metals like aluminium, copper, and critical minerals.
        </p>

        <p className="text-gray-700 mb-6">
          <span className="font-JB font-bold text-[rgb(58,153,145)]">The tool</span> allows users to input process data or rely on AI to estimate missing parameters. It visualizes material flows, compares traditional vs. circular pathways, and generates actionable sustainability reports that guide better decisions for resource efficiency.
        </p>

        <hr className="my-8 border-gray-200"/>

        <h2 className="text-2xl font-JB font-bold mb-4">Core Principles</h2>

        <p className="text-gray-700 mb-4">
          <strong className="font-semibold">We believe that technology can accelerate sustainability in heavy industries. </strong>
          A clear, data-driven interface builds trust and empowers industries to make informed choices that reduce emissions and promote circularity.
        </p>

        <p className="text-gray-700 mb-4">
          When someone uses the platform, they naturally ask:
        </p>

        <ul className="list-disc list-inside mono-text text-sm font-bold text-gray-700 mb-6">
          <li>What is the environmental footprint of this process?</li>
          <li>How much can recycling reduce impacts?</li>
          <li>Which pathway is more resource-efficient?</li>
        </ul>

        <p className="text-gray-700 mb-4">
          <strong className="font-semibold">Ignoring lifecycle impacts can harm both business and the planet.</strong> It may lead to resource waste, higher emissions, and missed opportunities for circularity.
        </p>

        <p className="text-gray-700 mb-4">
          <strong className="font-semibold">Transparent sustainability reporting shows responsibility and innovation.</strong>
          It creates confidence among stakeholders and highlights the potential for circular economies in metals.
        </p>

        <p className="text-gray-700 mb-4">
          A good example is comparing <strong>primary aluminium production vs. recycled aluminium</strong>. Recycling can cut energy use by up to 95% — a major insight industries need for sustainable growth.
        </p>

        <p className="text-gray-700 font-bold font-JB text-md">
          Inspiration : <a href="https://www.openlca.org/" className="text-blue-600 font-bold font-JB text-sm hover:text-violet-700">openLCA</a>, <a href="https://minviro.com" className="text-blue-600 font-bold font-JB text-sm hover:text-violet-700">Minviro</a>, <a href="https://sphera.com" className="text-blue-600 font-bold font-JB text-sm hover:text-violet-700">GaBi</a>
        </p>
      </div>
    </div>
  );
}
