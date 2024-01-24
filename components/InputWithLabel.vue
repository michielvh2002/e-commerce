<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  label: {
    type: String,
    required: true,
  },

  type: {
    type: String,

    validator: (value: string) => {
      return [
        "button",
        "checkbox",
        "color",
        "date",
        "email",
        "file",
        "number",
        "password",
        "radio",
        "text",
        "time",
      ].includes(value);
    },

    required: false,
    default: "text",
  },

  id: {
    type: String,
    required: true,
  },

  autofocus: {
    type: Boolean,
    required: false,
    default: false,
  },

  form: {
    type: String,
    required: false,
  },

  value: {
    required: false,
  },

  modelValue: {
    required: false,
  },

  step: {
    type: Number,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
  },
});

defineEmits(["update:modelValue"]);
</script>
<template>
  <div
    :class="props.type === 'checkbox' ? 'checkboxcontainer' : ''"
    class="inputcontainer"
  >
    <label :for="props.id"
      >{{ props.label }}<span v-if="required" class="required">*</span></label
    >
    <input
      :name="props.id"
      :type="props.type"
      :id="props.id"
      :autofocus="props.autofocus"
      :step="props.step"
      :form="props.form"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :checked="!!modelValue"
      v-bind="$attrs"
    />
  </div>
</template>
<style scoped lang="scss">
.checkboxcontainer {
  flex-direction: row !important;
  height: 22px !important;
}

.inputcontainer {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
input {
  box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
input[type="checkbox"] {
  width: 25px;
  height: 25px;
  border-radius: 0.5rem;
  vertical-align: middle;
  border: 2px solid inherit;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}
input[type="checkbox"]:checked {
  background-color: inherit;
  background-image: url("~/assets/check.svg");
  background-size: 18px 13px;
  background-repeat: no-repeat;
  background-position: center;
}
input:focus {
  border: none;
  outline: none;
}
.required {
  color: #d20000;
  font-size: 1.2rem;
}
</style>
