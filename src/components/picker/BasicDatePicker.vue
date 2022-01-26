<template>
  <div class="input-group date">
    <input type="text" class="form-control" />
    <span class="input-group-addon">
      <span class="fa fa-calendar"></span>
    </span>
  </div>
</template>

<script>
import jQuery from "jquery";
import moment from "moment";
import "pc-bootstrap4-datetimepicker";
import events from "./events";

export default {
  name: "BasicDatePicker",

  props: {
    value: {
      default: null,
      required: true,
      validator(value) {
        return (
          value === null ||
          value instanceof Date ||
          typeof value === "string" ||
          value instanceof String ||
          value instanceof moment
        );
      }
    },
    config: {
      type: Object,
      default: () => ({})
    },
    wrap: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      dp: null,
      elem: null
    };
  },

  mounted() {
    if (this.dp) return;
    this.elem = jQuery(this.wrap ? this.$el.parentNode : this.$el);
    this.elem.datetimepicker(this.config);
    this.dp = this.elem.data("DateTimePicker");
    this.dp.date(this.value);
    this.elem.on("dp.change", this.onChange);
    this.registerEvents();
  },

  watch: {
    value(newValue) {
      this.dp && this.dp.date(newValue || null);
    },
    config: {
      deep: true,
      handler(newConfig) {
        this.dp && this.dp.options(newConfig);
      }
    }
  },

  methods: {
    onChange(event) {
      let formattedDate = event.date
        ? event.date.format(this.dp.format())
        : null;
      this.$emit("input", formattedDate);
    },
    registerEvents() {
      events.forEach(name => {
        this.elem.on(`dp.${name}`, (...args) => {
          this.$emit(`dp-${name}`, ...args);
        });
      });
    }
  },

  beforeDestroy() {
    if (this.dp) {
      this.dp.destroy();
      this.dp = null;
      this.elem = null;
    }
  }
};
</script>
