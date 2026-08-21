// Placeholder posts — replace with a Firestore query once the backend is
// wired in. Both Blog.jsx and BlogPost.jsx read from this single source so
// listing and detail views stay in sync.

export const CATEGORIES = [
  'All',
  'Campaign Trail',
  'Policy',
  'Community',
  'Economy & Energy',
  'Youth & Education',
];

export const POSTS = [
  {
    slug: 'capacity-2027-officially-launches',
    title: 'CAPACITY 2027 Officially Launches Bid for Rivers East Senate Seat',
    excerpt:
      'Apostle Livingstone Iniabiecheton Lambert, JP formally introduces his campaign, outlining a vision built on competence, accountability, and grassroots representation for Rivers East.',
    category: 'Campaign Trail',
    date: 'Jul 14, 2026',
    featured: true,
    body: [
      "Today marks the official launch of the CAPACITY 2027 campaign. Apostle Livingstone Iniabiecheton Lambert, JP stood before supporters in Port Harcourt to declare his bid for the Rivers East Senatorial seat in Nigeria's National Assembly, framing the race around a single word: capacity.",
      'The campaign takes its name from an eight part platform, Competent, Accountable, Progressive, Active, Communicator, Intelligent, Technologist, and Youthful, that its organizers say reflects both the candidate\'s background and the standard he wants to hold himself to in office.',
      'Lambert brings more than two decades of experience across the maritime, energy, and ministry sectors, alongside a long record of grassroots mobilization and community development work in Rivers State. Campaign organizers say the coming months will focus on town halls across the district\'s local government areas.',
      'More details on the campaign\'s policy priorities, including economic growth, youth empowerment, education, healthcare, infrastructure, security, environmental justice, and sustainable development, will follow in future posts.',
    ],
  },
  {
    slug: 'maritime-economy-rivers-east',
    title: 'Why Rivers East Needs a Senator Who Understands the Maritime Economy',
    excerpt:
      "From Okrika to Port Harcourt, the district's economy runs on the water. A look at what real maritime and energy expertise brings to the National Assembly.",
    category: 'Economy & Energy',
    date: 'Jul 21, 2026',
    body: [
      "Rivers East sits at the heart of Nigeria's maritime and energy corridor. From the ports of Okrika to the refineries and terminals that ring Port Harcourt, the district's economic life is inseparable from the water that surrounds it.",
      'That reality has shaped this campaign\'s economic priorities. Having spent years running a maritime and energy company, Apostle Livingstone Iniabiecheton Lambert, JP argues that policy on shipping, crude supply chains, and port infrastructure should be written by people who understand how those industries actually work on the ground.',
      'The campaign\'s early economic platform focuses on three areas: modernizing port and terminal infrastructure, supporting local content in the oil and gas supply chain, and expanding opportunities for small businesses that service the maritime sector.',
      'Future posts will go deeper into each of these proposals as the campaign develops its full policy platform ahead of 2027.',
    ],
  },
  {
    slug: 'youth-empowerment-capacity-manifesto',
    title: 'Youth Empowerment: The Backbone of the CAPACITY Manifesto',
    excerpt:
      'Education, opportunity, and a seat at the table — why the "Youthful" pillar isn\'t just a word, it\'s a governing priority.',
    category: 'Youth & Education',
    date: 'Jul 28, 2026',
    body: [
      'Of the eight pillars in the CAPACITY manifesto, "Youthful" is the one campaign organizers say shapes the most day to day decisions. Rivers East, like much of Nigeria, has a young population, and the campaign argues that governance has not kept pace with that reality.',
      'The youth focused priorities laid out so far include expanding access to technical and vocational education, creating structured pathways from schooling into the maritime, energy, and technology sectors, and involving young people directly in campaign decision making rather than treating them only as an audience.',
      'Apostle Livingstone Iniabiecheton Lambert, JP has pointed to his own work in blockchain and technology consulting as an example of the kind of forward looking skill set he wants to see supported among young people in the district.',
      'The campaign plans to hold youth specific town halls in the coming months, details of which will be announced on this blog and through the campaign\'s social channels.',
    ],
  },
  {
    slug: 'grassroots-to-government-okrika',
    title: 'Grassroots to Government: Two Decades of Community Service in Okrika',
    excerpt:
      'Before the campaign, there was the community work. A look back at two decades of humanitarian service across Rivers State.',
    category: 'Community',
    date: 'Aug 2, 2026',
    body: [
      'Long before announcing a run for the Senate, Apostle Livingstone Iniabiecheton Lambert, JP was known in Okrika and across Rivers State for community and humanitarian work carried out through Livingstone Home of Miracles Ministry International, where he serves as Founder and General Overseer.',
      'That work, spanning more than two decades, has touched grassroots mobilization, economic empowerment initiatives, and direct humanitarian service in communities across the state. Supporters say it is this record, not just campaign promises, that forms the basis of the CAPACITY 2027 bid.',
      'The campaign says it intends to keep that community first approach at the center of its outreach, with organizers prioritizing in person town halls and local government area visits over top down messaging.',
    ],
  },
  {
    slug: 'breaking-down-eight-pillars',
    title: 'Breaking Down the Eight Pillars of CAPACITY',
    excerpt:
      'Competent, Accountable, Progressive, Active, Communicator, Intelligent, Technologist, Youthful — what each pillar means in practice.',
    category: 'Policy',
    date: 'Aug 6, 2026',
    body: [
      'The name CAPACITY 2027 is more than a slogan, it is an acronym that organizers say functions as a governing checklist. Here is a short breakdown of what each pillar is meant to represent.',
      'Competent speaks to two decades of hands on experience running maritime, energy, and ministry organizations. Accountable reflects the candidate\'s standing as a Justice of the Peace and a commitment to transparent representation. Progressive covers policy aimed at growing the district\'s economy, from energy and maritime trade to small business.',
      'Active is about grassroots mobilization and hands on community development, not distant governance. Communicator emphasizes direct engagement with constituents both online and on the ground. Intelligent points to strategic thinking shaped by decades across business, ministry, and public affairs.',
      'Technologist reflects a background in blockchain and technology consulting, applied to digital infrastructure for the district. And Youthful puts youth empowerment, education, and opportunity at the foundation of everything else the campaign hopes to accomplish.',
    ],
  },
  {
    slug: 'security-environmental-justice-niger-delta',
    title: 'Security and Environmental Justice in the Niger Delta: A Path Forward',
    excerpt:
      'Addressing security and environmental concerns in the creeks requires more than talk. A policy outline for Rivers East.',
    category: 'Policy',
    date: 'Aug 11, 2026',
    body: [
      'Security and environmental justice are consistently raised as top concerns by residents across the creeks of Rivers East, and the CAPACITY 2027 campaign has begun outlining its approach to both.',
      'On security, the campaign says it will prioritize better coordination between local, state, and federal security agencies operating in the waterways, alongside investment in community based early warning systems.',
      'On the environment, organizers point to years of pollution linked to oil and gas activity in the Niger Delta and say any energy policy from this campaign has to be paired with real accountability for environmental damage and support for affected communities.',
      'This remains an area the campaign says it will continue to develop in consultation with community leaders across the district in the coming months.',
    ],
  },
  {
    slug: 'on-the-ground-in-etche',
    title: 'On the Ground in Etche: Campaign Trail Notes',
    excerpt:
      'Notes from a week of town halls and listening sessions across Etche local government area.',
    category: 'Campaign Trail',
    date: 'Aug 15, 2026',
    body: [
      'This past week, the CAPACITY 2027 campaign held a series of town halls and listening sessions across Etche local government area, one of several stops planned across Rivers East in the months ahead.',
      'Conversations with residents centered on road infrastructure, access to healthcare facilities, and opportunities for young people leaving school without a clear path into work. Campaign organizers took notes on each session to feed directly into the policy platform being developed.',
      'Apostle Livingstone Iniabiecheton Lambert, JP thanked attendees for their candor, noting that the campaign\'s approach is built on listening first, in keeping with the "Communicator" and "Active" pillars of the CAPACITY manifesto.',
      'More stops are planned across the district in the coming weeks, with updates to follow here on the blog.',
    ],
  },
];