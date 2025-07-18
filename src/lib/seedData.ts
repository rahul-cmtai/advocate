// import { addDocument, getCollection } from './firebase';

// // Sample services data
// const sampleServices = [
//   {
//     title: 'Family Law',
//     shortDescription: 'Expert legal assistance for all family-related legal matters',
//     description: 'Providing comprehensive legal services for families including divorce, child custody, adoption, and domestic violence cases.',
//     longDescription: `Our Family Law practice offers comprehensive legal assistance for all family-related legal matters. We understand the emotional complexities involved in family disputes and provide compassionate yet effective representation.

// Our expertise includes:

// • Divorce and legal separation proceedings
// • Child custody and visitation arrangements
// • Child and spousal support calculations
// • Adoption procedures and legal documentation
// • Domestic violence protective orders
// • Mediation services for family disputes
// • Property division in divorce cases
// • Prenuptial and postnuptial agreements

// We prioritize the well-being of children in all family cases and work toward amicable resolutions when possible, but are fully prepared to aggressively represent your interests when necessary.`,
//     icon: 'home',
//     features: [
//       'Divorce proceedings and settlements',
//       'Child custody and visitation arrangements',
//       'Child and spousal support calculations',
//       'Adoption legal processes',
//       'Domestic violence protective orders'
//     ],
//     pricing: 'Starting from ₹20,000',
//     createdAt: new Date()
//   },
//   {
//     title: 'Criminal Defense',
//     shortDescription: 'Strong legal defense for all criminal charges',
//     description: 'Defending clients against criminal charges with expertise in both felony and misdemeanor cases.',
//     longDescription: `Our Criminal Defense practice provides vigorous representation for individuals facing criminal charges of all types and severity. We believe everyone deserves a strong defense, regardless of the allegations.

// Our criminal defense services include:

// • Comprehensive case evaluation and defense strategy development
// • Representation during police interrogations and investigations
// • Bail hearings and pretrial motions
// • Evidence analysis and witness examination
// • Plea bargain negotiations when appropriate
// • Full trial representation
// • Sentencing advocacy to minimize penalties
// • Appeals and post-conviction relief

// We handle cases ranging from minor misdemeanors to serious felonies, including DUI/DWI, drug offenses, theft, assault, white-collar crimes, and more. Our approach combines thorough preparation with aggressive courtroom advocacy.`,
//     icon: 'shield',
//     features: [
//       'Felony and misdemeanor defense',
//       'DUI/DWI defense',
//       'Assault and battery cases',
//       'Drug-related offenses',
//       'Theft, robbery, and property crimes'
//     ],
//     pricing: 'Case-based pricing',
//     createdAt: new Date()
//   },
//   {
//     title: 'Civil Litigation',
//     shortDescription: 'Effective representation in civil disputes and lawsuits',
//     description: 'Representing clients in various civil disputes and lawsuits to protect their rights and interests.',
//     longDescription: `Our Civil Litigation practice provides representation across a wide spectrum of civil disputes, from commercial conflicts to personal injury claims. We apply strategic thinking and legal expertise to protect our clients' interests effectively.

// Our civil litigation services include:

// • Pre-litigation consultation and case evaluation
// • Alternative dispute resolution including mediation and arbitration
// • Filing and responding to lawsuits
// • Discovery process management
// • Motion practice and hearings representation
// • Settlement negotiations
// • Trial preparation and representation
// • Judgment enforcement
// • Appeals when necessary

// We handle cases including personal injury claims, property disputes, contract disputes, employment litigation, civil rights violations, and more. Our litigation approach is thorough, strategic, and focused on achieving the best possible outcome while managing costs effectively.`,
//     icon: 'scale',
//     features: [
//       'Personal injury claims',
//       'Property disputes',
//       'Contract disputes',
//       'Employment litigation',
//       'Civil rights violations'
//     ],
//     pricing: 'Consultation required',
//     createdAt: new Date()
//   },
//   {
//     title: 'Corporate Law',
//     shortDescription: 'Comprehensive legal services for businesses',
//     description: 'Providing strategic legal guidance for businesses from formation through growth and beyond.',
//     longDescription: `Our Corporate Law practice delivers comprehensive legal solutions for businesses at every stage of development. From startups to established corporations, we provide the legal guidance necessary for sustainable growth and success.

// Our corporate law services include:

// • Business formation and entity selection
// • Corporate governance and compliance
// • Contract drafting, review, and negotiation
// • Mergers and acquisitions
// • Joint ventures and strategic alliances
// • Intellectual property protection
// • Employment agreements and policies
// • Shareholder and partnership agreements
// • Business succession planning
// • Corporate restructuring

