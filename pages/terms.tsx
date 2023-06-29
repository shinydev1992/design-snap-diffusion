import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { useSession, signIn } from "next-auth/react";
const Terms: NextPage =() =>{

    const { data: session, status } = useSession();
    return  <>
                <Head>
                    <title>Design Snap</title>
                </Head>
                <Header
                    photo={session?.user?.image || undefined}
                    email={session?.user?.email || undefined}
                />
                <div className="min-[1024px]:p-[5rem] min-[768px]:p-[2rem] min-[375px]:p-[1rem] min-[320px]:p-[1rem]">
                <h1 className="tracking-widest min-[768px]:text-[#000000] font-articulat font-bold text-[2rem] max-[1024px]:text-[2rem] max-[768px]:text-[1.5rem] text-[#000000] max-[375px]:text-[1.2rem] max-[320px]:text-[1.2rem] ">Terms of Service</h1>
                <div className="divide-[#000000] divide-y pt-[1rem] max-[1024px]:divide-[#000000] max-[768px]:tdivide-[#000000] max-[375px]:divide-[#000000] max-[320px]:divide-[#000000]">
                        <div></div>
                        <div></div>
                </div>
                <div className="pt-[1rem]">
                    <p className="tracking-widest font-bold text-[1.5rem] text-[#000000] font-articulat max-[1024px]:text-[1.3rem] max-[768px]:text-[1.3rem] max-[375px]:text-[1.2rem] max-[320px]:text-[1.2rem]">OVERVIEW</p>
                    <span className=" tracking-wide text-[1.3rem] text-[#000000]  font-articulat max-[1024px]:text-[1.3rem] max-[768px]:text-[1.3rem] max-[375px]:text-[1rem] max-[320px]:text-[1rem]" >
                        Last updated: 22 June 2023
                        <br/> <br/>
                        Welcome to The Design Snap by The Design Snap, Inc. 
                        <br/> <br/>
                        These terms and conditions ("Terms", "Agreement") are an agreement between The Design Snap, Inc. (“The Design Snap, Inc.”, “us”, “we” or “our”) and you (“User”, “you” or “your”). This Agreement sets forth the general terms and conditions of your use of the The Design Snap website and any of its products or services (collectively, “Website” or “Services”).
                        <br/>
                        <br/>
                        We encourage you to review this Agreement carefully. By accessing or using the The Design Snap Website in any way, you are agreeing to these Terms in their entirety. If you do not agree to any of the Terms, you may not use the The Design Snap Website.
                        <br/>
                        <br/>
                        <p className="font-bold">1. Using the The Design Snap Website</p>
                       
                        <br/>
                        <p className="font-bold">a. Who can use it: </p>
                        You must be at least the age of majority in the state where you live to use The Design Snap Website. Use of the The Design Snap Website by anyone under 16 years of age is strictly prohibited.
                        <br/>
                        <br/>
                        <p className="font-bold">b. Registration: </p>
                        
                        Access to certain functionalities of the The Design Snap Website will require you to register with us and to create a profile on our Website. If you register with The Design Snap, you agree to provide us with accurate information and update it as needed for accuracy. We will treat personal information you provide as part of registration in accordance with our Privacy Policy.
                        <br/>
                        <br/>
                        <p className="font-bold">c. Privacy Policy: </p>
                        
                        Our privacy practices are set forth in our Privacy Policy. By using the The Design Snap Website in any way, you understand and acknowledge that the terms of the Privacy Policy apply to you, regardless of whether you have created an account on The Design Snap.

                        <br/>
                        <br/>
                        <p className="font-bold">d. Acceptable Use Policy: </p>
                        When using the The Design Snap Website, you agree to abide by common standards of etiquette and act in accordance with the law, as described further in our Acceptable Use Policy.
                        <br/>
                        <br/>
                        <p className="font-bold">e. Termination: </p>
                        
                        You may close your account at any time by going to account settings and deactivating your account. We may permanently or temporarily suspend your use of the The Design Snap Website at any time for any reason, without any notice or liability to you. We may terminate your account at any time for any or no reason, including if you violate any The Design Snap policy.
                        <br/>
                        <br/>
                        <p className="font-bold">  f. Feedback: </p>
                      
                        We welcome your feedback and suggestions about how to improve the The Design Snap Website. Feel free to submit feedback at contact@thedesignsnap.com. By submitting feedback in this or in any other manner to us, you grant us the right, at our discretion, to use, disclose and otherwise exploit the feedback, in whole or part, without any restriction or compensation to you.
                        <br/>
                        <br/>
                        <p className="font-bold">  2. Content </p>
                        <br/>

                        In the use of the Services provided by The Design Snap, you shall have the ability to provide Input to the Services, and receive Output generated by the Services based on that Input. The combination of input and output shall constitute "Content". Ownership of all Input shall reside with you. The Design Snap hereby assigns to you all rights, title, and interest in and to the Output generated by the Services, subject to your compliance with these Terms. This assignment of rights includes the ability to use the Content for any purpose, including commercial purposes such as sale or publication, provided that such use is in accordance with these Terms. The Design Snap reserves the right to use Content for its own purposes, including to provide and maintain the Services, comply with applicable law, and enforce its policies. You shall be solely responsible for ensuring that any Content you provide does not violate any applicable law or these Terms.
                        <br/>
                        <br/>
                        <p className="font-bold">  3. Payment:  </p>
                       
                        <br/>
                        You shall pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable. The Design Snap, Inc. reserves the right to modify its pricing structure at any time and will provide notice of the changes to you as provided in these Terms. You are responsible for paying any taxes that may apply. If you do not pay on time, we may suspend or terminate your access to the Service.
                        <br/>
                        <br/>
                        <p className="font-bold">   4. Intellectual Property:  </p>
                       
                        <br/>
                        All trademarks, service marks, graphics and logos used in connection with our Website or Services are trademarks or registered trademarks of The Design Snap, Inc. or The Design Snap, Inc.'s licensors. Other trademarks, service marks, graphics and logos used in connection with our Website or Services may be the trademarks of other third parties. Your use of our Website and Services grants you no right or license to reproduce or otherwise use any of The Design Snap, Inc. or third-party trademarks.
                        <br/>
                        <br/>
                        <p className="font-bold">   5. Dispute Resolution:  </p>
                      
                        <br/>
                        If you have a dispute with The Design Snap, Inc., you agree to contact us first and attempt to resolve the dispute with us informally. If we were not able to resolve the dispute with you informally, we each agree to resolve any dispute by binding arbitration as further described in our Dispute Resolution Policy.
                        <br/>
                        <br/>
                        <p className="font-bold">    6. Liability: </p>
                        <br/>
                        To the fullest extent permissible under applicable law, The Design Snap, Inc. is not responsible for any direct, indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, that result from the use of, or inability to use, this service.
                        <br/>
                        <br/>
                        <p className="font-bold">7. Changes to These Terms:</p>
                        <br/>
                        We may modify these Terms at any time. If we do, we will let you know either by posting the modified Terms on the Site or through other communications. It's important that you review the Terms whenever we modify them, as continuing to use the Services after we have posted modified Terms on the Site indicates to The Design Snap, Inc. that you agree to be bound by the modified Terms.

                        <br/>
                        <br/>
                        <p className="font-bold">8. Contact Us:</p>
                        <br/>
                        If you have any questions about these Terms, please contact us at contact@thedesignsnap.com. 
                        <br/>
                        <br/>
                        <p className="font-bold">9. Acceptance of These Terms:</p>
                        <br/>
                        You acknowledge that you have read this Agreement and agree to all its terms and conditions. By using The Design Snap, Inc. Website or its Services, you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to use or access The Design Snap, Inc. Website and its Services.
                        <br/>
                        <br/>
                        <p className="font-bold">10. Contacting Us:</p>
                        <br/>
                        a. If you have any questions about this Agreement, please contact us at info@designsnap.com. This document was last updated on June 22, 2023.
                        <br/>
                        <br/>
                        By using The Design Snap, Inc. Website and Services, you acknowledge that you have read these Terms of Use and agree to be bound by them.
                    </span>
                </div>
                </div>
            </>
}

export default Terms;