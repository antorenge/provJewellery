# provJewellery

Decentralized Application (dApp) that helps users to determine provenance for handcrafted jewellery.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node.js](https://nodejs.org/en/)
* [Angular CLI](https://cli.angular.io/)
* [Truffle framework](https://truffleframework.com/docs/truffle/getting-started/installation)
* [Ganache CLI](https://github.com/trufflesuite/ganache-cli)
* [MetaMask plugin](https://metamask.io/)

### Installing

To install packages

```{shell}
npm install
```

Run the application

```{shell}
ng serve
```

Migrate the smart contracts

```{shell}
truffle migrate
```

And, on a new terminal, initialize TestRPC server with 100 Ether tokens. Obtain private key from Metamask plugin.

```{shell}
testrpc --account="0x<PRIVATE_KEY>,100000000000000000000"
```

Note: Confirm metamask to be connected to private network `Localhost:8545`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
