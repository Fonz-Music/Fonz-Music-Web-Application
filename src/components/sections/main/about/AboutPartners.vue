<template>
  <section class="section">
    <div class="section-inner">
      <div class="container">
        <div class="row">
          <div class="col text-align-mobile">
            <div class="partners-subheader">our traction</div>
            <div class="partners-header">progress to date</div>
            <div class="partners-text">
              <div
                class="paragraph-constraint-60"
                style="font-weight: 700; padding-bottom: 10px"
              >
                We're proud to say we've been part of prestigious accelerators
                and have rooted ourselves in Dublin's student ecosystem.
              </div>
              <div class="paragraph-constraint-80">
                We've been fortunate enough to participate in two world-renowned
                startup accelerators; Tangent's LaunchBox and Blackstone's
                LaunchPad programmes. We are also deeply connected with the
                student ecosystem here in Dublin, having featured in Trinity's
                own University Times, along with collaborating with Trinity
                Halls to roll out Fonz Coasters to nearly 900 students.
              </div>
            </div>
          </div>
        </div>

        <div class="partners-padding">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="partner-inner">
                <a
                  href="https://www.tcd.ie/tangent/accelerators/launchbox/launchbox-teams/"
                >
                  <img
                    class="partners-image-style"
                    src="@/assets/images/partners/launchbox-01.png"
                  />
                </a>
                <div class="partners-card-text">
                  LaunchBox Accelerator <br />
                  2021 Cohort
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              <div class="partner-inner">
                <a href="https://www.blackstonelaunchpad.org/">
                  <img
                    class="partners-image-style"
                    src="@/assets/images/partners/blackstone-01.png"
                  />
                </a>
                <div class="partners-card-text">
                  Blackstone LaunchPad <br />
                  2021 Cohort
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              <div class="partner-inner">
                <a
                  href="https://universitytimes.ie/2021/02/trinitys-entrepreneurs-enter-the-fore-despite-covid/"
                >
                  <img
                    class="partners-image-style"
                    src="@/assets/images/partners/unitimes-01.png"
                  />
                </a>
                <div class="partners-card-text">
                  University Times <br />
                  'In Focus' Article
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              <div class="partner-inner">
                <a
                  href="https://universitytimes.ie/2021/02/trinitys-entrepreneurs-enter-the-fore-despite-covid/"
                >
                  <img
                    class="partners-image-style"
                    src="@/assets/images/partners/tesLogo.png"
                  />
                </a>
                <div class="partners-card-text">
                  TCD Entreprenurial Society <br />
                  2021 Incubator
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutPartners",
};
</script>

<style>
@media (max-width: 768px) {
  .paragraph-constraint-80 {
    width: 100% !important;
  }

  .paragraph-constraint-60 {
    width: 100% !important;
  }

  .text-align-mobile {
    text-align: center;
  }
}

.paragraph-constraint-80 {
  width: 80%;
}

.paragraph-constraint-60 {
  width: 60%;
}

.partners-padding {
  width: 80%;
  margin: 0 auto;
  display: block;
  text-align: center;
}

.partner-inner {
  padding: 45px;
}

.partners-subheader {
  color: #ff9425;
  font-size: 16px;
}

.partners-header {
  font-size: 24px;
  color: #363636;
  font-weight: 700;
}

.partners-text {
  font-size: 14px;
  color: #707070;
  padding-top: 10px;
}

.partners-card-text {
  font-size: 12px;
  color: #707070;
  padding-top: 10px;
}
</style>