<template>
  <div>
    <section class="section center-content">
      <div class="container">
        <h1>Fonz Music Privacy Policy</h1>
        <div class="section-inner" style="text-align: left;">
          <div class="split-item-content center-content-mobile">
            <h3>We Value Your Privacy</h3>
            <p>
              At Fonz, one of our main priorities is to be able to enjoy
              yourself, and a big part of that is not having to worry about
              information breaches and others selling your data. We are
              committed to maintaining the highest standards of information
              security and privacy possible. Thus we use market leading
              authentication and authorization software to keep all of your data
              safe, all of the time. We are committed to following all relevant
              laws on user privacy, including the EU’s GDPR rules and apply
              these universally to all customers and users, regardless of where
              you live.
            </p>
          </div>
          <div class="split-item-content center-content-mobile">
              <h3>What Data we Collect</h3>
              <p>In order to keep our promise of user privacy and to reduce the impact of any potential data breaches, we strive to collect the minimum necessary amount of data about our users. The data that we do collect is stored and secured to the highest standard available. What we collect may but does not necessarily include:
                <ul>
                    <li>Your name, email address or other relevant contact information</li>
                    <li>Your country of residence</li>
                    <li>Your search queries from the Fonz Music app</li>
                    <li>Requests that you make to our server form the Fonz Music app</li>
                    <li>Viewer and usage metrics on our website</li>
                    <li>Shipping information</li>
                </ul>
                Of this information we try to collect and retain as little as possible to ensure your privacy, and anonymize this information wherever possible to further ensure safety and privacy for all our users and customers.
              </p>
          </div>

          <div class="split-item-content center-content-mobile">
              <h3>What we Use This Data For</h3>
              <p>
                When accessing and processing user data, we strive to only use this data where necessary for improving our apps, website, services and any new features we may seek to add. Additionally we may use your data in order to fix any problems with our products or services. Any actions using your information beyond this will be done with the consent of our users, examples include marketing, promotions, and other normal business and sales practices. Reasons we use your data for may include:
                <ul>
                    <li>App fixes and problem resolution</li>
                    <li>Shipping and delivery of products</li>
                    <li>Legal and copyright requirements</li>
                    <li>Development of new features or personalization for the user or customer</li>
                    <li>Marketing actions with the user’s consent</li>
                </ul>
                At Fonz we know that our users trust us with personal data that may be valuable to other parties, thus we commit to our customers and users that we will never share, sell or distribute data to third parties for any reason not required by law.
              </p>
          </div>

            <div class="split-item-content center-content-mobile">
                <h3>Your Rights Under GDPR</h3>
                <p>
                    We comply with all parts of the European Union’s (EU) General Data Protection Regulation (GDPR) requirements and extend these rights to all of our customers and users where possible, not just those in Europe.
                    <ul>                    
                        <li>You have the right to withdraw consent for personal data processing at any time</li>
                        <li>This may limit some or many of the features available to you</li>
                        <li>Data processing may only include what was specifically agreed to by the user</li>
                        <li>You have the right to access any data that is being processed</li>
                        <li>You have the right to request removal of identifying data</li>
                        <li>You have the right to be informed of the scope, use and method of processed data</li>
                    </ul>
                    Additionally, to protect user privacy at all times, we anonymize as much data being processed as possible. 
                </p>
            </div>

            <div class="split-item-content center-content-mobile">
                <h3>Additional Information</h3>
                <p>
                    We at Fonz want to provide you the highest standards of privacy and security, and if you have any further questions, please email us at contact@fonzmusic.com and we will do our best to answer your queries and concerns. 
                    We follow all applicable laws regarding user data and comply with all lawful requests made by relevant authorities.
                    Further information about GDPR may be found at https://gdpr.eu/ .
                </p>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CLayout from "@/layouts/layoutMain.vue";
export default {
  created() {
    this.$emit("update:layout", CLayout);
  },
};
</script>