import Link from "next/link";

export default function Layout() {
  const members = [
    {
      id: 1,
      name: "Dakota Smith",
      description:
        "Dakota is a certified Sitecore developer; over the last 10 years, Dakota has developed solutions for Sitecore and has a broad understanding of all Sitecore has to offer. Having experience working in other CMS frameworks such as Episerver and Umbraco, Dakota is exceedingly comfortable working in all aspects of web applications. Having developed and maintained numerous accounts of custom web applications in .Net, Dakota is proficient in data driven applications. Mobile app development has become strong passion and skill for Dakota, and he is always striving to expand his knowledge base by learning and working in new technologies.",
      title: "Co-Founder and Senior Developer",
      linkedin: "https://www.linkedin.com/in/dakota-smith-a855b230/",
      github: "https://github.com/twofoldtech-dakota",
      email: "dakota@twofold.tech",
      phone: "(816)277-7292",
      image: "",
    },
    {
      id: 2,
      name: "Dillon Smith",
      description:
        "Dillon is a certified Sitecore developer; over the last 10 years, having worked for many well-known digital agencies specializing in CMS integrations, specifically Sitecore, Dillon has represented companies ranging from small to large, to implement strategic and industry standard solutions. Having gained experience in basic website construction that is content-driven to more complex solutions including globalization, localization, custom integrations and various third-party software integrations, Dillon is well-versed in all phases of development.",
      title: "Co-Founder and Senior Developer",
      linkedin: "https://www.linkedin.com/in/dillonosmith/",
      github: "https://github.com/twofoldtech-dillon",
      email: "dillon@twofold.tech",
      phone: "(816)277-7293",
      image: "",
    },
  ];

  return (
    <section>
      <div className="flex justify-center">
        <div className="text-center">
          <h5 className="text-blue">Bold & Ambitious</h5>
          <h1 className="mb-9 text-7xl">Our Team</h1>
          <h3 className="text-gray-500"></h3>
        </div>
      </div>

      <div>
        {members.map((member) => (
          <div className="p-6 mb-16 bg-black rounded-2xl" key={member.id}>
            <h3>{member.name}</h3>
            <h5>{member.title}</h5>
            <p>{member.description}</p>
            <hr className="p-2 border-t-0 border-b border-gray-600 border-dotted" />

            <div className="flex flex-row justify-between p-4 text-sm">
              <div className="flex flex-col self-start">
                <div>{member.phone}</div>
                <a
                  href={`mailto:${member.email}?subject="Twofold.tech requested contact"`}
                >
                  {member.email}
                </a>
              </div>
              <div className="flex flex-col self-end">
                <a href={member.linkedin}>linkedin</a>
                <a href={member.github}>github</a>
              </div>
            </div>

            <hr className="border-t-0 border-b border-gray-600 border-dotted" />
          </div>
        ))}
      </div>
    </section>
  );
}
