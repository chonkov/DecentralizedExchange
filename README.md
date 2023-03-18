# Lottery Contract

## Table of Contents

- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## About The Project

The Dapp is a fully functional decentralized, which is an 'Uniswap' clone and allows its users to swap tokens, create their own liquidity pools or add to those that already exist.

### Built With

- ![Solidity]
- ![Ethers]

## Getting Started

### Prerequisites

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `x.x.x`

### Installation

1. Clone the repo

   ```
   git clone https://github.com/grc02/DecentralizedExchange.git
   ```

2. Change the current working directory

   ```
   cd DecentralizedExchange
   ```

3. Install npm packages
   ```
   npm i
   ```

## Usage

**Set up your enviroment variables in a '.env' file**

**Spin up local node:**

```
npx hardhat node
```

**Testing:**

```
npx hardhat test
```

[solidity]: https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white
[ethers]: https://img.shields.io/badge/ethers.js-2535a0?style=for-the-badge&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAGQAAAA6CAYAAABGZvzTAAAABmJLR0QA%2FwD%2FAP%2BgvaeTAAAGZElEQVR4nO2cW4xdVRnHf2taClSLUC6lqLWUWynGgA8GaYAGRQQvQHkBDA8QwiWN4oMJTXwh0cgDCSH4gBED6JMBFBKhhACpEkIJQoDSluu0iAKl0HZoSS9MZ34%2BrD1wOumctc8%2Ba599ZjK%2FZOdMutf51v%2Fba591%2Bda3CtNMM800k4bQtIAU6gCwDPgecDawAJgH7AO2A%2B8ATwNPAv8KIdiI0KmOOlu9SR20PK%2BpN6gzm9Y%2FpVDPUd%2FooCHG84r6nab9mPSoA%2Brt6mgXjTHGsHpd0z5NWoxd1EMZGmI8v23at0mHOkN9uIbGGONXTfs4qVDvqrExVEfUi5v2swyNT3vVq4C%2FJIqNAs8CjwEvAYPAHOAw4DzgEuCbCRtDwJIQwgddCZ7KqPPVrW3e7FH1z%2BrJCTtBXW6c9rbjgV75NilRH2zz8D5Wf9ChvdnqvYlGubAufyY16ulOPL39SF3She1ft2mQNTn9mDKof2vz0H6Uwf6tbewvy%2BBCLfRkUFcXAWcBi4GvEgfk5RPUf28I4ZoMdQ4Aq4FzDnD7eWAVcDRwUPFv24FNxEnDiyGEkW419BXGAfsW9a02b%2Bp4htWvZ9SwSN3VQf1jDKl3q9%2FOpaUx1MPVO9U9FR7E%2FTXo6WaNM6r%2BVT02t66eoJ6vbu7iAVxZg6ZTutAzxmb13NzaakX9pXFF3A0LatL2dtdNorvVH9ahr5Us%2BwbqSuDWil%2FfDvwX%2BE%2FxWQf%2FAM4FtgIDwFzgRODLHdg4BHhAXRpCWJtfYibUn9lZuHxYXaVeY2IFXrPuGeqp6gr1xQ70r1MPbkp3W9ST1J0lHdmn%2FkH9RtO6x2MMvVymfljSl5VNaz4g6uMlHXjTSbCDZ5yqbyjhz1a1k%2B6ufowzqjI8q85tWm9Z1OOMoZsU1zatdT8s9%2Bt4VT28aa2dol5ewrenmtb5OerXTE9xd6uLm9ZaBePefiqUv1f9Uu66Byp%2B7%2BIS370zhPB6RfuNEkIYBe5JFJsFnJ677qoNcqCAXStDwO8q2u4XnihR5pTclVZtkG8l7t8fQvikou1%2BYS0wnCiTfXzsuEHUAByfKPZgNTnVMIbas1J0W%2B8lijXfIMQQQruVqsC%2Fq8mpzKKa7G5J3O%2BLQX1W4v5ICGGoipguSHWhdZHdzyoNsitxf6Y6u4qYLjitJrup1XiqS%2BuYjhskhDAM7E4U6%2FVi8CQ19cutQmo7YF3uCqsOhh8n7vc6gLiZmDCXDWMkut0vZCfwcs46oXqDvJG4f0JFu1VZC1yV2eaPE%2FcfDyF8lrnOyg2SWoH3OjngKeAyNTUdL4XxwE8qePinHHVlQb0yEed5rgFNq9VHM9lakfDvhWI91h%2Bo82y%2FS7jPHmdqGHN7tctECfUMdUcb30bUs3Ppzoa6JvEWreixnmDce9ljhznBLTbOV7cl%2FLott%2FYsqFcnhK%2B3xz9r9WT1U2NyXOnjbOqJ6n2mcwMetV8PlBozzVN70Msb0HWR%2BllR%2F2r1AvWglvszjLuC56kr1actl770iHpor%2F3pCPXGhBOb7P2qHfVC9x8Hdhm7om3G8a0T9qo3W0MAMzvqTNMpNHc3pO0E9ckOH%2F54nlHPaEJ%2FZYz9b7tZierPG9S3VH3M8lmVu42ngZc2oTfLoGs8lfQwE0eCBW4KIfw%2BR31VMGa%2BLCNmMC4AjiQeixgiBgnfJR5feCaEkIrV9T%2FqpaYz3v9ovw%2BMmVEPVher31WXGBNEDnOCMSnrtFQ9E%2Fg7ML9NsUHgFyGEVTnrbhL1aOIm2dg1C9hRXFuAV0II75SxlX2doB4D3AFckSi6BrgNeKQI6fct6hxgYXEd3%2FL3AuKR7UHiyauXgJdDCB9Vrau2hZv6feA3wJmJoluAh4j99z9DCB%2FWpWkijPlVC9n%2FYbdeRxL%2FG6j1xD2Q9cW1IYSwJ6eW2lfSRcNcD%2FyU9PYvwAbir2cj8czfRmBTCCG1v91a5wBwRHHNbfmcBxwHHFt8zi%2BuI1q%2B%2FgHxoa8rtLxKfPA7y9bfDT0LbahHEfcYfkLcTKqyq7iHuFu5A9gLjPBFwsWhxASMAeArCTufEBt6sLg2ErcU1oUQtlXQlY1GQsjFG3wqsTs7rbgWEt%2FWOV2a%2FxT4H%2FFNf6%2Fl833i1HYwhJDa8WyM%2FonpF6iHAEcRu5d5TJxqs4svZjI7iSexdky548zTTDPNNP3L%2FwGTnK6sO%2BBBWAAAAABJRU5ErkJggg%3D%3D

```

```
