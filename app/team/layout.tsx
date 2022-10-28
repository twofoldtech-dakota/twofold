import Link from "next/link";

export default function Layout() {
  const members = [
    {
      id: 1,
      name: "Dakota Smith",
      description:
        "Dakota is a certified Sitecore developer; over the last 10 years, Dakota has developed solutions for Sitecore and has a broad understanding of all Sitecore has to offer. Having experience working in other CMS frameworks such as Episerver and Umbraco, Dakota is exceedingly comfortable working in all aspects of web applications. Having developed and maintained numerous accounts of custom web applications in .Net, Dakota is proficient in data driven applications. Mobile app development has become strong passion and skill for Dakota, and he is always striving to expand his knowledge base by learning and working in new technologies.",
      title: "Co-Founder and Senior Developer",
      linkedin: "#",
      email: "dakota@twofold.tech",
      phone: "(816)277-7292",
    },
    {
      id: 2,
      name: "Dillon Smith",
      description:
        "Dillon is a certified Sitecore developer; over the last 10 years, having worked for many well-known digital agencies specializing in CMS integrations, specifically Sitecore, Dillon has represented companies ranging from small to large, to implement strategic and industry standard solutions. Having gained experience in basic website construction that is content-driven to more complex solutions including globalization, localization, custom integrations and various third-party software integrations, Dillon is well-versed in all phases of development.",
      title: "Co-Founder and Senior Developer",
      linkedin: "#",
      email: "dillon@twofold.tech",
      phone: "(816)277-7293",
    },
  ];

  return (
    <section>
      <div className="page-intro">
        <div className="page-intro-text center">
          <h5>Bold & Ambitious</h5>
          <h1>Our Team</h1>
        </div>
      </div>
      <div className="team-members">
        {members.map((member) => (
          <div className="member" key={member.id}>
            <h5>{member.name}</h5>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
