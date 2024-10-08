import MaxWidthWrapper from "@/components/MaxWidthWrapper";

type ContentItem = {
  subtitle?: string;
  text?: string;
  list?: string[] | { type: string; description: string }[];
  term?: string;
  definition?: string;
};

type Section = {
  title: string;
  content: ContentItem[];
};

type PrivacyPolicyData = {
  title: string;
  lastUpdated: string;
  description: string;
  sections: Section[];
};

const privacyPolicyData: PrivacyPolicyData = {
  title: "Privacy Policy",
  lastUpdated: "Oct 2, 2024",
  description:
    "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.",
  sections: [
    {
      title: "Interpretation and Definitions",
      content: [
        {
          term: "Account",
          definition:
            "A unique account created for You to access our Service or parts of our Service.",
        },
        {
          term: "Affiliate",
          definition:
            'An entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
        },
      ],
    },
    {
      title: "Collecting and Using Your Personal Data",
      content: [
        {
          subtitle: "Types of Data Collected",
          text: "We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You.",
          list: [
            "Email address",
            "First name and last name",
            "Phone number",
            "Address, State, Province, ZIP/Postal code, City",
          ],
        },
        {
          subtitle: "Usage Data",
          text: "Usage Data is collected automatically when using the Service.",
          list: [
            "Device's Internet Protocol address (e.g. IP address)",
            "Browser type",
            "Browser version",
            "The pages of our Service that You visit",
            "The time and date of Your visit",
            "The time spent on those pages",
            "Unique device identifiers",
            "Other diagnostic data",
          ],
        },
        {
          subtitle: "Information from Third-Party Social Media Services",
          text: "We may collect Personal data that is already associated with Your Third-Party Social Media Service's account.",
          list: [
            "Name",
            "Email address",
            "Activities",
            "Contact list associated with that account",
          ],
        },
      ],
    },
    {
      title: "Tracking Technologies and Cookies",
      content: [
        {
          subtitle: "Cookies",
          text: "We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.",
          list: ["Cookies or Browser Cookies", "Web Beacons"],
        },
        {
          subtitle: "Types of Cookies",
          text: "We use both Session and Persistent Cookies for the purposes set out below.",
          list: [
            {
              type: "Necessary / Essential Cookies",
              description:
                "These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features.",
            },
            {
              type: "Cookies Policy / Notice Acceptance Cookies",
              description:
                "These Cookies identify if users have accepted the use of cookies on the Website.",
            },
            {
              type: "Functionality Cookies",
              description:
                "These Cookies allow us to remember choices You make when You use the Website .",
            },
          ],
        },
      ],
    },
    {
      title: "Use of Your Personal Data",
      content: [
        {
          subtitle:
            "The Company may use Personal Data for the following purposes:",
          list: [
            "To provide and maintain our Service",
            "To manage Your Account",
            "For the performance of a contract",
            "To contact You",
            "To provide You with news, special offers and general information about other goods, services and events",
            "To manage Your requests",
            "For business transfers",
            "For other purposes",
          ],
        },
      ],
    },
    {
      title: "Retention of Your Personal Data",
      content: [
        {
          text: "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.",
        },
      ],
    },
    {
      title: "Transfer of Your Personal Data",
      content: [
        {
          text: "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located.",
        },
      ],
    },
    {
      title: "Delete Your Personal Data",
      content: [
        {
          text: "You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.",
        },
      ],
    },
    {
      title: "Disclosure of Your Personal Data",
      content: [
        {
          subtitle: "Business Transactions",
          text: "If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred.",
        },
        {
          subtitle: "Law enforcement",
          text: "Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities.",
        },
        {
          subtitle: "Other legal requirements",
          text: "The Company may disclose Your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of the Company, prevent or investigate possible wrongdoing, protect the personal safety of Users of the Service or the public, or protect against legal liability.",
        },
      ],
    },
    {
      title: "Security of Your Personal Data",
      content: [
        {
          text: "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.",
        },
      ],
    },
    {
      title: "Children's Privacy",
      content: [
        {
          text: "Our Service does not address anyone under the age of 13.",
        },
      ],
    },
    {
      title: "Links to Other Websites",
      content: [
        {
          text: "Our Service may contain links to other websites that are not operated by Us.",
        },
      ],
    },
    {
      title: "Changes to this Privacy Policy",
      content: [
        {
          text: "We may update Our Privacy Policy from time to time.",
        },
      ],
    },
  ],
};

const PrivacyPolicyPage: React.FC = () => {
  return (
    <MaxWidthWrapper className="my-6 md:my-10">
      <h1 className="text-3xl font-bold mb-4">{privacyPolicyData.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        Last updated: {privacyPolicyData.lastUpdated}
      </p>
      <p className="text-sm text-gray-800 mb-4">
        Last updated: {privacyPolicyData.description}
      </p>
      {privacyPolicyData.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
          {section.content.map((content, contentIndex) => (
            <div key={contentIndex} className="mb-4">
              {content.subtitle && (
                <h3 className="text-xl font-bold mb-1">{content.subtitle}</h3>
              )}
              {content.text && <p className="text-lg">{content.text}</p>}
              {Array.isArray(content.list) && (
                <ul className="list-disc pl-4">
                  {content.list.map((item, itemIndex) =>
                    typeof item === "string" ? (
                      <li key={itemIndex} className="mb-1 text-gray-800">
                        {item}
                      </li>
                    ) : (
                      <li key={itemIndex} className="mb-1 text-gray-800">
                        <strong>{item.type}:</strong> {item.description}
                      </li>
                    )
                  )}
                </ul>
              )}
              {content.definition && (
                <dl className="mb-4">
                  <div className="mb-2">
                    <dt className="">{content.definition}</dt>
                  </div>
                </dl>
              )}
            </div>
          ))}
        </div>
      ))}
    </MaxWidthWrapper>
  );
};

export default PrivacyPolicyPage;
