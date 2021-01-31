<template>
    <section class="section">
        <div class="section-inner">
            <div class="container">
                <div class="row justify-content-center">

                    <div class="col tile-spacing tile-background">
                        <div class="container tile-padding">
                            <div class="row">
                                <p> total income </p> 
                            </div>
                            <div class="row">
                                <p> $234.00 </p>
                            </div>
                        </div>
                    </div>

                    <div class="col tile-spacing tile-background">
                        <div class="container tile-padding">
                            <div class="row">
                                <p> total withdrawn </p> 
                            </div>
                            <div class="row">
                                <p> $234.00 </p>
                            </div>
                        </div>
                    </div>

                    <div class="col tile-spacing tile-background">
                        <div class="container tile-padding">
                            <div class="row">
                                <p> available withdrawals </p> 
                            </div>
                            <div class="row">
                                <p> $234.00 </p>
                            </div>
                        </div>
                    </div>

                    <div class="col tile-spacing tile-background">
                        <div class="container tile-padding">
                            <div class="row">
                                <p> pending withdrawals </p> 
                            </div>
                            <div class="row">
                                <p> $234.00 </p>
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
    name:"DashboardBar"
}
</script>


<style scoped>
    .tile-background {
        border: solid 1px;
        border-radius: 5px;
        border-color: lightgrey !important;
    }

    .tile-spacing {
        margin: 10px;
    }

    .tile-padding {
        padding: 5px 10px 2px 10px;
    }

    .tile-row-spacing {
        margin: 0px;
    }
</style>