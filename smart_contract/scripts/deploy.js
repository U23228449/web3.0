const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  // Esperar a que el contrato sea desplegado
  await transactions.waitForDeployment();

  // Nota: El nombre de la variable es `transactions`, no `transactionsContract`
  console.log("Transactions address: ", transactions.target); // En Ethers v6 se usa `target` para obtener la dirección
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
