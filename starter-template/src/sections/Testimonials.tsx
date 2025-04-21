import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Jose Lee",
    position: "Director, R&D @ Lim Geomatics",
    text: (
      <>
        <p>
          &#8226; Xin was key software developer in a tiger team that was formed
          to save a key business pursuit. Earlier, I was impressed by how quick
          she learned new concepts and developed a solution on in weeks when I
          was expecting that it would take her a couple of months. Accordingly,
          I felt that she could help the tiger team and she proved me that I was
          right.
        </p>
        <p className="mt-4">
          &#8226; Over my over 30 years of work experience in Canada, I had
          Co-op students from Waterloo, SFU, UVic, UBC, and Queens. Xin is way
          up the top.
        </p>
        <p className="mt-4">
          &#8226; We immediately offered and hired Xin for her 2nd Co-op term
          (And later it was extended again for a 3rd term)
        </p>
      </>
    ),
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="manager-section" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Manager"
          title="What My Manager Say about Me"
          description="I did bribe him from time to time"
        />

        <div className="mt-10 lg:mt-12 flex justify-center">
          <div className="flex gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="">
                <div className="flex gap-4 items-center">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="bg-gradient-to-r from-purple-300 to-sky-400 inline-flex font-bold uppercase traking-widest text-sm text-transparent bg-clip-text gap-2">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-6 text-sm md:text-base lg:">
                  {testimonial.text}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
