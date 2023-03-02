import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { QKRW_CONTRACT_ABI, QKRW_ADDRESS } from "../contractInformation";

//Qkrw token contract information - polygon mumbai network
const Qkrw_abi = QKRW_CONTRACT_ABI;
const Qkrw_address = QKRW_ADDRESS;

type AddressProps = {
    address: `0x${string}`;
  };

export default function IncreaseAllowance({ address }: AddressProps) {
    const { config } = usePrepareContractWrite({
        address: Qkrw_address,
        abi: Qkrw_abi,
        functionName: "increaseAllowance",
        args: [Qkrw_address, "100000000000000000000000000"],
        overrides: { from: address },
      });

      const { data, isLoading, isSuccess, write } = useContractWrite({
        ...config,
        onSuccess(data) {
        console.log("완료")
        },
        onError(error) {
          console.log(error);
        },
      });
    return(<>
    <button disabled={!write} onClick={() => write?.()}>
        이거눌러
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && (
        <div>
          Transaction: {JSON.stringify(data)}
        </div>
      )}
    </>)
}