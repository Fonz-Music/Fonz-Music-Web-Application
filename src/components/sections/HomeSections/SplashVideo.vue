<template>
  <section>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-9 col-sm-12">
          <video controls controlslist="nofullscreen nodownload">
            <!-- <source src="@/assets/images/SplashImages/SplashVideo.mp4"/> -->
            <source
              src="https://player.vimeo.com/video/509434571?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            />
            <iframe
              src="https://player.vimeo.com/video/509434571?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="1280"
              height="720"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              title="Fonz Video"
            ></iframe>
            <!-- <iframe
              src="https://player.vimeo.com/video/509434571?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="1280"
              height="720"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              title="Fonz Video"
            ></iframe> -->
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SplashVideo",
};
</script>

<style scoped></style>
