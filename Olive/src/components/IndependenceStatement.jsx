import SectionHeading from "./ui/SectionHeading";

export default function IndependenceStatement() {
  return (
    <section className="bg-white py-24 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          className="text-4xl md:text-5xl lg:text-6xl text-[#1F3824] mb-6 tracking-tight"
        >
          100% Independent.<br />Always.
        </SectionHeading>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
          We never monetize through brand deals, affiliate links, or ads — so you can trust our recommendations are always aligned with our users.
        </p>
      </div>
    </section>
  );
}
