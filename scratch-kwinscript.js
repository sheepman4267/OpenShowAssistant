const clients = workspace.clientList();
for (var i = 0; i < clients.length; i++) {
    if (clients[i].caption.includes("OpenShow Display 1")) {
        print(clients[i].caption);
        workspace.sendClientToScreen(clients[i], 1)
        clients[i].fullScreen = true;
    }
}

const screens = workspace.numScreens;
print(screens);
