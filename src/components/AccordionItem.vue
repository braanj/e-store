<template>
  <div class="accordion-item">
    <span class="accordion-header" :id="'header_' + title">
      <button class="accordion-button collapsed pb-0" type="button">
        <span>{{ title }}</span>
      </button>
    </span>

    <div :id="'tab_' + title" class="accordion-collapse collapse show">
      <div class="accordion-body border-">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component

export default class AccordionItem extends Vue {
  @Prop() title!: string
  @Prop() index!: number
}
</script>

<style lang="scss">
.accordion-item {
  border: 0;
  border-bottom: 2px solid var(--body-bg-color);

  .accordion-header {
    .accordion-button {
      text-transform: uppercase;

      &:focus {
        border-color: unset;
        outline: 0;
        box-shadow: none;
      }

      &::after {
        display: none;
      }

      &:not(.collapsed) {
        background-color: transparent;
        color: inherit;
      }

      span::first-letter {
        text-transform: uppercase;
      }
    }
  }
}

.ais-ClearRefinements-button {
  padding: .5rem;
  border-radius: 5px;
  border: 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: #e7e7eb;
  box-shadow: var(--body-bg-color) 0px 4px 12px;
}

.ais-ClearRefinements-button:disabled {
  display: none;
}

.ais-RefinementList-list {
  list-style: none;
  padding-left: 0;
}


.ais-RefinementList-item {
  color: #82858d;
  font-size: 1.1rem;
  &:hover,
  &.ais-RefinementList-item--selected {
    color: #000;
  }
}

.ais-RefinementList-checkbox {
  height: 18px;
  width: 18px;
}

.ais-RefinementList-label {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  line-height: 1;
  margin-top: 0.5rem;

  .ais-RefinementList-count {
    margin-left: .5rem;

    &::before {
      content: '(';
    }

    &::after {
      content: ')';
    }
  }
}</style>