// We serve as trusted advisors to businesses across various industries, helping navigate complex legal challenges while supporting strategic business objectives. Our approach combines technical legal expertise with practical business sense.`,
//     icon: 'briefcase',
//     features: [
//       'Business formation and structuring',
//       'Corporate governance',
//       'Mergers and acquisitions',
//       'Contract drafting and negotiation',
//       'Intellectual property protection'
//     ],
//     pricing: 'Starting from ₹30,000',
//     createdAt: new Date()
//   }
// ];

// // Sample blogs data
// const sampleBlogs = [
//   {
//     title: 'Understanding Your Rights in Divorce Proceedings',
//     shortDescription: 'Essential guide to legal rights during divorce',
//     summary: 'A guide to help you navigate the complex legal aspects of divorce and ensure your rights are protected.',
//     content: `Divorce can be one of the most challenging experiences in a person's life. Beyond the emotional toll, there are significant legal considerations that must be addressed. This article aims to provide clarity on your legal rights during divorce proceedings.

// First, it's important to understand that divorce laws vary by state. However, there are some common rights that most individuals have during a divorce:

// 1. Right to marital property division: Generally, assets acquired during the marriage are considered marital property and subject to division.

// 2. Right to child custody and visitation: Both parents typically have the right to seek custody and visitation with their children.

// 3. Right to spousal support: Depending on circumstances, you may have the right to receive or the obligation to pay spousal support.

// 4. Right to legal representation: You have the right to hire an attorney to represent your interests.

// To protect your rights, consider the following steps:

// - Gather important financial documents
// - Document assets and liabilities
// - Consult with an experienced family law attorney
// - Consider mediation as an alternative to litigation

// Remember, the goal should be to reach a fair settlement that allows both parties to move forward with their lives while minimizing the impact on any children involved.`,
//     tags: ['Divorce Law', 'Family Law', 'Legal Rights'],
//     createdAt: new Date()
//   },
//   {
//     title: "What to Do If You're Facing Criminal Charges",
//     shortDescription: 'Immediate steps to take when charged with a crime',
//     summary: 'Essential steps to take immediately after being charged with a crime to protect your rights and future.',
//     content: `Being charged with a criminal offense can be overwhelming and frightening. However, the actions you take immediately following criminal charges can significantly impact the outcome of your case. Here's what you should do:

// 1. Exercise your right to remain silent. Anything you say can and will be used against you in court. Politely inform the officers that you wish to speak with an attorney before answering any questions.

// 2. Contact an experienced criminal defense attorney as soon as possible. The earlier an attorney gets involved in your case, the better they can protect your rights and start building your defense.

// 3. Document everything. Write down all details you can remember about your arrest, including times, locations, and the officers involved.

// 4. Comply with all court orders and release conditions. Missing court dates or violating terms of release can result in additional charges or the revocation of bail.

// 5. Avoid discussing your case with anyone other than your attorney. Conversations with friends, family, or cellmates are not protected by attorney-client privilege.

// 6. Stay off social media. Posts, photos, or comments could potentially be used against you.

// Remember, being charged with a crime does not mean you will be convicted. With proper legal representation and by carefully following your attorney's advice, you can work toward the best possible outcome for your situation.`,
//     tags: ['Criminal Law', 'Legal Advice', 'Rights'],
//     createdAt: new Date()
//   },
//   {
//     title: 'The Importance of Estate Planning at Any Age',
//     shortDescription: 'Why everyone needs estate planning regardless of age',
//     summary: 'Why everyone should have an estate plan, regardless of age or wealth, and how to get started with basic estate planning.',
//     content: `Estate planning is often associated with the elderly or wealthy, but the truth is that everyone can benefit from having a proper estate plan in place. Estate planning is not just about distributing assets; it's about ensuring your wishes are respected and reducing burdens on your loved ones during difficult times.

// Key components of a basic estate plan include:

// 1. Will: This document specifies how you want your assets distributed after death and can name guardians for minor children.

// 2. Power of Attorney: This designates someone to make financial decisions on your behalf if you become incapacitated.

// 3. Healthcare Directive: Also known as a living will, this document outlines your medical care preferences if you're unable to communicate them.

// 4. Beneficiary Designations: These ensure that certain assets like life insurance policies and retirement accounts pass directly to your chosen beneficiaries.

// For younger adults, estate planning might seem premature, but consider these situations:
// - Who would care for your children if something happened to you?
// - Who would make medical decisions for you after a serious accident?
// - What would happen to your digital assets or pets?

