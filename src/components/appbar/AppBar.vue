<template>
    <div style="display: flex; flex-direction: row; align-self: stretch;
    align-items: center; justify-content: center;
    background-color: black;">
        <h1 style="color: white; margin: 16px; font-weight: unset;">{{ title }}</h1>
    </div>
</template>
<script>
export default {
    props: ["title"]
}
</script>