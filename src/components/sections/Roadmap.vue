<template>
  <section
    class="roadmap section"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color'
    ]"
  >
    <div class="container">
      <div
        class="roadmap-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider'
        ]"
      >
        <c-section-header :data="sectionHeader" class="center-content" />
        <c-timeline>
          <c-timeline-item title="1 June 2020">
            dermo, jay, diarmuid, &amp; benji began Fonz Music to simplify song
            requests at parties, hangouts, &amp; roadtrips
          </c-timeline-item>
          <c-timeline-item title="1 August 2020">
            We sourced product, began development, and started accepting
            pre-orders (thank you to those who believed in us)
          </c-timeline-item>
          <c-timeline-item title="20 November 2020">
            Our app beta launched supporting Spotify &amp; distributed coasters
            to our believers
          </c-timeline-item>
          <!-- <c-timeline-item title="15 December 2020">
            Plans to add support for Apple Music
          </c-timeline-item> -->
          <c-timeline-item title="January 2021">
            Plans to add Apple Music, play music in app, &amp; allow DJ setting
          </c-timeline-item>
        </c-timeline>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionProps } from "@/utils/SectionProps.js";
import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";
import CTimeline from "@/components/elements/Timeline.vue";
import CTimelineItem from "@/components/elements/TimelineItem.vue";

export default {
  name: "CRoadmap",
  components: {
    CSectionHeader,
    CTimeline,
    CTimelineItem
  },
  mixins: [SectionProps],
  data() {
    return {
      sectionHeader: {
        title: "Our Journey",
        paragraph:
          "We are on a mission to digitalize and democratize song requesting for our users. Checkout our past accomplishments as well as whats coming next."
      }
    };
  }
};
</script>
