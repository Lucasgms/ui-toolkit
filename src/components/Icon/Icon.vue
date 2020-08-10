<template>
  <i :class="iconClass">
    {{ icon }}
  </i>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Icon extends Vue {
  @Prop({ default: '' }) icon!: string;
  @Prop({ default: '' }) size!: number;
  @Prop({ default: '' }) variant!: number;

  get iconClass() {
    return ['icon', `icon--${this.size}`, `icon--${this.variant}`];
  }
}
</script>

<style src="../../styles/components/Icon.module.css" scoped></style>
