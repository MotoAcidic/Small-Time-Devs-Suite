document.addEventListener('DOMContentLoaded', async () => {
  try {
      const { Keypair } = await import('@solana/web3.js');
      const bs58 = (await import('bs58')).default;

      const logOutput = document.getElementById("logOutput");

      function log(message) {
          logOutput.value += message + "\n";
          logOutput.scrollTop = logOutput.scrollHeight;
      }

      async function copyToClipboard(text) {
          try {
              await navigator.clipboard.writeText(text);
              log("Copied to clipboard: " + text);
          } catch (error) {
              log("Failed to copy to clipboard: " + error.message);
          }
      }

      window.generateWallet = async function () {
          try {
              const keypair = Keypair.generate();
              const publicKey = keypair.publicKey.toBase58();
              const privateKey = JSON.stringify(Array.from(keypair.secretKey));
              document.getElementById("publicKeyOutput").value = publicKey;
              document.getElementById("privateKeyOutput").value = privateKey;
              log("Generated wallet with public key: " + publicKey);
          } catch (error) {
              console.error("Error generating wallet:", error);
              log("Error generating wallet: " + error.message);
          }
      };

      window.convertToBase58 = async function () {
          try {
              const input = document.getElementById("inputKeypair").value;
              log("Input JSON: " + input);
              const secretKeyArray = JSON.parse(input);
              if (!Array.isArray(secretKeyArray)) {
                  throw new Error("Parsed secret key is not an array");
              }
              log("Parsed Secret Key Array: " + secretKeyArray);
              const keypair = Keypair.fromSecretKey(new Uint8Array(secretKeyArray));
              const publicKey = keypair.publicKey.toBase58();
              const privateKey = bs58.encode(keypair.secretKey);
              document.getElementById("base58PublicKeyOutput").value = publicKey;
              document.getElementById("base58PrivateKeyOutput").value = privateKey;
              log("Converted to Base58 with public key: " + publicKey);
          } catch (error) {
              console.error("Error converting to Base58:", error);
              log("Error converting to Base58: " + error.message);
          }
      };

      document.getElementById("generateWallet").addEventListener("click", generateWallet);
      document.getElementById("convertBase58").addEventListener("click", convertToBase58);

      document.getElementById("copyWallet").addEventListener("click", () => {
          const publicKey = document.getElementById("publicKeyOutput").value;
          const privateKey = document.getElementById("privateKeyOutput").value;
          copyToClipboard(`Public Key: ${publicKey}\nPrivate Key: ${privateKey}`);
      });

      document.getElementById("copyBase58").addEventListener("click", () => {
          const publicKey = document.getElementById("base58PublicKeyOutput").value;
          const privateKey = document.getElementById("base58PrivateKeyOutput").value;
          copyToClipboard(`Public Key: ${publicKey}\nPrivate Key: ${privateKey}`);
      });
  } catch (error) {
      console.error("Error initializing script:", error);
      log("Error initializing script: " + error.message);
  }
});
