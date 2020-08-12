<template>
  <component
    :is="href ? 'a' : 'button'"
    :class="buttonClass"
    :href="href"
    :role="href ? '' : 'button'"
    :disabled="disabled"
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
  @Prop({ default: 'primary' }) color!: IButton['color'];
  @Prop({ default: 'filled' }) variant!: IButton['variant'];
  @Prop({ default: false }) disabled!: IButton['disabled'];
  @Prop({ default: 'medium' }) size!: IButton['size'];
  @Prop() href!: IButton['href'];

  get buttonClass() {
    return ['button', this.color, this.variant, this.size];
  }
}
</script>

<style src="../../styles/components/Button.module.css" scoped></style>
