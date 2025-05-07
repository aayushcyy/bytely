import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Hiring from "../Component/Hiring";

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <section className="flex flex-col lg:px-64 sm:px-14 gap-10 mb-20 ">
        <p className="lg:text-4xl sm:text-3xl text-center font-semibold text-[#09514C] lg:pt-40 sm:pt-32 lg:pb-28 sm:pb-16">
          Terms of Service
        </p>
        <div className="flex flex-col items-start gap-4 text-sm">
          <h1 className="uppercase font-semibold text-xl">Tl:dr:</h1>
          <p>
            We (the folks at UniByte) run an application called UniByte.com and
            would love for you to use it. Our basic service is free, and we
            offer paid upgrades for advanced features. Our service is designed
            to store data related to your CRM needs and relate it to your email.
            While we take this responsibility very seriously, we cannot be
            responsible for you inadvertently sharing this data with
            unauthorized parties due to user error or similar.
          </p>
        </div>
        <div className="text-sm gap-4 flex flex-col">
          <p className="font-semibold text-xl">Terms of Service:</p>
          <p>
            The following terms and conditions govern all use of the UniByte.com
            website and all content, services, and products available at or
            through the website, including, but not limited to, the UniByte
            Chrome and Safari extension, the UniByte iOS app, and the UniByte
            Android app. The Website is offered subject to your acceptance
            without modification of all of the terms and conditions contained
            herein and all other operating rules, policies (including, without
            limitation, UniByte's Privacy Policy), and procedures that may be
            published from time to time on this Site by UniByte (collectively,
            the "Agreement").
          </p>
          <p>
            Please read this Agreement carefully before accessing or using the
            Website. By accessing or using any part of the website, you agree to
            become bound by the terms and conditions of this agreement. If you
            do not agree to all the terms and conditions of this agreement, then
            you may not access the Website or use any services. If these terms
            and conditions are considered an offer by UniByte, acceptance is
            expressly limited to these terms. The Website is available only to
            individuals who are at least 13 years old.
          </p>
        </div>
        {/*  */}
        <div className="flex flex-col ml-10 text-base gap-7">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">1. Electronic Communications</p>
            <p className="text-sm">
              When you visit the Website or send e-mails to us, you are
              communicating with us electronically. You consent to receive
              communications from us electronically. We will communicate with
              you by e-mail or by posting notices on this Website. You agree
              that all agreements, notices, disclosures, and other
              communications that we provide to you electronically satisfy any
              requirement that such communications be in writing.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">2. Intellectual Property</p>
            <p className="text-sm">
              All content included on this Website, such as text, graphics,
              logos, button icons, images, audio clips, digital downloads, data
              compilations, and software, is the property of UniByte or its
              content suppliers. The compilation of all content on this Website
              is the exclusive property of UniByte. All software used on this
              Website is the property of UniByte or its software suppliers.
              Other trademarks, service marks, graphics, and logos used in
              connection with the Website may be the trademarks of other third
              parties. Your use of the Website grants you no right or license to
              reproduce or otherwise use any UniByte or third-party trademarks.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold ">3. Your UniByte Account and Site</p>
            <p className="text-sm">
              If you use this Website, you are responsible for maintaining the
              confidentiality of your UniByte account and password and for
              restricting access to your computer. You agree to accept
              responsibility for all activities that occur under your account or
              password. UniByte reserves the right to refuse service, terminate
              accounts, remove or edit content in its sole discretion.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-semibold text-base">4. Changes</p>
            <p>
              UniByte reserves the right, at its sole discretion, to modify or
              replace any part of this Agreement. It is your responsibility to
              check this Agreement periodically for changes. Your continued use
              of or access to the Website following the posting of any changes
              to this Agreement constitutes acceptance of those changes. UniByte
              may also, in the future, offer new services and/or features
              through the Website (including the release of new tools and
              resources). Such new features and/or services shall be subject to
              the terms and conditions of this Agreement.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-semibold text-base">5. Payment and Refunds</p>
            <p>
              Refunds are granted at the sole discretion of UniByte and this
              policy can be modified at any point. For monthly subscriptions,
              for a payment to be eligible the request for refund must be made
              within 14 days of the most recent invoice. For yearly
              subscriptions, the request must be made within 30 days of the most
              recent invoice. Refunds are never offered for plan downgrades or
              the removal of users on annual or monthly plans.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-semibold text-base">6. General Terms</p>
            <p>
              Optional paid services are available on the Website (any such
              services, an "Upgrade"). By selecting an Upgrade, you agree to pay
              UniByte the monthly or annual subscription fees indicated for that
              service. Payments will be charged on a pre-pay basis on the day
              you sign up for an Upgrade and will cover the use of that service
              for a monthly or annual subscription period as indicated. Upgrade
              fees are not refundable.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-semibold text-base">7. Automatic Renewal</p>
            <p>
              Unless you notify UniByte before the end of the applicable
              subscription period that you want to cancel an Upgrade, your
              Upgrade subscription will automatically renew and you authorize us
              to collect the then-applicable annual or monthly subscription fee
              for such Upgrade (as well as any taxes) using any credit card or
              other payment mechanism we have on record for you. Upgrades can be
              canceled at any time in the Upgrades section of your site’s
              dashboard.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-semibold text-base">
              8. Cancellation and Termination
            </p>
            <p>
              You are solely responsible for properly canceling your account.
              All of your content will be immediately deleted from the Service
              upon cancellation. This information cannot be recovered once your
              account is canceled. All service charges accrued up until the
              cancellation date must be paid in full. UniByte, in its sole
              discretion, has the right to suspend or terminate your account and
              refuse any and all current or future use of the Service, or any
              other UniByte service, for any reason at any time. Such
              termination of the Service will result in the deactivation or
              deletion of your Account or your access to your Account, and the
              forfeiture and relinquishment of all content in your Account.
              UniByte reserves the right to refuse service to anyone for any
              reason at any time. All provisions of this Agreement which by
              their nature should survive cancellation or termination shall
              survive cancellation or termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-semibold text-base">
              9. Limitation of Liability
            </p>
            <p>
              In no event will UniByte, or its suppliers or licensors, be liable
              with respect to any subject matter of this agreement under any
              contract, negligence, strict liability, or other legal or
              equitable theory for:
            </p>
            <div className="flex flex-col">
              <div className="flex gap-2">
                <p className="w-9">(i)</p>
                <p>any special, incidental or consequential damages.</p>
              </div>
              <div className="flex gap-2">
                <p className="w-9">(ii)</p>
                <p>
                  the cost of procurement for substitute products or services.
                </p>
              </div>
              <div className="flex gap-2">
                <p className="w-9">(iii)</p>
                <p>interruption of use or loss or corruption of data.</p>
              </div>
              <div className="flex gap-2">
                <p className="w-9">(iv)</p>
                <p>
                  any amounts that exceed the fees paid by you to UniByte under
                  this agreement during the twelve (12) month period prior to
                  the cause of action.
                </p>
              </div>
              <p className="pt-2">
                UniByte shall have no liability for any failure or delay due to
                matters beyond their reasonable control.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-semibold text-base">
              10. General Representation and Warranty
            </p>
            <p>You represent and warrant that:</p>
            <div className="flex flex-col">
              <div className="flex gap-2">
                <p className="w-9">(i)</p>
                <p>
                  your use of the Website will be in strict accordance with the
                  UniByte Privacy Policy, with this Agreement, and with all
                  applicable usage guidelines.
                </p>
              </div>
              <div className="flex gap-2">
                <p className="w-9">(ii)</p>
                <p>
                  your use of the Website will not infringe or misappropriate
                  the intellectual property rights of any third party.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-semibold text-base">11. Indemnification</p>
            <p>
              You agree to indemnify and hold harmless UniByte, its contractors,
              and its licensors, and their respective directors, officers,
              employees, and agents from and against any and all claims and
              expenses, including attorneys' fees, arising out of your use of
              the Website, including but not limited to your violation of this
              Agreement.
            </p>
          </div>
        </div>
      </section>
      <Hiring />
      <Footer />
    </div>
  );
}
