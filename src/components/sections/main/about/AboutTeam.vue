<template>
  <section class="section">
      <div class="section-inner">
          <div class="container">
              <div class="row">
                    <div class="col">
                    <div class="team-subheader"> about us </div>
                    <div class="team-header"> meet the team </div>
                    <div class="team-text"> 
                        <div class="paragraph-constraint-60" style="font-weight: 700; padding-bottom: 10px;">
                        We're fortunate to have such a well-rounded and motivated team. No matter what obstacle the Fonz
                        team faces, we'll be able to smash through it and move on to the next bigger, greater thing.
                        </div>
                        <div class="paragraph-constraint-80">
                        Being four Trinity College Dublin students, we're well connected in the student ecosystem
                        and are fortunate enough to have access to all that Trinity has to offer. Our involvement
                        in Tangent's Launchbox and Blackstone's LaunchPad programmes have offered us invaluable 
                        experience and provided us with a vast amount of knowledge regarding entrepreneurship.
                        </div>
                    </div>
                  </div>
              </div>

              <div class="card-padding">
              <div class="row">
                  <div class="col-md-3 col-sm-6">
                      <div class="team-card">
                        <img class="image-style" src="@/assets/images/TeamMembers/team-member-02.png"/>
                        <div class="team-card-text" style="font-weight: 700; padding-top: 10px;">
                            Diarmuid McGonagle
                        </div>
                        <div class="team-card-text" style="color: #FF9425">
                            CEO
                        </div>
                        <div class="team-card-text" style="padding-bottom: 10px;">
                            TCD | Comp Sci &amp; Business
                        </div>
                        <div class="team-card-text">
                            Diarmuid is the cornerstone of Fonz, and ensures everything and everyone is
                            hitting their targets. He is our primary Android and iOS app developer and
                            squashes any bugs in his path.
                        </div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                      <div class="team-card">
                        <img class="image-style" src="@/assets/images/TeamMembers/team-member-01.png"/>
                        <div class="team-card-text" style="font-weight: 700; padding-top: 10px;">
                            Ben Vaughan
                        </div>
                        <div class="team-card-text" style="color: #FF9425">
                            CDO
                        </div>
                        <div class="team-card-text" style="padding-bottom: 10px;">
                            TCD | Comp Sci &amp; Business
                        </div>
                        <div class="team-card-text">
                            A designer at heart yet a developer in the mind, Ben ensures that
                            everything to do with Fonz is kept beautiful and intuitive. UX &amp; UI
                            are his specialty and everything revolves around retention.
                        </div>
                      </div>
                  </div>
                  
                  <div class="col-md-3 col-sm-6">
                      <div class="team-card">
                        <img class="image-style" src="@/assets/images/TeamMembers/team-member-04.png"/>
                        <div class="team-card-text" style="font-weight: 700; padding-top: 10px;">
                        Dermot O'Brien
                        </div>
                        <div class="team-card-text" style="color: #FF9425">
                            CTO
                        </div>
                        <div class="team-card-text" style="padding-bottom: 10px;">
                            TCD | Comp Sci &amp; Business
                        </div>
                        <div class="team-card-text">
                            Having tinkered with computers since his age was in the single digits, Dermot
                            is Fonz's mastermind when it comes to infrastructure and scalability. API development
                            is where Dermot thrives.
                        </div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                      <div class="team-card">
                        <img class="image-style" src="@/assets/images/TeamMembers/team-member-03.png"/>
                        <div class="team-card-text" style="font-weight: 700; padding-top: 10px;">
                        Theo McGirr
                        </div>
                        <div class="team-card-text" style="color: #FF9425">
                            CFO
                        </div>
                        <div class="team-card-text" style="padding-bottom: 10px;">
                            TCD | Law &amp; Business
                        </div>
                        <div class="team-card-text">
                            The newest member to the Fonz team, Theo is our operations and finance guru. 
                            Theo brings unmatched energy to the company, and is focused primarily on user acquisition.
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
    name: 'AboutTeam',
}
</script>

<style>
@media (max-width: 768px) {
    .card-padding {
        width: 100%;
        padding-right: 20px;
        margin: 0 auto; 
        display: block; 
        padding-top: 20px;
    }

    .paragraph-constraint-80 {
        width: 100% !important;
        text-align: center;
    }

    .paragraph-constraint-60 {
        width: 100% !important;
        text-align: center;
    }
}

.paragraph-constraint-80 {
    width: 80%
}

.paragraph-constraint-60 {
    width: 60%;
}

.card-padding {
    width: 80%;
    margin: 0 auto; 
    display: block; 
    padding-top: 20px;
}

.team-subheader {
    color: #ff9425;
    font-size: 16px;
}

.team-header {
    font-size: 24px;
    color: #363636;
    font-weight: 700;
}

.team-text {
    font-size: 14px;
    color: #707070;
    padding-top: 10px;
}

.team-card {
    background-color: #F5F5F5;
    border-radius: 15px;
    margin: 5px;
    padding: 10px;
}

.team-card-text {
    text-align: center;
    font-size: 12px;
}

.image-style {
    width: 100%;
    border-radius: 15px;
}
</style>