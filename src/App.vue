<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "app",

  mounted() {
    if (process.env.SOCKET_PORT != "") {
      this.$socket.on("SOCKET_MESSAGE", data => {
        console.log("socket get message ==" + data);
        this.$store.state.socketMessage = data;
      });
    }

    if (process.env.IPS_SERVER != "") {
      this.$store.state.ipsServer = process.env.IPS_SERVER;
    }
    if (process.env.SCS_SERVER != "") {
      this.$store.state.scsServer = process.env.SCS_SERVER;
    }
    if (process.env.IAS_SERVER != "") {
      this.$store.state.iasServer = process.env.IAS_SERVER;
    }
    if (process.env.ISS_SERVER != "") {
      this.$store.state.issServer = process.env.ISS_SERVER;
    }
    if (process.env.GDS_SERVER != "") {
      this.$store.state.gdsServer = process.env.GDS_SERVER;
    }
  }
};
</script>

<style></style>