// Estate planning doesn't have to be complicated or expensive. Starting with basic documents and updating them as your life changes is a responsible approach that can provide peace of mind for you and your loved ones.`,
//     tags: ['Estate Planning', 'Legal Planning', 'Wills'],
//     createdAt: new Date()
//   },
//   {
//     title: 'How to Navigate Employment Discrimination Claims',
//     shortDescription: 'Understanding and addressing workplace discrimination',
//     summary: 'A comprehensive guide to understanding, identifying, and legally addressing discrimination in the workplace.',
//     content: `Workplace discrimination remains a significant issue in today's professional environment. Understanding your rights and the proper steps to address discrimination is crucial for protecting yourself and potentially others in similar situations.

// Types of Employment Discrimination:
// - Race, color, and national origin discrimination
// - Gender and sex discrimination
// - Age discrimination (for workers over 40)
// - Disability discrimination
// - Religious discrimination
// - Pregnancy discrimination
// - Genetic information discrimination

// If you believe you're experiencing workplace discrimination:

// 1. Document everything. Keep a detailed journal of incidents, including dates, times, locations, people involved, witnesses, and what was said or done.

// 2. Review your company's policies. Check your employee handbook for the procedure to report discrimination.

// 3. Report internally first. Follow your company's procedure for reporting discrimination, typically to HR or management.

// 4. Preserve evidence. Save emails, messages, performance reviews, and other documents that support your claim.

// 5. File with the appropriate agency. If internal resolution fails, file a claim with the Equal Employment Opportunity Commission (EEOC) or your state's equivalent agency.

// 6. Consult an employment attorney. An experienced lawyer can evaluate your case and advise on the best course of action.

// 7. Understand time limitations. There are strict deadlines for filing discrimination claims, typically 180 or 300 days from the discriminatory act.

// Remember that anti-retaliation laws protect employees who report discrimination. If you experience retaliation for making a complaint, document these actions as they may strengthen your case.

// The legal process for discrimination claims can be complex, but with proper documentation and legal guidance, you can effectively assert your rights to a fair workplace.`,
//     tags: ['Employment Law', 'Discrimination', 'Workplace Rights'],
//     createdAt: new Date()
//   }
// ];

// // Sample contact leads data
// const sampleContactLeads = [
//   {
//     name: 'Ananya Sharma',
//     email: 'ananya.sharma@example.com',
//     phone: '+91 98765 43210',
//     subject: 'Consultation Request for Property Dispute',
//     message: 'I am currently involved in a property dispute with my neighbor regarding boundary lines. I would like to schedule a consultation to discuss my legal options. I am available on weekdays after 4 PM. Thank you.',
//     createdAt: new Date()
//   },
//   {
//     name: 'Rajesh Kumar',
//     email: 'rajesh.kumar@example.com',
//     phone: '+91 87654 32109',
//     subject: 'Query About Divorce Proceedings',
//     message: 'I am considering filing for divorce and would like to understand the legal process and my rights. I have two minor children and some concerns about custody arrangements. Please let me know when you can schedule an initial consultation.',
//     createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
//   },
//   {
//     name: 'Priya Patel',
//     email: 'priya.patel@example.com',
//     phone: '+91 76543 21098',
//     subject: 'Corporate Law Services',
//     message: 'I am starting a new business and need legal assistance with company registration, documentation, and understanding compliance requirements. I would appreciate if we could schedule a meeting to discuss your services and how you can help my business venture.',
//     createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) // 5 days ago
//   }
// ];

// // Function to seed the database with sample data
// export const seedDatabase = async () => {
//   try {
//     // Check if collections are empty
//     const services = await getCollection('services');
//     const blogs = await getCollection('blogs');
//     const contactLeads = await getCollection('contactLeads');
    
//     // Add sample services if none exist
//     if (services.length === 0) {
//       console.log('Seeding services...');
//       for (const service of sampleServices) {
//         await addDocument('services', service);
//       }
//     }
    
//     // Add sample blogs if none exist
//     if (blogs.length === 0) {
//       console.log('Seeding blogs...');
//       for (const blog of sampleBlogs) {
//         await addDocument('blogs', blog);
//       }
//     }
    
//     // Add sample contact leads if none exist
//     if (contactLeads.length === 0) {
//       console.log('Seeding contact leads...');
//       for (const lead of sampleContactLeads) {
//         await addDocument('contactLeads', lead);
//       }
//     }
    
//     console.log('Database seeding completed!');
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   }
// };

// export default seedDatabase; 