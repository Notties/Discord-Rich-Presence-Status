const clientId = "1020937367525265408";
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: "ipc" });

DiscordRPC.register(clientId);

async function setActivity() {
  if (!RPC) return;
  RPC.setActivity({
    details: `Knot Presence`,
    state: `Playing with Test Discord RPC`,
    startTimestamp: Date.now(),
    largeImageKey: `logo`,
    largeImageText: `largeImageText`,
    smallImageKey: `logo`,
    smallImageText: `smallImageText.`,
    instance: false,
    buttons: [
      {
        label: `Text Button`,
        url: `https://www.google.com`,
      },
    ],
  });
}

RPC.on("ready", async () => {
  setActivity();

  setInterval(() => {
    setActivity();
  }, 15 * 1000);
});

RPC.login({ clientId }).catch((err) => console.error(err));
