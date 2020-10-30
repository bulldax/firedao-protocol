/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface LendingPoolAddressesProviderContract
  extends Truffle.Contract<LendingPoolAddressesProviderInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<LendingPoolAddressesProviderInstance>;
}

type AllEvents = never;

export interface LendingPoolAddressesProviderInstance
  extends Truffle.ContractInstance {
  getLendingPool(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getLendingPoolCore(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getPriceOracle(txDetails?: Truffle.TransactionDetails): Promise<string>;

  methods: {
    getLendingPool(txDetails?: Truffle.TransactionDetails): Promise<string>;

    getLendingPoolCore(txDetails?: Truffle.TransactionDetails): Promise<string>;

    getPriceOracle(txDetails?: Truffle.TransactionDetails): Promise<string>;
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
