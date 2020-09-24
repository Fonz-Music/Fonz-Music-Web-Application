<template>
    <section
        class="team section center-content"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="team-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content reveal-from-bottom" />
                <div
                    class="tiles-wrap"
                    :class="[
                        pushLeft && 'push-left',
                    ]">

                    <!-- Diarmuid -->
                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="200">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/team-member-02.png')"
                                        alt="Team member 02"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Diarmuid McGonagle
                                </h5>
                                <div class="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                                    Founder & CEO
                                </div>
                                <p class="m-0 text-sm">
                                    Diarmuid McGonagle is from Quincy, Massachusetts and is Chief Executive Officer. COIN is his favorite band and he loves nothing more than indie vibes at his tea parties.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Ben -->
                    <div class="tiles-item reveal-from-bottom">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/team-member-01.png')"
                                        alt="Team member 01"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Ben Vaughan
                                </h5>
                                <div class="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                                    Founder & CCO
                                </div>
                                <p class="m-0 text-sm">
                                   Ben ‘benji’ Vaughan is from Dublin, Ireland and is Chief Creative Officer. He listens to Sticky Fingers constantly and always has his headphones plugged in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    class="tiles-wrap"
                    :class="[
                        pushLeft && 'push-left',
                    ]">
                    <!-- Jay -->
                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="400">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/team-member-03.png')"
                                        alt="Team member 03"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Jay Cowan
                                </h5>
                                <div class="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                                    Founder & CFO
                                </div>
                                <p class="m-0 text-sm">
                                    Jay Cowan is from Blacksburg, Virginia and is Chief Finance Officer. A little old school, Jay jams out to some vintage Johnny Cash. He loves Tennessee Whiskey too.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Dermot -->
                    <div class="tiles-item reveal-from-bottom">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/team-member-04.png')"
                                        alt="Team member 01"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Dermot O'Brien
                                </h5>
                                <div class="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                                    Founder & CTO
                                </div>
                                <p class="m-0 text-sm">
                                    Dermot O’Brien is from Limerick, Ireland and is Chief Technology Officer. Aside from his passion for computers, he’s a child of the 70s-80s. From It’s Raining Men to Tainted Love, he loves a disco.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import { SectionTilesProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CTeam',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: 'Meet the team.',
        paragraph:
          'We’re just a few lads from Trinity College Dublin, in Ireland, with a passion for music. After spending hours together listening to our favorite tracks and sharing our unique music taste, we wanted a way to make sharing our favourite tunes easier. Starting from this problem, we brainstormed solutions and finally created Fonz Music.'
      }
    }
  }
}
</script>