<script>
import { Dialog } from "vant";

export default {
  name: "404",
  created() {
    this.alert();
  },
  methods: {
    alert() {
      this.$router.push("/");
    }
  }
};
</script>
