<template>
    <tr>
        <td> {{ amount }} </td>
        <td> {{ currency }} </td>
        <td> {{ quantity }} </td>
        <td> {{ coupon }} </td>
        <td> {{ transactionid }} </td>
        <td> {{ packageid }} </td>
        <td> {{ email }} </td>
        <td> {{ retail }} </td>
        <td> {{ discount }} </td>
        <td> {{ earnings }} </td>
    </tr>
</template>

<script>
export default {
    name:"AffiliateTableRow",
    components: {

    },

    props: [
        'amount',
        'currency',
        'quantity',
        'coupon',
        'transactionid',
        'packageid',
        'email',
        'retail',
        'discount',
        'earnings'
    ],
}





</script>