export async function isSupport(Contract, interfaceId: string) {
  const result: boolean = await Contract.methods
    .supportsInterface(interfaceId)
    .call();

  return result;
}
