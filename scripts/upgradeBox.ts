import { ethers } from "hardhat"
import { Box, BoxProxyAdmin, BoxV2 } from "../typechain";

async function main() {
  const boxProxyAdmin: BoxProxyAdmin = await ethers.getContract('BoxProxyAdmin');
  const transparentProxy = await ethers.getContract('Box_Proxy');
  const boxV2 = await ethers.getContract('BoxV2');

  const proxyBox: Box = await ethers.getContractAt("Box", transparentProxy.address);
  const versionV1 = await proxyBox.version();
  console.log('version v1', versionV1)

  const upgradeTx = await boxProxyAdmin.upgrade(transparentProxy.address, boxV2.address)
  await upgradeTx.wait(1)

  // get the contract at the address with the Box ABI
  const proxyBoxV2: BoxV2 = await ethers.getContractAt("BoxV2", transparentProxy.address);
  const versionV2 = await proxyBoxV2.version();
  console.log('version v2', versionV2)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })