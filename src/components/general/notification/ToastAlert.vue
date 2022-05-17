<template>
    <div :class="`toast ${type || ''} ${shown ? 'shown': ''}`">
        <p :class="type">{{ message }}</p>
    </div>
</template>
<script>
export default {
    props: ['shown', 'type', 'message'],
    methods: {
        cooldown() {
            setTimeout(() => {
                this.$emit('state-change', false);
            }, 3000);
        },
    },
    created() {
        this.cooldown();
    },
    watch: {
        shown(newState) {
            if (newState) {
                this.cooldown();
            }
        },
    },
}
</script>
<style>
.toast.shown{
    right: 32px;
    transform: translateX(0);
}
.toast {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    bottom: 32px;
    right: 0;
    transform: translateX(100%);
    height: 64px;
    padding: 16px;
    width: 320px;
    border: 2px solid black;
    transition: right .2s, transform .2s;
}
.success {
    border-color: #0d0;
    color: #0d0;
}
.error {
    border-color: #d00;
    color: #d00;
}
</style>