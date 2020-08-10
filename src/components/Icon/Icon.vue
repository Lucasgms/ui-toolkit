<template>
  <i :class="iconClass">
    {{ icon }}
  </i>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { IIcon } from '../../core/models';

@Component
export default class Icon extends Vue {
  @Prop() icon!: IIcon['icon'];
  @Prop({ default: '' }) color!: IIcon['color'];

  get iconClass() {
    return ['icon', `icon--${this.color}`];
  }
}
</script>

<style src="../../styles/components/Icon.module.css" scoped></style>
