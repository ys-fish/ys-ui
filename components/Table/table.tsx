import { defineComponent } from "vue";
import "./table.scss";
const Table = defineComponent({
  name: "YTable",
  setup() {
    return () => (
      <table class="y_table">
        <thead >
          <tr class="y_table_header">
            <th class="text_left">Name</th>
            <th class="text_left">Calors</th>
          </tr>
        </thead>
        <tbody class="y_table_body">
          <tr>
            <td class="text_left">Frozen Yogurt</td>
            <td class="text_left">159</td>
          </tr>
        </tbody>
      </table>
    );
  },
});

export default Table;
