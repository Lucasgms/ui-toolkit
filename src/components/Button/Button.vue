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

import { IButton } from '../../core/models';

@Component
export default class Button extends Vue {
  @Prop({ default: 'default' }) color!: IButton['color'];
  @Prop({ default: 'filled' }) variant!: IButton['variant'];
  @Prop({ default: 'round-square' }) shape!: IButton['shape'];
  @Prop({ default: false }) disabled!: IButton['disabled'];
  @Prop({ default: false }) isLoading!: IButton['isLoading'];
  @Prop({ default: 'large' }) size!: IButton['size'];
  @Prop() href!: IButton['href'];

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
