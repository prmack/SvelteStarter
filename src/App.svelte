<script lang="ts">
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<style global lang="scss">
  @import "src/styles/globalStyles.scss";
  @import "bulma/sass/utilities/_all.sass";
  @import "bulma/sass/grid/columns.sass";
  @import "bulma/sass/elements/container.sass";
</style>

<div class="container">
  <Router {routes} />
</div>
