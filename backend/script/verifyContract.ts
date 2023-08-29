import { run } from "hardhat";
async function verify(contractAddress: string) {
    console.log("verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: [],
        })
    } catch (error: unknown) {
        if (typeof error === "object" && error != null && "message " in error) {
            const errorMessage = (error as { message: unknown }).message
            if (
                typeof errorMessage === "string" &&
                errorMessage.toLowerCase().includes("already verified")
            ) {
                console.log("Contract already verified")
            } else {
                console.log(errorMessage)
            }
        } else {
            console.error(error)
        }
    }
}


export default verify;
