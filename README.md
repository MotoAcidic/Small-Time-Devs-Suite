# ![Solana Wallet Generator](icon.webp) Solana Wallet Generator

This Chrome extension allows you to generate Solana wallets and convert keys to Base58.

## Features

- Generate a new Solana wallet with public and private keys.
- Convert a keypair JSON to Base58 format.
- Copy generated keys to the clipboard.
- View console logs directly in the extension popup.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Compile the Extension

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/solana-wallet-generator.git
    cd solana-wallet-generator
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Build the extension:
    ```sh
    npm run build
    ```

This will generate a `dist` folder containing the bundled JavaScript file.

### Load the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. Enable "Developer mode" using the toggle switch in the top right corner.
3. Click on the "Load unpacked" button.
4. Select the directory where you cloned the repository. Make sure the `dist` folder is present in the selected directory.

The extension should now be loaded in Chrome.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. To generate a new Solana wallet, click the "Generate Solana Wallet" button. The public and private keys will be displayed in their respective text areas.
3. To convert a keypair JSON to Base58, paste the JSON array into the "Enter Keypair JSON" textarea and click the "Convert to Base58" button. The Base58 public and private keys will be displayed in their respective text areas.
4. Use the "Copy Wallet Keys" and "Copy Base58 Keys" buttons to copy the keys to the clipboard.
5. View the console log at the bottom of the popup to see what is happening.

## License

This project is licensed under the ISC License.