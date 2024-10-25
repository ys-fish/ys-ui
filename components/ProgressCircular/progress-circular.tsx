import { defineComponent } from "vue";
import "./progress-circular.scss";
const ProgressCircular = defineComponent({
  name: "YProgressCircular",
  setup() {
    return () => (
      <div>
        <svg width="100" height="100" class="router">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e0e0e0"
            stroke-width="10"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#0288D1"
            stroke-width="10"
            fill="none"
            class="path"
          />
          
        </svg>
      </div>
    );
  },
});

export default ProgressCircular;
