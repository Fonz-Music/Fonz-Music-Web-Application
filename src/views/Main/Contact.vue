<template>
  <fragment>
    <c-contact-head class="" />
    <c-generic-section top-divider>
      <div class="container-xs">
        <c-section-header
          :data="genericSection04Header"
          class="center-content"
        />
        <c-accordion>
          <c-accordion-item title="What music providers do you support?" active>
            Currently we support Spotify. In the future, we'll be adding Apple
            Music, Amazon Music, Soundcloud, Deezer and more. Have a
            recommendation? Email us at contact@fonzmusic.com!
          </c-accordion-item>
          <c-accordion-item title="Do I need internet to use the Fonz app?">
            Yes! Because of the way we communicate with our music providers, an
            internet connection is a requirement for our app.
          </c-accordion-item>
          <c-accordion-item title="How many songs can I queue?">
            We don’t set a limit per user, but you can only queue one song at a
            time. If you’d be interested in queuing more than one song at a
            time, let us know at contact@fonzmusic.com.
          </c-accordion-item>
          <c-accordion-item title="When will you ship out product?">
            We’re currently aiming to ship by mid October.
          </c-accordion-item>
          <c-accordion-item title="Can I use multiple coasters at once?">
            Yes! You should be able to connect your music provider to multiple
            coasters at once to leave in different rooms or keep one in the car.
          </c-accordion-item>
          <c-accordion-item title="What phones do Fonz work with?">
            Fonz currently works with any phone with NFC capabilities. For
            iPhones, that is iPhone 7 and above. Almost all Android phones after
            2012 support NFC. For a better understanding, refer to this graphic
            from Blue Bite on which Androids are supported.
          </c-accordion-item>
          <c-accordion-item title="Will Fonz work with iPads?">
            Unfortunately, Fonz will not integrate with Apple iPads right now.
            However, iOS 14 may give Fonz the ability to integrate our app with
            iPads.
          </c-accordion-item>
        </c-accordion>
      </div>
    </c-generic-section>
    <EmailSignup/>
  </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutDefault.vue";
// import section header
// import sections
import CAccordion from "@/components/elements/Accordion.vue";
import CAccordionItem from "@/components/elements/AccordionItem.vue";
import CContactHead from "@/components/sections/ContactHead.vue";
import EmailSignup from "@/components/sections/EmailSignupComp.vue";
// import some required elements

export default {
  name: "Secondary",
  components: {
    CAccordion,
    CAccordionItem,
    CContactHead,
    EmailSignup
  },
  data() {
    return {
      genericSection01Header: {
        title: "Modal - Lorem ipsum is placeholder text commonly used."
      },
      genericSection04Header: {
        title: "hello"
      },
      demoModalActive: false
    };
  },
  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
