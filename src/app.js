const clientId = "APPLICATION ID"; //APPLICATION ID
const DiscordRPC = require("discord-rpc");
const browser = typeof window !== 'undefined';
const RPC = new DiscordRPC.Client({ transport: browser ? "websocket" : "ipc"});

DiscordRPC.register(clientId);

async function setActivity() {
  if (!RPC) return;
  RPC.setActivity({
    details: `Details presence`,
    state: `State presence`,
    startTimestamp: Date.now(),
    largeImageKey: `large image assets`,
    largeImageText: `text large image assets`,
    smallImageKey: `small image assets`,
    smallImageText: `text small image assets`,
    instance: false,
    buttons: [
      {
        label: `Text button`,
        url: `your url`,
      },
      {
        label: `Text button`,
        url: `your url`,
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
