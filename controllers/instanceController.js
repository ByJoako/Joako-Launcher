import path from 'path'
import fileHandler from '../utils/files-handler.js'

const instanceList = {
    Pyro: {
        name: "Pyro",
        url: "http://207.244.252.245:3000/files/Pyro",
        loadder: {
            minecraft_version: "1.16.5",
            loadder_type: "forge",
            loadder_version: "1.16.5-36.2.35"
        },
        verify: false,
        ignored: [],
        whitelist: [],
        whitelistActive: false,
        status: {
            nameServer: "PyroMC",
            ip: "mc.hypixel.net",
            port: 25599
        },
        jvm_args: [],
        game_args: []
    },
    hypixel: {
        name: "hypixel",
        url: "http://207.244.252.245:3000/files/hypixel",
        loadder: {
            minecraft_version: "1.8.9",
            loadder_type: "forge",
            loadder_version: "latest"
        },
        verify: true,
        ignored: [
            "config",
            "essential",
            "logs",
            "resourcepacks",
            "saves",
            "screenshots",
            "shaderpacks",
            "W-OVERFLOW",
            "options.txt",
            "optionsof.txt"
        ],
        whitelist: [],
        whitelistActive: false,
        status: {
            nameServer: "Hypixel",
            ip: "mc.hypixel.net",
            port: 25565
        }
    }
};

function getList(req, res) {
  res.json(instanceList)
}

function getInstance(req, res) {
  const { instance } = req.params;

  if (!instanceList[instance]) {
    return res.status(404).json({ message: 'Instancia inválida' });
  }
  
  
  res.json(fileHandler.dirToArray(`instances/${instance}`, req)); // Reemplazá 'a' con tu contenido real
}

function getDownloadFile(req, res) {
  const { instance, fileName } = req.params;

  if (!instanceList[instance]) {
    return res.status(404).json({ message: 'Instancia inválida' });
  }
  console.log('A')
  const filePath = path.join('instances', instance, fileName)
  res.download(filePath)
}
export default { getList, getInstance, getDownloadFile }