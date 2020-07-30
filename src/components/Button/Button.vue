<template>
  <component
    :is="href ? 'a' : 'button'"
    :class="buttonClass"
    :href="href"
    :role="href ? '' : 'button'"
    :aria-busy="isLoading"
    @click="$emit('click')"
  >
    <span class="startIcon">
      <slot name="startIcon"></slot>
    </span>
    <span class="children">
      <slot />
    </span>
    <span class="endIcon">
      <slot name="endIcon"></slot>
    </span>
  </component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ default: 'default' }) color!: string;
  @Prop({ default: 'filled' }) variant!: string;
  @Prop({ default: 'round-square' }) shape!: string;
  @Prop({ default: false }) disabled!: boolean;
  @Prop() href!: string;
  @Prop({ default: false }) isLoading!: boolean;
  @Prop({ default: 'large' }) size!: string;

  get buttonClass() {
    return [
      'button',
      this.color,
      this.variant,
      this.shape,
      this.size,
      this.isLoading ? 'isLoading' : '',
    ];
  }
}
</script>
