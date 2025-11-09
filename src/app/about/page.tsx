import About from "../components/About";
import Button2 from "../components/Button2";
import Footer2 from "../components/Footer2";

export default function AboutPage() {
  const values = [
    {
      title: "Quality",
      description: "Uncompromising standards in every bag we manufacture, using premium materials and precision craftsmanship."
    },
    {
      title: "Reliability",
      description: "Consistent delivery, responsive service, and trustworthy partnerships with our clients across India."
    },
    {
      title: "Innovation",
      description: "Continuously evolving our manufacturing processes and exploring new materials for sustainable solutions."
    },
    {
      title: "Integrity",
      description: "Transparent communication, fair pricing, and ethical business practices in every transaction."
    }
  ];

  const milestones = [
    { year: "2010", achievement: "Founded SS Creations with focus on non-woven bag manufacturing" },
    { year: "2014", achievement: "Expanded to BOPP laminated and custom bag production" },
    { year: "2018", achievement: "Achieved 500+ satisfied clients across retail, e-commerce, and corporate sectors" },
    { year: "2023", achievement: "Introduced eco-friendly jute bag line and advanced customization services" }
  ];

  return (
    <>
      <About />
      <Footer2 />
    </>
  );
}
