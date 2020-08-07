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
  @Prop({ default: 'medium' }) size!: number;
  @Prop({ default: 'default' }) color!: number;

  get iconClass() {
    return ['material-icons', 'icon', this.size, this.color];
  }
}
</script>
