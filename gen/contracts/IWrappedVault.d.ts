/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IWrappedVaultContract
  extends Truffle.Contract<IWrappedVaultInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IWrappedVaultInstance>;
}

type AllEvents = never;

export interface IWrappedVaultInstance extends Truffle.ContractInstance {
  decimals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  getPricePerFullShare(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  governance(txDetails?: Truffle.TransactionDetails): Promise<string>;

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

  token(txDetails?: Truffle.TransactionDetails): Promise<string>;

  vault(txDetails?: Truffle.TransactionDetails): Promise<string>;

  methods: {
    decimals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    getPricePerFullShare(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    governance(txDetails?: Truffle.TransactionDetails): Promise<string>;

    name(txDetails?: Truffle.TransactionDetails): Promise<string>;

    symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

    token(txDetails?: Truffle.TransactionDetails): Promise<string>;

    vault(txDetails?: Truffle.TransactionDetails): Promise<string>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
